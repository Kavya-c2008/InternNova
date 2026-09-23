import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, User, Mail, HelpCircle, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Internova Internship Board
              </span>
            </Link>
            <p className="text-sm font-medium text-indigo-300">
              Find internships. Build experience. Start your career.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A modern, responsive platform empowering students to discover verified technical opportunities, apply seamlessly, and track their complete career journey in real time.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200">
                <User className="w-3.5 h-3.5 text-indigo-400" />
                <span>Developed by Kavya C</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/internships" className="hover:text-white transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/applications" className="hover:text-white transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                  <span>Help & FAQs</span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@internova-board.demo"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>Contact Support</span>
                </a>
              </li>
              <li>
                <Link to="/saved" className="hover:text-white transition-colors">
                  Saved Internships
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-white transition-colors">
                  Candidate Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer & Portfolio Notice */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Developer</h4>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2 text-xs">
              <p className="font-bold text-white text-sm">Developed by Kavya C</p>
              <p className="text-slate-400 leading-normal">
                Engineered for college project, placement portfolio, and technical viva demonstration.
              </p>
              <div className="pt-1 flex items-center gap-1 text-[11px] text-indigo-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Independent Project</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Internova Internship Board. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-300">Developed by Kavya C</span>
            <span className="text-slate-600">·</span>
            <span>Placement & Portfolio Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
