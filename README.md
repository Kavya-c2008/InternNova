# Internova Internship Board

> **"Find internships. Build experience. Start your career."**  
> **Developer: Kavya C**

Internova is a modern, responsive internship discovery and application tracking web application built with React, Vite, TypeScript, and Tailwind CSS. Designed for students, college placement preparation, and technical portfolio presentations, it allows candidates to discover verified technical opportunities, analyze and manage resumes without artificial restrictions, submit applications seamlessly, and track their recruitment pipeline with persistent client-side state.

---

## Overview

Finding internships is often challenging due to cluttered job boards, unclear stipends, and lack of transparent application tracking. **Internova** provides a clean, fast, and student-focused solution:

- **Verified Internship Listings:** Search and filter across 10 technical domains with clear stipends, locations, and requirements.
- **Seamless Application Flow:** Interactive `Apply Now` → `Applying...` → `✓ Applied` lifecycle with automatic duplicate submission prevention.
- **Resume Upload & Analyzer:** Upload and replace resumes in PDF, DOC, DOCX, or TXT formats with zero artificial file-size limits, instant ATS scoring, extracted competencies, and domain alignment.
- **Persistent State:** Uses browser `localStorage` and custom broadcast events so that user authentication, profile settings, bookmarks, and applications persist across page refreshes and browser tabs.
- **Production & Portfolio Ready:** Configured for one-click deployment on Vercel without requiring a dedicated backend server.

---

## Features

- **Advanced Search & Multi-Filter Explorer:**
  - Real-time instant search across internship titles, company names, skills, and locations.
  - Multi-parameter filters by **Domain** (Web Development, AI/Machine Learning, Cloud, Cybersecurity, etc.), **Work Mode** (Remote, Hybrid, On-site), **Duration**, and **Minimum Stipend**.
  - Dynamic sorting by **Latest Posted**, **Highest Stipend**, or **Longest Duration**.

- **Interactive Application Lifecycle:**
  - Smooth asynchronous transitions with loading states and floating toast notifications.
  - Prevents accidental duplicate submissions.
  - Interactive placement stage simulator in *My Applications* (`Under Review` → `Shortlisted` → `Interview` → `Rejected`) for recruitment demonstrations.

- **Clean Resume Management & Analyzer:**
  - Simple upload zone supporting **PDF, DOC, DOCX, and TXT** documents.
  - No artificial file-size restrictions or limits displayed in the UI.
  - Clean workflow: `Upload Resume` → `Replace Resume` → `Upload another Resume`.
  - Non-restrictive informational display showing filename, format, and calculated size.
  - AI ATS diagnostic scoring, extracted technical competencies, strengths, recommendations, and direct role recommendations.

- **Student Dashboard:**
  - Real-time pipeline statistics: *Total Applied*, *Under Review*, *Shortlisted*, and *Saved*.
  - Quick-action bookmarks and personalized role suggestions based on candidate skills.
  - Active resume summary with quick links to replace or analyze.

- **Fully Responsive & Accessible:**
  - Tailored layout for mobile, tablet, laptop, and widescreen monitors.
  - Responsive hamburger drawer navigation on mobile viewports.
  - Accessible contrast ratios, clean button hover states, and zero horizontal scrolling.

---

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/) (with client-side SPA routing and Vercel rewrite configuration)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Storage:** Browser `localStorage` with cross-tab event synchronization

---

## Project Structure

```text
internova/
├── dist/                   # Production build output
├── public/                 # Static assets & favicon
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Footer.tsx      # Platform footer with developer attribution
│   │   ├── InternshipCard.tsx # Opportunity card with apply & bookmark triggers
│   │   ├── InternshipModal.tsx# Fast modal view for role details
│   │   ├── Navbar.tsx      # Sticky navbar with mobile drawer & profile menu
│   │   ├── ResumeUpload.tsx# Unrestricted resume upload & replace component
│   │   ├── StatusBadge.tsx # Visual badges for application stages
│   │   └── Toast.tsx       # Animated toast alert notifications
│   ├── context/
│   │   └── AppContext.tsx  # Centralized React Context for auth, apps, & resumes
│   ├── data/
│   │   └── internships.ts  # Verified internship data across 10 domains
│   ├── pages/
│   │   ├── AboutPage.tsx   # Mission, pillars, and architecture overview
│   │   ├── ApplicationsPage.tsx # Application pipeline tracker & stage tester
│   │   ├── DashboardPage.tsx    # Student placement overview & metrics
│   │   ├── HomePage.tsx         # Landing page with hero & domain explorer
│   │   ├── InternshipDetailPage.tsx # Comprehensive single-internship view
│   │   ├── InternshipsPage.tsx  # Search, filter, and sorting directory
│   │   ├── ProfilePage.tsx      # Student profile & resume management
│   │   ├── ResumeAnalyzerPage.tsx # Resume ATS scoring & skill extraction
│   │   ├── SavedPage.tsx        # Bookmarked internships
│   │   ├── SignInPage.tsx       # Candidate sign-in & demo auto-fill
│   │   └── SignUpPage.tsx       # Candidate registration
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces & types
│   ├── utils/
│   │   └── storage.ts      # LocalStorage persistence & formatters
│   ├── App.tsx             # Root component with all route definitions
│   ├── index.css           # Global Tailwind CSS styles
│   └── main.tsx            # React application entrypoint
├── .gitignore              # Git ignore rules
├── index.html              # HTML entrypoint
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel SPA routing rewrite configuration
└── vite.config.ts          # Vite build configuration
```

---

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/internova-internship-board.git
cd internova-internship-board
npm install
```

---

## Running Locally

Run the local Vite development server:

```bash
npm run dev
```

The application will be accessible at:
```
http://localhost:3000
```

---

## Build

To create an optimized production build:

```bash
npm run build
```

The production assets will be output to the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

### Deploying to Vercel

This application is ready to deploy directly to [Vercel](https://vercel.com/) as a static Single Page Application (SPA).

#### Method 1: Deploy via Vercel Dashboard (Recommended)

1. Push your project to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New..." → "Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect the settings:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**.

#### Method 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and select default options. When prompted for production deployment, run:

```bash
vercel --prod
```

#### SPA Routing on Vercel

The included `vercel.json` file ensures that all routes (such as `/internships`, `/applications`, `/saved`, `/dashboard`, `/profile`, and `/resume-analyzer`) route back to `index.html`, preventing 404 errors when refreshing any page.

---

## Developer

**Developed by Kavya C**  
Designed and engineered for college project submission, placement portfolio presentation, and viva demonstration.
