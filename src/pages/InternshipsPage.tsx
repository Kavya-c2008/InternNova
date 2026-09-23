import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SAMPLE_INTERNSHIPS } from '../data/internships';
import { Internship, Domain, WorkMode } from '../types';
import { InternshipCard } from '../components/InternshipCard';
import { InternshipModal } from '../components/InternshipModal';
import {
  Search,
  Filter,
  X,
  SlidersHorizontal,
  RotateCcw,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ArrowUpDown,
  Sparkles,
} from 'lucide-react';

export const InternshipsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search input state (read from URL initially)
  const initialSearch = searchParams.get('search') || '';
  const initialDomain = searchParams.get('domain') || 'All';
  const initialLocation = searchParams.get('location') || 'All';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedDomain, setSelectedDomain] = useState<string>(initialDomain);
  const [selectedWorkMode, setSelectedWorkMode] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>(initialLocation);
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [selectedStipendMin, setSelectedStipendMin] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'latest' | 'stipend' | 'duration'>('latest');

  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state if URL search parameters change
  useEffect(() => {
    const s = searchParams.get('search');
    const d = searchParams.get('domain');
    const l = searchParams.get('location');
    if (s !== null) setSearchTerm(s);
    if (d !== null) setSelectedDomain(d);
    if (l !== null) setSelectedLocation(l);
  }, [searchParams]);

  const allDomains: Domain[] = [
    'Software Development',
    'AI / Machine Learning',
    'Data Science',
    'Cyber Security',
    'Web Development',
    'Cloud Computing',
    'UI/UX',
    'Java Development',
    'Python Development',
    'Full Stack Development',
  ];

  const workModes: WorkMode[] = ['Remote', 'Hybrid', 'On-site'];

  const durations = ['3 Months', '4 Months', '6 Months'];

  // Distinct locations from sample data
  const locations = useMemo(() => {
    const set = new Set<string>();
    SAMPLE_INTERNSHIPS.forEach((i) => {
      // split city if possible
      set.add(i.location);
    });
    return Array.from(set);
  }, []);

  // Filter and Sort Logic
  const filteredInternships = useMemo(() => {
    return SAMPLE_INTERNSHIPS.filter((item) => {
      // 1. Text Search: matches title, company, skills, or location
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesCompany = item.company.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        const matchesSkills = item.skills.some((s) => s.toLowerCase().includes(query));
        const matchesDomain = item.domain.toLowerCase().includes(query);

        if (!matchesTitle && !matchesCompany && !matchesLocation && !matchesSkills && !matchesDomain) {
          return false;
        }
      }

      // 2. Domain Filter
      if (selectedDomain !== 'All' && item.domain !== selectedDomain) {
        return false;
      }

      // 3. Work Mode Filter
      if (selectedWorkMode !== 'All' && item.workMode !== selectedWorkMode) {
        return false;
      }

      // 4. Location Filter
      if (selectedLocation !== 'All') {
        if (!item.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
          return false;
        }
      }

      // 5. Duration Filter
      if (selectedDuration !== 'All' && item.duration !== selectedDuration) {
        return false;
      }

      // 6. Stipend Filter
      if (selectedStipendMin > 0 && item.stipendValue < selectedStipendMin) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'latest') {
        return b.postedTimestamp - a.postedTimestamp;
      }
      if (sortBy === 'stipend') {
        return b.stipendValue - a.stipendValue;
      }
      if (sortBy === 'duration') {
        return b.durationMonths - a.durationMonths;
      }
      return 0;
    });
  }, [
    searchTerm,
    selectedDomain,
    selectedWorkMode,
    selectedLocation,
    selectedDuration,
    selectedStipendMin,
    sortBy,
  ]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDomain('All');
    setSelectedWorkMode('All');
    setSelectedLocation('All');
    setSelectedDuration('All');
    setSelectedStipendMin(0);
    setSortBy('latest');
    setSearchParams({});
  };

  const activeFiltersCount =
    (searchTerm ? 1 : 0) +
    (selectedDomain !== 'All' ? 1 : 0) +
    (selectedWorkMode !== 'All' ? 1 : 0) +
    (selectedLocation !== 'All' ? 1 : 0) +
    (selectedDuration !== 'All' ? 1 : 0) +
    (selectedStipendMin > 0 ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Explore Internships
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Browse verified technical roles, filter by domain, stipend, or work mode, and apply directly.
        </p>
      </div>

      {/* Top Search & Filter Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Main Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search internships, companies, skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 w-full md:w-auto">
              <ArrowUpDown className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-slate-500 text-xs shrink-0">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-medium text-slate-800 focus:outline-none cursor-pointer text-xs sm:text-sm"
              >
                <option value="latest">Latest Posted</option>
                <option value="stipend">Highest Stipend</option>
                <option value="duration">Longest Duration</option>
              </select>
            </div>

            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setMobileFilterOpen((prev) => !prev)}
              className="lg:hidden flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold shrink-0"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Quick Filter Segmented Buttons (Domain Shortcuts) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedDomain('All')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
              selectedDomain === 'All'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Domains
          </button>
          {allDomains.slice(0, 6).map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedDomain === domain
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout: Sidebar Filters + Internship Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Filter Sidebar */}
        <aside
          className={`lg:col-span-1 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-6 ${
            mobileFilterOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-indigo-600" />
              <h2 className="font-bold text-sm text-slate-900">Filters</h2>
              {activeFiltersCount > 0 && (
                <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-indigo-50 text-indigo-700">
                  {activeFiltersCount}
                </span>
              )}
            </div>

            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Domain Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Domain / Specialization
            </label>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="All">All Domains</option>
              {allDomains.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Work Mode Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Work Mode
            </label>
            <div className="space-y-1.5">
              {['All', ...workModes].map((mode) => (
                <label
                  key={mode}
                  className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer hover:text-slate-900"
                >
                  <input
                    type="radio"
                    name="workMode"
                    value={mode}
                    checked={selectedWorkMode === mode}
                    onChange={(e) => setSelectedWorkMode(e.target.value)}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>{mode === 'All' ? 'All Work Modes' : mode}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="All">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Duration Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Duration
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="All">Any Duration</option>
              {durations.map((dur) => (
                <option key={dur} value={dur}>
                  {dur}
                </option>
              ))}
            </select>
          </div>

          {/* Minimum Stipend Filter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold uppercase tracking-wider text-slate-500">
                Min. Stipend
              </label>
              <span className="font-semibold text-emerald-700">
                {selectedStipendMin === 0 ? 'Any' : `$${selectedStipendMin}+/mo`}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="3500"
              step="500"
              value={selectedStipendMin}
              onChange={(e) => setSelectedStipendMin(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Any</span>
              <span>$1.5k</span>
              <span>$3.5k+</span>
            </div>
          </div>

          {/* Reset button inside mobile filter panel */}
          <button
            onClick={() => {
              resetFilters();
              setMobileFilterOpen(false);
            }}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors"
          >
            Clear All Filters
          </button>
        </aside>

        {/* Internships Grid / Results Container */}
        <main className="lg:col-span-3 space-y-4">
          {/* Active status bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
            <p className="text-xs sm:text-sm text-slate-600">
              Showing <span className="font-bold text-slate-900">{filteredInternships.length}</span>{' '}
              internships found
            </p>

            {/* Active filter badges */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    "{searchTerm}"
                    <button onClick={() => setSearchTerm('')}>
                      <X className="w-3 h-3 text-slate-400 hover:text-slate-600" />
                    </button>
                  </span>
                )}
                {selectedDomain !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                    {selectedDomain}
                    <button onClick={() => setSelectedDomain('All')}>
                      <X className="w-3 h-3 text-indigo-400 hover:text-indigo-600" />
                    </button>
                  </span>
                )}
                {selectedWorkMode !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {selectedWorkMode}
                    <button onClick={() => setSelectedWorkMode('All')}>
                      <X className="w-3 h-3 text-slate-400 hover:text-slate-600" />
                    </button>
                  </span>
                )}
                {selectedStipendMin > 0 && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                    ${selectedStipendMin}+
                    <button onClick={() => setSelectedStipendMin(0)}>
                      <X className="w-3 h-3 text-emerald-400 hover:text-emerald-600" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Cards Grid */}
          {filteredInternships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {filteredInternships.map((internship) => (
                <InternshipCard
                  key={internship.id}
                  internship={internship}
                  onViewDetails={(item) => setSelectedInternship(item)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <div className="space-y-1 max-w-sm mx-auto">
                <h3 className="text-base font-bold text-slate-900">No internships found</h3>
                <p className="text-xs text-slate-500">
                  We couldn't find any opportunities matching your current filters. Try relaxing your search terms or resetting filters.
                </p>
              </div>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Quick View Modal */}
      <InternshipModal
        internship={selectedInternship}
        onClose={() => setSelectedInternship(null)}
      />
    </div>
  );
};
