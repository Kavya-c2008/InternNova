import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SAMPLE_INTERNSHIPS } from '../data/internships';
import { InternshipCard } from '../components/InternshipCard';
import { InternshipModal } from '../components/InternshipModal';
import { StatusBadge } from '../components/StatusBadge';
import { Internship } from '../types';
import {
  Bookmark,
  FileCheck,
  Clock,
  Award,
  ArrowRight,
  Sparkles,
  Calendar,
  Building,
  User,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Briefcase,
  Layers,
  FileText,
  RefreshCw,
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, applications, savedIds, currentResume } = useApp();
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  const firstName = user?.name ? user.name.split(' ')[0] : 'Kavya';

  // Statistics calculation
  const totalApplied = applications.length;
  const underReviewCount = applications.filter((a) => a.status === 'Under Review').length;
  const shortlistedCount = applications.filter((a) => a.status === 'Shortlisted').length;
  const totalSaved = savedIds.length;

  // Recent applications (last 3)
  const recentApplications = applications.slice(0, 3).map((app) => {
    const internship = SAMPLE_INTERNSHIPS.find((i) => i.id === app.internshipId);
    return { ...app, internship };
  });

  // Recommended Internships (roles student hasn't applied for yet)
  const appliedIds = applications.map((a) => a.internshipId);
  const recommended = SAMPLE_INTERNSHIPS.filter((i) => !appliedIds.includes(i.id)).slice(0, 2);

  // Saved Opportunities
  const savedOpportunities = SAMPLE_INTERNSHIPS.filter((i) => savedIds.includes(i.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/20">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Student Career Dashboard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Welcome back, {firstName}! 👋
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Monitor your candidate pipeline, track recruiter reviews, and discover high-impact engineering internships.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/internships"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm"
          >
            Explore Internships
          </Link>
          <Link
            to="/profile"
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      {/* 4 Statistics Cards: Applied, Under Review, Shortlisted, Saved */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Applied */}
        <Link
          to="/applications"
          className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50/70 px-2 py-0.5 rounded-full">
              Pipeline
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">{totalApplied}</p>
          <p className="text-sm font-bold text-slate-800 mt-1">Applied</p>
          <p className="text-xs text-slate-400 mt-0.5">Submitted candidate applications</p>
        </Link>

        {/* Under Review */}
        <Link
          to="/applications"
          className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold text-blue-600 bg-blue-50/70 px-2 py-0.5 rounded-full">
              In Review
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">{underReviewCount}</p>
          <p className="text-sm font-bold text-slate-800 mt-1">Under Review</p>
          <p className="text-xs text-slate-400 mt-0.5">Currently with hiring teams</p>
        </Link>

        {/* Shortlisted */}
        <Link
          to="/applications"
          className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50/70 px-2 py-0.5 rounded-full">
              Interview
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">{shortlistedCount}</p>
          <p className="text-sm font-bold text-slate-800 mt-1">Shortlisted</p>
          <p className="text-xs text-slate-400 mt-0.5">Progressed to round stages</p>
        </Link>

        {/* Saved */}
        <Link
          to="/saved"
          className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <span className="text-[11px] font-semibold text-amber-700 bg-amber-50/70 px-2 py-0.5 rounded-full">
              Saved
            </span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">{totalSaved}</p>
          <p className="text-sm font-bold text-slate-800 mt-1">Saved</p>
          <p className="text-xs text-slate-400 mt-0.5">Target roles bookmarked</p>
        </Link>
      </div>

      {/* Main Sections: Recent Applications, Recommended Internships & Saved Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recent Applications & Recommended */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Applications Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Recent Applications</h2>
                <p className="text-xs text-slate-500">Track and monitor your submission status</p>
              </div>
              <Link
                to="/applications"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>View All ({totalApplied})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {recentApplications.length > 0 ? (
              <div className="space-y-3">
                {recentApplications.map((app) => (
                  <div
                    key={app.internshipId}
                    className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-xl ${
                          app.internship?.logoBg || 'bg-slate-700'
                        } ${app.internship?.logoColor || 'text-white'} font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs`}
                      >
                        {app.internship?.companyLogoText || 'IN'}
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                          {app.internship?.company}
                        </p>
                        <Link
                          to={`/internships/${app.internshipId}`}
                          className="font-bold text-slate-900 text-sm hover:text-indigo-600 transition-colors"
                        >
                          {app.internship?.title}
                        </Link>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Applied on: {app.appliedDate}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <StatusBadge status={app.status} size="sm" />
                      <Link
                        to={`/internships/${app.internshipId}`}
                        className="text-xs text-slate-600 hover:text-indigo-600 font-semibold px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                <p className="text-sm font-semibold text-slate-800">No applications yet</p>
                <p className="text-xs text-slate-400">
                  Your next opportunity could be waiting for you.
                </p>
                <Link
                  to="/internships"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl transition-all"
                >
                  <span>Explore Internships</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Recommended Internships Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Recommended Internships</h2>
                <p className="text-xs text-slate-500">Based on your candidate skills and major</p>
              </div>
              <Link
                to="/internships"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>Browse All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommended.map((item) => (
                <InternshipCard
                  key={item.id}
                  internship={item}
                  onViewDetails={(it) => setSelectedInternship(it)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Saved Opportunities & Profile Card */}
        <div className="space-y-6">
          {/* Saved Opportunities Section */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Saved Opportunities</h3>
                <p className="text-[11px] text-slate-400">Bookmarked for review</p>
              </div>
              <Link
                to="/saved"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
              >
                View All ({totalSaved})
              </Link>
            </div>

            {savedOpportunities.length > 0 ? (
              <div className="space-y-3">
                {savedOpportunities.slice(0, 3).map((saved) => (
                  <div
                    key={saved.id}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase">
                        {saved.company}
                      </span>
                      <span className="text-xs font-bold text-emerald-700">{saved.stipend}</span>
                    </div>
                    <Link
                      to={`/internships/${saved.id}`}
                      className="font-bold text-xs text-slate-900 hover:text-indigo-600 transition-colors line-clamp-1 block"
                    >
                      {saved.title}
                    </Link>
                    <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{saved.location}</span>
                      </span>
                      <span>{saved.workMode}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center rounded-xl bg-slate-50 border border-dashed border-slate-200 space-y-2">
                <p className="text-xs text-slate-500">No saved internships yet.</p>
                <Link
                  to="/internships"
                  className="inline-block text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Discover Opportunities →
                </Link>
              </div>
            )}
          </div>

          {/* Student Profile Quick Summary */}
          {user && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3.5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Candidate Profile</h3>
                  <p className="text-[11px] text-slate-400">Verified student details</p>
                </div>
                <Link
                  to="/profile"
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Edit
                </Link>
              </div>

              <div className="text-xs space-y-2.5 pt-1">
                <div>
                  <span className="text-slate-400 text-[11px]">Student Name</span>
                  <p className="font-semibold text-slate-800">{user.name}</p>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">College / Institution</span>
                  <p className="font-semibold text-slate-800">{user.college || 'Apex Institute'}</p>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Degree & Graduation</span>
                  <p className="font-semibold text-slate-800">
                    {user.degree} ({user.graduationYear})
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px]">Highlighted Skills</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {(user.skills || []).slice(0, 5).map((sk) => (
                      <span
                        key={sk}
                        className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Resume Status Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3.5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Active Resume</h3>
                <p className="text-[11px] text-slate-400">Attached to applications</p>
              </div>
              <Link
                to="/resume-analyzer"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Analyze</span>
              </Link>
            </div>

            {currentResume?.fileName ? (
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {currentResume.fileName}
                    </p>
                    {/* Informational file details: Filename, File type, File size */}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                      <span>{currentResume.fileType}</span>
                      <span className="text-slate-300">·</span>
                      <span className="font-medium text-slate-600">{currentResume.fileSize}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to="/profile"
                    className="flex-1 py-2 text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Replace Resume</span>
                  </Link>
                  <Link
                    to="/resume-analyzer"
                    className="flex-1 py-2 text-center text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="p-4 text-center rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <p className="text-xs text-slate-500">No resume uploaded</p>
                <Link
                  to="/profile"
                  className="inline-block text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Upload your Resume →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <InternshipModal
        internship={selectedInternship}
        onClose={() => setSelectedInternship(null)}
      />
    </div>
  );
};
