import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SAMPLE_INTERNSHIPS } from '../data/internships';
import { InternshipCard } from '../components/InternshipCard';
import { InternshipModal } from '../components/InternshipModal';
import { Internship } from '../types';
import {
  Search,
  MapPin,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Zap,
  Clock,
  Compass,
  Building,
  GraduationCap,
  Layers,
  ChevronRight,
  Bookmark,
  FileCheck,
  Award,
  DollarSign,
  Code,
  Laptop,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [heroSearch, setHeroSearch] = useState('');
  const [heroLocation, setHeroLocation] = useState('');
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (heroSearch.trim()) params.set('search', heroSearch.trim());
    if (heroLocation.trim()) params.set('location', heroLocation.trim());
    navigate(`/internships?${params.toString()}`);
  };

  const featuredInternships = SAMPLE_INTERNSHIPS.filter((i) => i.featured).slice(0, 4);

  const domains = [
    { name: 'Software Development', count: 18, color: 'hover:border-indigo-400' },
    { name: 'AI / Machine Learning', count: 12, color: 'hover:border-emerald-400' },
    { name: 'Data Science', count: 14, color: 'hover:border-sky-400' },
    { name: 'Cyber Security', count: 9, color: 'hover:border-rose-400' },
    { name: 'Web Development', count: 22, color: 'hover:border-violet-400' },
    { name: 'Cloud Computing', count: 11, color: 'hover:border-cyan-400' },
    { name: 'UI/UX', count: 8, color: 'hover:border-purple-400' },
    { name: 'Full Stack Development', count: 16, color: 'hover:border-amber-400' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-indigo-50/70 via-slate-50 to-white border-b border-slate-200/70">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-200/30 via-teal-200/20 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200/70 text-xs font-semibold text-indigo-700 shadow-2xs">
                <span>🚀 Your Career Starts Here</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Find Internships.{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-teal-600 to-indigo-700 bg-clip-text text-transparent">
                  Build Your Future.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                Discover meaningful internship opportunities, apply with confidence, and track your career journey — all in one place.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/internships"
                  className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Internships →</span>
                </Link>

                <a
                  href="#how-it-works"
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold rounded-xl shadow-2xs transition-all hover:border-slate-300"
                >
                  How It Works
                </a>
              </div>

              {/* Search Bar in Hero */}
              <form
                onSubmit={handleHeroSearch}
                className="mt-6 p-2 sm:p-2.5 bg-white rounded-2xl shadow-md border border-slate-200/90 max-w-xl flex flex-col sm:flex-row items-center gap-2"
              >
                <div className="flex items-center gap-2.5 px-3 py-2 w-full flex-1">
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search internships, companies, skills..."
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                </div>

                <div className="hidden sm:block w-px h-8 bg-slate-200" />

                <div className="flex items-center gap-2 px-3 py-2 w-full sm:w-40">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="City / Remote"
                    value={heroLocation}
                    onChange={(e) => setHeroLocation(e.target.value)}
                    className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Quick Trust Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>14 Verified Roles</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Transparent Stipends</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Instant Status Tracking</span>
                </span>
              </div>
            </div>

            {/* Right Career-Themed Visual Showcase Area */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
                {/* Visual Card 1: Internship Opportunity Preview */}
                <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                        LT
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Lumina Interactive
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">
                          Frontend Engineering Intern
                        </h4>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                      Verified
                    </span>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>Remote</span>
                    </span>
                    <span className="font-bold text-emerald-700">$2,800/mo</span>
                    <span className="text-slate-400">4 Months</span>
                  </div>
                </div>

                {/* Visual Card 2: Applications & Pipeline Status Preview */}
                <div className="p-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Application Status</p>
                      <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                        <span>Shortlisted for Interview</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                    Applied
                  </span>
                </div>

                {/* Visual Card 3: Career Growth & Readiness */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl shadow-sm space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-300 uppercase font-semibold">
                        Career Growth
                      </span>
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-2xl font-extrabold text-white mt-1">94%</p>
                    <p className="text-[11px] text-indigo-200">Placement Preparation</p>
                  </div>

                  {/* Visual Card 4: Top Skills Tech Stack */}
                  <div className="p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 uppercase font-semibold">
                        Core Skills
                      </span>
                      <Code className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['React', 'TypeScript', 'Python', 'AWS'].map((sk) => (
                        <span
                          key={sk}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Internships Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Handpicked Roles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Featured Internships
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              High-impact roles with competitive stipends and comprehensive mentorship.
            </p>
          </div>

          <Link
            to="/internships"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors self-start sm:self-auto"
          >
            <span>View All 14 Internships</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredInternships.map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
              onViewDetails={(item) => setSelectedInternship(item)}
            />
          ))}
        </div>
      </section>

      {/* 3. Why Internova Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Why Internova?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Built for Students. Designed for Real Careers.
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            No dead-end postings, no ambiguous pay, and zero clutter. Everything a student needs to land their next technical role.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Verified Opportunities</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Every internship comes with transparent compensation, work mode requirements, and explicit duration specifications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">One-Click Apply</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Apply in seconds with automatic duplicate prevention and instant persistent status updates stored on your device.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Real-Time Tracking</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Monitor your submission stages: Applied, Under Review, Shortlisted, and Interview all in one unified candidate view.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Bookmark className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Saved Bookmarks</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Bookmark target opportunities while preparing your resume, stored locally across browser sessions.
            </p>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section (with id for anchor navigation) */}
      <section id="how-it-works" className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Three Simple Steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How Internova Works
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From discovering cutting-edge engineering opportunities to managing your active applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-white">Discover & Filter</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Filter by technical domain, remote/hybrid work mode, minimum stipend, or specific skills like React, Python, or AWS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Review & Apply</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Check exact responsibilities, eligibility criteria, and perks. Hit "Apply Now" to submit your candidacy instantly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-white">Track in Dashboard</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Check your unified "My Applications" dashboard anytime to view submission dates, interview stages, and notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Career Opportunities by Domain */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Browse Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Career Opportunities
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Find internships tailored to your specific specialization and interests.
            </p>
          </div>

          <Link
            to="/internships"
            className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>View all domains</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {domains.map((dom) => (
            <Link
              key={dom.name}
              to={`/internships?domain=${encodeURIComponent(dom.name)}`}
              className={`p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 group flex flex-col justify-between h-32 ${dom.color}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors">
                  {dom.count} Open Roles
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-800 group-hover:text-slate-900 transition-colors">
                  {dom.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick View Modal */}
      <InternshipModal
        internship={selectedInternship}
        onClose={() => setSelectedInternship(null)}
      />
    </div>
  );
};
