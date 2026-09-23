import React from 'react';
import { Link } from 'react-router-dom';
import { Internship } from '../types';
import { useApp } from '../context/AppContext';
import {
  Bookmark,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Briefcase,
} from 'lucide-react';

interface InternshipCardProps {
  internship: Internship;
  onViewDetails?: (internship: Internship) => void;
  featuredHighlight?: boolean;
}

export const InternshipCard: React.FC<InternshipCardProps> = ({
  internship,
  onViewDetails,
  featuredHighlight = false,
}) => {
  const {
    isSaved,
    toggleSave,
    isApplied,
    getApplication,
    applyToInternship,
    applyingIds,
  } = useApp();

  const saved = isSaved(internship.id);
  const applied = isApplied(internship.id);
  const isApplying = applyingIds.includes(internship.id);
  const application = getApplication(internship.id);

  const handleApply = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (applied || isApplying) return;
    await applyToInternship(internship.id);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSave(internship.id);
  };

  return (
    <div
      className={`group relative bg-white rounded-xl border p-5 sm:p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
        applied
          ? 'border-emerald-200/90 bg-emerald-50/15'
          : featuredHighlight
          ? 'border-indigo-200 ring-1 ring-indigo-500/10'
          : 'border-slate-200/90 hover:border-slate-300'
      }`}
    >
      {/* Top row: Company Logo & Details + Bookmark */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3.5">
            <div
              className={`w-11 h-11 rounded-lg ${internship.logoBg} ${internship.logoColor} font-bold text-sm flex items-center justify-center shrink-0 shadow-xs`}
            >
              {internship.companyLogoText}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                {internship.company}
              </p>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors mt-0.5">
                <Link to={`/internships/${internship.id}`}>
                  {internship.title}
                </Link>
              </h3>
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={handleBookmark}
            className={`p-2 rounded-lg border transition-colors shrink-0 ${
              saved
                ? 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100'
                : 'bg-white text-slate-400 border-slate-200 hover:text-slate-600 hover:bg-slate-50'
            }`}
            title={saved ? 'Remove from saved' : 'Save internship'}
            aria-label={saved ? 'Remove bookmark' : 'Bookmark internship'}
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>
        </div>

        {/* Clean Typographic Metadata (Zero-pill discipline) */}
        <div className="mt-3.5 flex flex-wrap items-center gap-y-1.5 text-xs text-slate-600">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{internship.location}</span>
          </span>
          <span className="mx-2 text-slate-300" aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-medium text-slate-700">{internship.workMode}</span>
          </span>
          <span className="mx-2 text-slate-300" aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{internship.duration}</span>
          </span>
          <span className="mx-2 text-slate-300" aria-hidden="true">·</span>
          <span className="font-semibold text-emerald-700">
            {internship.stipend}
          </span>
        </div>

        {/* Short Description */}
        <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {internship.shortDescription}
        </p>

        {/* Skills List */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {internship.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60"
            >
              {skill}
            </span>
          ))}
          {internship.skills.length > 4 && (
            <span className="text-[11px] font-medium text-slate-400 px-1 py-0.5">
              +{internship.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Section: Application status info & Action buttons */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
        {/* If applied, display Application Status and Applied Date */}
        {applied && application && (
          <div className="bg-emerald-50 border border-emerald-200/90 rounded-lg p-2.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Application Status: {application.status}</span>
            </div>
            <span className="text-emerald-700/90 font-medium">
              Applied on: {application.appliedDate}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between gap-2">
          {/* Posted Date */}
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-400" />
            <span>Posted {internship.postedDate}</span>
          </span>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* View Details Button */}
            {onViewDetails ? (
              <button
                type="button"
                onClick={() => onViewDetails(internship)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                View Details
              </button>
            ) : (
              <Link
                to={`/internships/${internship.id}`}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                View Details
              </Link>
            )}

            {/* Apply Button with explicit flow requirements */}
            <button
              type="button"
              onClick={handleApply}
              disabled={applied || isApplying}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shadow-2xs ${
                applied
                  ? 'bg-emerald-600 text-white cursor-default'
                  : isApplying
                  ? 'bg-indigo-400 text-white cursor-wait'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-98'
              }`}
            >
              {isApplying ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Applying...</span>
                </>
              ) : applied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>✓ Applied</span>
                </>
              ) : (
                <span>Apply Now</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
