import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Target,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  GraduationCap,
  Users,
  Briefcase,
  ArrowRight,
  Code2,
  Search,
  FileCheck,
  TrendingUp,
  Clock,
  Award,
  Layers,
  Heart,
  User,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
          <Compass className="w-3.5 h-3.5" />
          <span>About Internova Internship Board</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Connecting Students With Opportunities
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
          Internova is a student-focused internship discovery platform designed to help students discover opportunities, apply easily and track their applications.
        </p>
      </div>

      {/* Feature Cards: Discover, Apply, Track, Grow */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
            Core Features
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Four Pillars of the Internova Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Discover */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Discover</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore curated, verified technical internships across 10 in-demand domains with transparent stipends, locations, and skills.
            </p>
          </div>

          {/* Apply */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Apply</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Frictionless, realistic application experience with instant UI feedback and automatic duplicate prevention.
            </p>
          </div>

          {/* Track */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Track</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Centralized candidate dashboard tracking every stage: Applied, Under Review, Shortlisted, and Interview.
            </p>
          </div>

          {/* Grow */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Grow</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bridge the college-to-corporate divide by building real-world industry experience and placement-ready credentials.
            </p>
          </div>
        </div>
      </div>

      {/* Simple Career Journey Section */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Student Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Your Career Journey with Internova
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            A guided four-step path from first search to landing your dream internship offer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <span className="text-xs font-bold text-indigo-400">STAGE 01</span>
            <h4 className="font-bold text-white text-base">Explore & Filter</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Filter listings by preferred tech domain, remote/on-site mode, minimum stipend, and duration.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <span className="text-xs font-bold text-indigo-400">STAGE 02</span>
            <h4 className="font-bold text-white text-base">Bookmark & Prep</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Save target roles locally to prepare tailored cover notes and update your technical skills.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <span className="text-xs font-bold text-indigo-400">STAGE 03</span>
            <h4 className="font-bold text-white text-base">One-Click Apply</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Submit your candidate application directly, getting immediate confirmation and timestamped tracking.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <span className="text-xs font-bold text-indigo-400">STAGE 04</span>
            <h4 className="font-bold text-white text-base">Interview & Offer</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Track recruitment stage updates on your dashboard and prepare for technical interviews.
            </p>
          </div>
        </div>
      </div>

      {/* Developer & Portfolio Information */}
      <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
          <User className="w-4 h-4" />
          <span>Project & Developer Information</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Developed by Kavya C</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Internova is an independent web application engineered for college project demonstration, technical viva reviews, and student placement evaluation.
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 font-semibold text-xs border border-indigo-100 self-start sm:self-auto">
            Developer: Kavya C
          </span>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-500">
          <span>• Client-side persistent LocalStorage</span>
          <span>• React 19 + TypeScript + Tailwind CSS</span>
          <span>• © 2026 Internova Internship Board. All rights reserved.</span>
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="text-center space-y-4 pt-4">
        <h2 className="text-2xl font-bold text-slate-900">Ready to start your internship journey?</h2>
        <Link
          to="/internships"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl transition-all shadow-sm"
        >
          <span>Explore All Opportunities</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
