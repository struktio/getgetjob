-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create storage bucket for resumes
insert into storage.buckets (id, name, public) 
values ('resumes', 'resumes', true);

-- Create storage policy to allow authenticated uploads
create policy "Allow authenticated uploads"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'resumes' AND
    auth.uid() = owner
  );

-- Create storage policy to allow public downloads
create policy "Allow public downloads"
  on storage.objects for select
  to public
  using (bucket_id = 'resumes');

-- Create enum for resume status
create type resume_status as enum ('processing', 'completed', 'failed');

-- Create resumes table
create table public.resumes (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  original_resume_url text not null,
  optimized_resume_url text,
  job_url text not null,
  job_title text,
  company text,
  status resume_status default 'processing',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create updated_at trigger function
create or replace function handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create trigger for updated_at
create trigger set_updated_at
  before update on public.resumes
  for each row
  execute function handle_updated_at();

-- Enable Row Level Security
alter table public.resumes enable row level security;

-- Create policies for resumes table
create policy "Users can view their own resumes"
  on public.resumes for select
  using (auth.uid() = user_id);

create policy "Users can insert their own resumes"
  on public.resumes for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own resumes"
  on public.resumes for update
  using (auth.uid() = user_id);

-- Create function to notify on resume updates
create or replace function notify_resume_update()
returns trigger as $$
begin
  perform pg_notify(
    'resume_updates',
    json_build_object(
      'id', new.id,
      'status', new.status,
      'optimized_resume_url', new.optimized_resume_url
    )::text
  );
  return new;
end;
$$ language plpgsql;

-- Create trigger for resume updates
create trigger on_resume_update
  after update on public.resumes
  for each row
  execute function notify_resume_update();