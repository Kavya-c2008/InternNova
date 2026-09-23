import React, { useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { StoredResume } from '../types';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  RefreshCw,
  Loader2,
  Trash2,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResumeUploadProps {
  onUploadSuccess?: (resume: StoredResume) => void;
  showAnalyzerLink?: boolean;
  compact?: boolean;
}

export const ResumeUpload: React.FC<ResumeUploadProps> = ({
  onUploadSuccess,
  showAnalyzerLink = false,
  compact = false,
}) => {
  const { currentResume, uploadResume, replaceResume, removeResume } = useApp();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const hasResume = Boolean(currentResume && currentResume.fileName);

  const handleFile = async (file: File) => {
    setIsProcessing(true);
    try {
      const result = await (hasResume ? replaceResume(file) : uploadResume(file));
      if (result.success && onUploadSuccess) {
        onUploadSuccess(result.resume);
      }
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const triggerBrowse = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full space-y-3">
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileInputChange}
        accept=".pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
        className="hidden"
        aria-label="Upload Resume"
      />

      {hasResume ? (
        /* Selected / Uploaded Resume Display */
        <div className="p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100/80">
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 truncate max-w-xs sm:max-w-md">
                    {currentResume.fileName}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Active</span>
                  </span>
                </div>

                {/* Informational file details: Filename, File type, File size */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500 pt-0.5">
                  <span className="font-medium text-slate-700">{currentResume.fileType}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600">{currentResume.fileSize}</span>
                  {currentResume.uploadedAt && (
                    <>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-400">Uploaded {currentResume.uploadedAt}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons: Replace Resume & Optional Analyze */}
            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
              <button
                type="button"
                onClick={triggerBrowse}
                disabled={isProcessing}
                className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Replace Resume</span>
                  </>
                )}
              </button>

              {showAnalyzerLink && (
                <Link
                  to="/resume-analyzer"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
                  <span>Analyze Resume</span>
                </Link>
              )}

              <button
                type="button"
                onClick={removeResume}
                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                title="Remove resume"
                aria-label="Remove resume"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Upload Zone: Upload your Resume / PDF, DOC, DOCX or TXT */
        <div
          onClick={triggerBrowse}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`cursor-pointer rounded-2xl border-2 border-dashed transition-all p-8 sm:p-10 text-center flex flex-col items-center justify-center gap-3 ${
            isDragging
              ? 'border-indigo-500 bg-indigo-50/60'
              : 'border-slate-200/90 hover:border-indigo-400 bg-white hover:bg-slate-50/50'
          }`}
        >
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-2xs">
            {isProcessing ? (
              <Loader2 className="w-7 h-7 animate-spin" />
            ) : (
              <UploadCloud className="w-7 h-7" />
            )}
          </div>

          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">Upload your Resume</h3>
            <p className="text-xs sm:text-sm font-medium text-slate-500">PDF, DOC, DOCX or TXT</p>
          </div>

          <button
            type="button"
            className="mt-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-2xs transition-all pointer-events-none"
          >
            {isProcessing ? 'Uploading...' : 'Browse Files'}
          </button>
        </div>
      )}
    </div>
  );
};
