import React from "react";
import { ResumeCard } from "./ResumeCard";
import { Resume } from "../../../types/resume";
import { Loader } from "../../shared/Loader";

interface ResumeListProps {
  resumes: Resume[];
  isLoading: boolean;
}

export function ResumeList({ resumes, isLoading }: ResumeListProps) {
  if (isLoading) {
    return <Loader />;
  }

  if (resumes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          No resumes yet. Create your first optimized resume!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3">
      {resumes.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </div>
  );
}
