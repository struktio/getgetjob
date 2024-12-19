export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
] as const;

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export function validateResumeFile(file: File): void {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File size must be less than 10MB');
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type as typeof ALLOWED_FILE_TYPES[number])) {
    throw new Error('File must be PDF, DOC, or DOCX');
  }
}

export function validateJobUrl(url: string): void {
  try {
    new URL(url);
  } catch {
    throw new Error('Please enter a valid job URL');
  }
}