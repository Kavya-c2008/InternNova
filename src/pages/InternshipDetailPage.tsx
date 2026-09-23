import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SAMPLE_INTERNSHIPS } from '../data/internships';
import { useApp } from '../context/AppContext';
import { InternshipCard } from '../components/InternshipCard';
import {
  ArrowLeft,
  Bookmark,
  CheckCircle2,
  Clock,
  MapPin,
  Briefcase,
  DollarSign,
  Calendar,
  AlertCircle,
  Share2,
  Check,
  Send,
  Loader2,
  Building,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  FileText,
} from 'lucide-react';

export const InternshipDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    isSaved,
    toggleSave,
    isApplied,
    getApplication,
    applyToInternship,
    applyingIds,
    showToast,
    currentResume,
  } = useApp();

  const [notes, setNotes] = useState('');

  const internship = SAMPLE_INTERNSHIPS.find((item) => item.id === id);

  if (!internship) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Internship Not Found</h1>
        <p className="text-sm text-slate-500">
          The internship listing you requested could not be located or may have expired.
        </p>
        <Link
          to="/internships"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Internships</span>
        </Link>
      </div>
    );
  }

  const saved = isSaved(internship.id);
  const applied = isApplied(internship.id);
  const isApplying = applyingIds.includes(internship.id);
  const application = getApplication(internship.id);

  const handleApply = async () => {
    if (applied || isApplying) return;
    await applyToInternship(internship.id, notes);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard!', 'info');
    }
  };

  const relatedInternships = SAMPLE_INTERNSHIPS.filter(
    (item) => item.id !== internship.id && (item.domain === internship.domain || item.workMode === internship.workMode)
  ).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 pb-28">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/internships"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Internships</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors text-xs flex items-center gap-1.5 font-medium"
            title="Share internship"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            onClick={() => toggleSave(internship.id)}
            className={`p-2 rounded-xl border transition-colors text-xs flex items-center gap-1.5 font-medium ${
              saved
                ? 'bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100'
                : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
            title={saved ? 'Saved' : 'Save'}
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">{saved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Main Internship Top Section */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex items-start gap-5">
            {/* Company Logo */}
            <div
              className={`w-16 h-16 rounded-2xl ${internship.logoBg} ${internship.logoColor} font-bold text-2xl flex items-center justify-center shrink-0 shadow-sm`}
            >
              {internship.companyLogoText}
            </div>

            <div className="space-y-1.5">
              {/* Company Name & Domain */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <span className="text-slate-700 font-bold">{internship.company}</span>
                <span>·</span>
                <span className="text-indigo-600">{internship.domain}</span>
              </div>

              {/* Internship Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {internship.title}
              </h1>

              {/* 4 Information Badges as specified in Section 32 */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
                  📍 {internship.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                  💼 {internship.workMode}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
                  ⏱ {internship.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
                  💰 {internship.stipend}
                </span>
              </div>
            </div>
          </div>

          {/* Primary Top Action Container */}
          <div className="flex flex-col sm:items-end gap-2.5 w-full md:w-auto">
            <button
              onClick={handleApply}
              disabled={applied || isApplying}
              className={`w-full sm:w-auto px-8 py-3 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm ${
                applied
                  ? 'bg-emerald-600 text-white cursor-default'
                  : isApplying
                  ? 'bg-indigo-400 text-white cursor-wait'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-98 cursor-pointer'
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

            <span className="text-[11px] text-slate-400">
              Deadline: <span className="font-semibold text-slate-700">{internship.deadline}</span>
            </span>
          </div>
        </div>

        {/* Live Application Status Banner Card */}
        {applied && application && (
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200/90 text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-sm text-emerald-950">
                  Application Status: ✓ {application.status}
                </p>
                <p className="text-xs text-emerald-700 font-medium">
                  Applied on: {application.appliedDate}
                </p>
              </div>
            </div>
            <Link
              to="/applications"
              className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950 self-start sm:self-auto"
            >
              View in My Applications →
            </Link>
          </div>
        )}
      </div>

      {/* Two Column Layout: Main Details & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Full Details */}
        <div className="lg:col-span-2 space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs">
          {/* Section 1: About the Internship */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">About the Internship</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{internship.about}</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2: Responsibilities */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">Responsibilities</h2>
            <ul className="space-y-2.5">
              {internship.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3: Required Skills */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">Required Skills</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {internship.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-lg border border-indigo-100"
                >
                  {skill}
                </span>
              ))}
            </div>
            <ul className="space-y-2">
              {internship.requiredSkills.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4: Eligibility */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">Eligibility</h2>
            <ul className="space-y-2">
              {internship.eligibility.map((el, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5: Benefits */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {internship.benefits.map((b, i) => (
                <div
                  key={i}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
                >
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar: Company & Application Notes */}
        <div className="space-y-6">
          {/* Company Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-xl ${internship.logoBg} ${internship.logoColor} font-bold text-base flex items-center justify-center shrink-0`}
              >
                {internship.companyLogoText}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">{internship.company}</h3>
                <p className="text-xs text-slate-500">Verified Employer Partner</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Demonstration technology organization represented on Internova for student portfolio and placement evaluation.
            </p>

            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span className="text-slate-400">Headquarters</span>
                <span className="font-medium text-slate-800">{internship.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Domain</span>
                <span className="font-medium text-slate-800">{internship.domain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Application Closes</span>
                <span className="font-medium text-slate-800">{internship.deadline}</span>
              </div>
            </div>
          </div>

          {/* Student Application Tip */}
          <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Student Placement Tip</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Candidates with updated GitHub profiles and project demos receive faster review feedback. Make sure your profile details are up to date!
            </p>
            <Link
              to="/profile"
              className="inline-block pt-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Update Candidate Profile →
            </Link>
          </div>

          {/* Active Resume Attachment Summary */}
          {currentResume?.fileName && (
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Attached Resume
                </span>
                <Link
                  to="/profile"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Replace
                </Link>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold truncate">
                <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="truncate">{currentResume.fileName}</span>
              </div>
              {/* Informational file details: Filename, File type, File size */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span>{currentResume.fileType}</span>
                <span className="text-slate-300">·</span>
                <span className="font-medium text-slate-600">{currentResume.fileSize}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Prominent Sticky Apply Bottom Section (Section 32) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-3.5 px-4 sm:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-slate-500 uppercase">{internship.company}</p>
            <p className="text-sm font-bold text-slate-900 truncate max-w-md">{internship.title}</p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block sm:inline mr-2">Stipend:</span>
              <span className="text-sm sm:text-base font-bold text-emerald-700">{internship.stipend}</span>
            </div>

            <button
              onClick={handleApply}
              disabled={applied || isApplying}
              className={`px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm ${
                applied
                  ? 'bg-emerald-600 text-white cursor-default'
                  : isApplying
                  ? 'bg-indigo-400 text-white cursor-wait'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-98 cursor-pointer'
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

      {/* Similar Internships Section */}
      {relatedInternships.length > 0 && (
        <section className="space-y-4 pt-6">
          <h2 className="text-xl font-bold text-slate-900">Similar Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedInternships.map((rel) => (
              <InternshipCard key={rel.id} internship={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
