import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SAMPLE_INTERNSHIPS } from '../data/internships';
import { InternshipCard } from '../components/InternshipCard';
import { InternshipModal } from '../components/InternshipModal';
import { Internship } from '../types';
import { Bookmark, ArrowRight, Trash2, Search } from 'lucide-react';

export const SavedPage: React.FC = () => {
  const { savedIds, removeSaved } = useApp();
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const savedInternships = SAMPLE_INTERNSHIPS.filter((i) => savedIds.includes(i.id));

  const filtered = savedInternships.filter((item) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.company.toLowerCase().includes(q) ||
      item.domain.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Saved Internships
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review your shortlisted roles and submit applications whenever you are ready.
          </p>
        </div>

        <Link
          to="/internships"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all self-start sm:self-auto shadow-2xs"
        >
          <span>Find More Roles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {savedInternships.length > 0 && (
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            You have <span className="font-bold text-slate-900">{savedInternships.length}</span>{' '}
            saved internship{savedInternships.length > 1 ? 's' : ''}
          </p>

          <div className="relative w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search saved..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}

      {/* Grid of Saved Internships */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((internship) => (
            <div key={internship.id} className="relative group">
              <InternshipCard
                internship={internship}
                onViewDetails={(item) => setSelectedInternship(item)}
              />
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto shadow-2xs">
            <Bookmark className="w-8 h-8 fill-amber-500 text-amber-500" />
          </div>
          <div className="space-y-1.5 max-w-sm mx-auto">
            <h3 className="text-lg font-bold text-slate-900">
              {savedInternships.length === 0 ? 'No saved internships yet.' : 'No Matching Saved Roles'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {savedInternships.length === 0
                ? 'Bookmark promising roles to review and submit applications at your own pace.'
                : 'No saved internships match your search query.'}
            </p>
          </div>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm"
          >
            <span>Discover Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Internship Modal */}
      <InternshipModal
        internship={selectedInternship}
        onClose={() => setSelectedInternship(null)}
      />
    </div>
  );
};
