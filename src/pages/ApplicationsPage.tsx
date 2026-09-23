import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SAMPLE_INTERNSHIPS } from '../data/internships';
import { StatusBadge } from '../components/StatusBadge';
import { ApplicationStatus } from '../types';
import { updateStoredApplicationStatus } from '../utils/storage';
import {
  FileCheck,
  Building,
  MapPin,
  Calendar,
  ExternalLink,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  Briefcase,
  Sliders,
} from 'lucide-react';

export const ApplicationsPage: React.FC = () => {
  const { applications, showToast } = useApp();
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine applications with internship details
  const appliedList = applications.map((app) => {
    const internship = SAMPLE_INTERNSHIPS.find((i) => i.id === app.internshipId);
    return {
      ...app,
      internship,
    };
  });

  const filtered = appliedList.filter((item) => {
    if (filterStatus !== 'All' && item.status !== filterStatus) {
      return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const title = item.internship?.title.toLowerCase() || '';
      const company = item.internship?.company.toLowerCase() || '';
      if (!title.includes(q) && !company.includes(q)) return false;
    }
    return true;
  });

  const handleStatusChange = (internshipId: string, newStatus: ApplicationStatus) => {
    updateStoredApplicationStatus(internshipId, newStatus);
    // trigger storage event to re-render context
    window.dispatchEvent(new Event('internova_storage_update'));
    showToast(`Application status updated to "${newStatus}"`, 'info');
  };

  const statuses: ('All' | ApplicationStatus)[] = [
    'All',
    'Applied',
    'Under Review',
    'Shortlisted',
    'Interview',
    'Rejected',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Applications
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Track and monitor the status of all your submitted internship applications.
          </p>
        </div>

        <Link
          to="/internships"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all self-start sm:self-auto shadow-2xs"
        >
          <span>Find More Internships</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-xs">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                filterStatus === st
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st} {st === 'All' ? `(${applications.length})` : ''}
            </button>
          ))}
        </div>

        {/* Search inside applications */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search applied roles or companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Applications List */}
      {filtered.length > 0 ? (
        <div className="space-y-4">
          {filtered.map((app) => {
            const { internship } = app;
            return (
              <div
                key={app.internshipId}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Left: Role and company info */}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${
                      internship?.logoBg || 'bg-slate-700'
                    } ${internship?.logoColor || 'text-white'} font-bold text-base flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    {internship?.companyLogoText || 'IN'}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {internship?.company || 'Company'}
                      </p>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs text-indigo-600 font-medium">
                        {internship?.domain || 'Tech'}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      <Link
                        to={`/internships/${app.internshipId}`}
                        className="hover:text-indigo-600 transition-colors"
                      >
                        {internship?.title || 'Internship Title'}
                      </Link>
                    </h2>

                    <div className="flex flex-wrap items-center gap-y-1 text-xs text-slate-600 pt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{internship?.location || 'Remote'}</span>
                      </span>
                      <span className="mx-2 text-slate-300">·</span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{internship?.workMode || 'Full-time'}</span>
                      </span>
                      <span className="mx-2 text-slate-300">·</span>
                      <span className="font-semibold text-emerald-700">
                        {internship?.stipend || 'Competitive'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Status badge, applied date, demo switcher, and View Internship button */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 justify-between lg:justify-end pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  {/* Status & Applied Date */}
                  <div className="space-y-1.5 sm:text-right">
                    <div>
                      <StatusBadge status={app.status} />
                    </div>
                    <p className="text-[11px] text-slate-400 flex items-center sm:justify-end gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>Applied on: {app.appliedDate}</span>
                    </p>
                  </div>

                  {/* Demo Recruiter Status Simulator (Great for placement presentation!) */}
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-bold text-slate-400">
                        Demo Stage:
                      </span>
                      <select
                        value={app.status}
                        onChange={(e) =>
                          handleStatusChange(app.internshipId, e.target.value as ApplicationStatus)
                        }
                        className="text-xs bg-slate-50 border border-slate-200 rounded-md px-2 py-1 text-slate-700 font-medium focus:outline-none"
                        title="Simulate recruiter pipeline advancement"
                      >
                        <option value="Applied">✓ Applied</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Interview">Interview</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>

                    {/* View Internship Button */}
                    <Link
                      to={`/internships/${app.internshipId}`}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 self-end sm:self-auto"
                    >
                      <span>View Internship</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto shadow-2xs">
            <FileCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1.5 max-w-sm mx-auto">
            <h3 className="text-lg font-bold text-slate-900">
              {applications.length === 0 ? 'No Applications Yet' : 'No Matching Applications'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {applications.length === 0
                ? 'Your next opportunity could be waiting for you.'
                : 'No applications match your selected status or search filter.'}
            </p>
          </div>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm"
          >
            <span>Explore Internships</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};
