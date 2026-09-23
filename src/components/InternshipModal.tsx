import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Internship } from '../types';
import { useApp } from '../context/AppContext';
import {
  X,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Calendar,
  CheckCircle2,
  Bookmark,
  ExternalLink,
  Loader2,
  Check,
  Send,
  AlertCircle,
} from 'lucide-react';

interface InternshipModalProps {
  internship: Internship | null;
  onClose: () => void;
}

export const InternshipModal: React.FC<InternshipModalProps> = ({
  internship,
  onClose,
}) => {
  const {
    isSaved,
    toggleSave,
    isApplied,
    getApplication,
    applyToInternship,
    applyingIds,
  } = useApp();

  const [notes, setNotes] = useState('');
  const [showCoverInput, setShowCoverInput] = useState(false);

  if (!internship) return null;

  const saved = isSaved(internship.id);
  const applied = isApplied(internship.id);
  const isApplying = applyingIds.includes(internship.id);
  const application = getApplication(internship.id);

  const handleApply = async () => {
    if (applied || isApplying) return;
    await applyToInternship(internship.id, notes);
    setShowCoverInput(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`w-14 h-14 rounded-xl ${internship.logoBg} ${internship.logoColor} font-bold text-lg flex items-center justify-center shrink-0 shadow-xs`}
            >
              {internship.companyLogoText}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {internship.company}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-indigo-600 font-semibold">{internship.domain}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mt-0.5">
                {internship.title}
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-y-1 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{internship.location}</span>
                </span>
                <span className="mx-2 text-slate-300">·</span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-medium text-slate-700">{internship.workMode}</span>
                </span>
                <span className="mx-2 text-slate-300">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{internship.duration}</span>
                </span>
                <span className="mx-2 text-slate-300">·</span>
                <span className="font-semibold text-emerald-700">{internship.stipend}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSave(internship.id)}
              className={`p-2 rounded-lg border transition-colors ${
                saved
                  ? 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100'
                  : 'bg-white text-slate-400 border-slate-200 hover:text-slate-600 hover:bg-slate-50'
              }`}
              title={saved ? 'Remove from saved' : 'Save internship'}
              aria-label={saved ? 'Remove bookmark' : 'Bookmark internship'}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 divide-y divide-slate-100">
          {/* Applied status banner if applied */}
          {applied && application && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-bold text-sm">Application Status: {application.status}</p>
                  <p className="text-xs text-emerald-700">Applied on: {application.appliedDate}</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100/80 rounded-md border border-emerald-300/60 self-start sm:self-auto">
                Application Received
              </span>
            </div>
          )}

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-[11px] font-medium text-slate-500 uppercase">Stipend</p>
              <p className="text-sm font-bold text-emerald-700 mt-0.5">{internship.stipend}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-[11px] font-medium text-slate-500 uppercase">Work Mode</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">{internship.workMode}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-[11px] font-medium text-slate-500 uppercase">Duration</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">{internship.duration}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-[11px] font-medium text-slate-500 uppercase">Deadline</p>
              <p className="text-sm font-bold text-rose-600 mt-0.5">{internship.deadline}</p>
            </div>
          </div>

          {/* About the Internship */}
          <div className="pt-4 space-y-2">
            <h3 className="text-base font-bold text-slate-900">About the Internship</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{internship.about}</p>
          </div>

          {/* Responsibilities */}
          <div className="pt-4 space-y-2">
            <h3 className="text-base font-bold text-slate-900">Key Responsibilities</h3>
            <ul className="space-y-2">
              {internship.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-2.5 text-slate-600 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Skills */}
          <div className="pt-4 space-y-2">
            <h3 className="text-base font-bold text-slate-900">Required Skills</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {internship.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-md border border-indigo-100"
                >
                  {skill}
                </span>
              ))}
            </div>
            <ul className="space-y-1.5">
              {internship.requiredSkills.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className="pt-4 space-y-2">
            <h3 className="text-base font-bold text-slate-900">Eligibility Criteria</h3>
            <ul className="space-y-1.5">
              {internship.eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="pt-4 space-y-2">
            <h3 className="text-base font-bold text-slate-900">Perks & Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {internship.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700 flex items-start gap-2"
                >
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            to={`/internships/${internship.id}`}
            onClick={onClose}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1 order-2 sm:order-1"
          >
            <span>Open Dedicated Internship Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors"
            >
              Close
            </button>

            {/* Apply Button */}
            <button
              type="button"
              onClick={handleApply}
              disabled={applied || isApplying}
              className={`w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm ${
                applied
                  ? 'bg-emerald-600 text-white cursor-default'
                  : isApplying
                  ? 'bg-indigo-400 text-white cursor-wait'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-98'
              }`}
            >
              {isApplying ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Applying...</span>
                </>
              ) : applied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
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
