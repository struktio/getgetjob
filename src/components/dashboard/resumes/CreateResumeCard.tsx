import React, { useState } from 'react';
import { Plus, Upload, ArrowRight, Loader2 } from 'lucide-react';
import { useResumeUpload } from '../../../hooks/useResumeUpload';

export function CreateResumeCard() {
  const [jobUrl, setJobUrl] = useState('');
  const { uploadResume, isUploading, error } = useResumeUpload();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile || !jobUrl) {
      return;
    }

    try {
      await uploadResume(selectedFile, jobUrl);
      // Reset form
      setJobUrl('');
      setSelectedFile(null);
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (err) {
      // Error is handled by the hook and displayed in the UI
      console.error('Upload failed:', err);
    }
  };

  const isSubmitDisabled = !selectedFile || !jobUrl || isUploading;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="h-12 w-12 bg-brand-gradient rounded-lg flex items-center justify-center">
          <Plus className="h-6 w-6 text-white" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Create New Optimized Resume
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Upload your resume and paste the job link to get started
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div 
          className={`relative rounded-lg border-2 border-dashed ${
            error ? 'border-red-300' : 'border-gray-300'
          } p-6 hover:border-gray-400 transition-colors`}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf,.doc,.docx"
            onChange={handleFileSelect}
            disabled={isUploading}
          />
          <div className="text-center">
            {isUploading ? (
              <Loader2 className="mx-auto h-8 w-8 text-primary animate-spin" />
            ) : (
              <Upload className="mx-auto h-8 w-8 text-gray-400" />
            )}
            <p className="mt-1 text-sm text-gray-500">
              {selectedFile ? selectedFile.name : 'Upload your resume'}
            </p>
            <p className="mt-1 text-xs text-gray-400">PDF, DOC, DOCX up to 10MB</p>
          </div>
        </div>

        <div className="space-y-4">
          <div 
            className={`relative rounded-lg border-2 ${
              error ? 'border-red-300' : 'border-gray-300'
            } p-6`}
          >
            <input
              type="text"
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
              placeholder="Paste LinkedIn job URL"
              className="w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              disabled={isUploading}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            className={`w-full flex items-center justify-center px-4 py-2 rounded-lg text-white ${
              isSubmitDisabled
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-brand-gradient hover:bg-brand-gradient-hover'
            } transition-colors`}
          >
            {isUploading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
                Optimizing...
              </>
            ) : (
              <>
                Optimize Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 rounded-lg bg-red-50 text-red-700 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}