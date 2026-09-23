import React from 'react';
import { ApplicationStatus } from '../types';
import { CheckCircle2, Clock, Award, Users, AlertCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: ApplicationStatus;
  showIcon?: boolean;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  showIcon = true,
  size = 'md',
}) => {
  const sizeClasses =
    size === 'sm' ? 'px-2 py-0.5 text-xs gap-1' : 'px-2.5 py-1 text-xs font-medium gap-1.5';

  switch (status) {
    case 'Applied':
      return (
        <span
          className={`inline-flex items-center rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 ${sizeClasses}`}
        >
          {showIcon && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />}
          <span>✓ Applied</span>
        </span>
      );
    case 'Under Review':
      return (
        <span
          className={`inline-flex items-center rounded-md bg-blue-50 text-blue-700 border border-blue-200/80 ${sizeClasses}`}
        >
          {showIcon && <Clock className="w-3.5 h-3.5 shrink-0 text-blue-600" />}
          <span>Under Review</span>
        </span>
      );
    case 'Shortlisted':
      return (
        <span
          className={`inline-flex items-center rounded-md bg-amber-50 text-amber-700 border border-amber-200/80 ${sizeClasses}`}
        >
          {showIcon && <Award className="w-3.5 h-3.5 shrink-0 text-amber-600" />}
          <span>Shortlisted</span>
        </span>
      );
    case 'Interview':
      return (
        <span
          className={`inline-flex items-center rounded-md bg-purple-50 text-purple-700 border border-purple-200/80 ${sizeClasses}`}
        >
          {showIcon && <Users className="w-3.5 h-3.5 shrink-0 text-purple-600" />}
          <span>Interview</span>
        </span>
      );
    case 'Rejected':
      return (
        <span
          className={`inline-flex items-center rounded-md bg-slate-100 text-slate-600 border border-slate-200 ${sizeClasses}`}
        >
          {showIcon && <AlertCircle className="w-3.5 h-3.5 shrink-0 text-slate-500" />}
          <span>Archived / Not Selected</span>
        </span>
      );
    default:
      return (
        <span
          className={`inline-flex items-center rounded-md bg-slate-100 text-slate-700 ${sizeClasses}`}
        >
          {status}
        </span>
      );
  }
};
