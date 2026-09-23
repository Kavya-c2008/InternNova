export type WorkMode = 'Remote' | 'Hybrid' | 'On-site';

export type Domain =
  | 'Software Development'
  | 'AI / Machine Learning'
  | 'Data Science'
  | 'Cyber Security'
  | 'Web Development'
  | 'Cloud Computing'
  | 'UI/UX'
  | 'Java Development'
  | 'Python Development'
  | 'Full Stack Development';

export type ApplicationStatus =
  | 'Applied'
  | 'Under Review'
  | 'Shortlisted'
  | 'Interview'
  | 'Rejected';

export interface Internship {
  id: string;
  title: string;
  company: string;
  companyLogoText: string;
  logoBg: string;
  logoColor: string;
  location: string;
  workMode: WorkMode;
  domain: Domain;
  duration: string;
  durationMonths: number;
  stipend: string;
  stipendValue: number; // monthly in USD for sorting
  skills: string[];
  postedDate: string;
  postedTimestamp: number;
  shortDescription: string;
  about: string;
  responsibilities: string[];
  requiredSkills: string[];
  eligibility: string[];
  benefits: string[];
  deadline: string;
  featured?: boolean;
  applicantsCount: number;
}

export interface Application {
  internshipId: string;
  appliedDate: string;
  appliedTimestamp: number;
  status: ApplicationStatus;
  applicantName: string;
  applicantEmail: string;
  resumeFileName?: string;
  coverNote?: string;
}

export interface StoredResume {
  fileName: string;
  fileType: string;
  fileSize: string;
  rawBytes?: number;
  uploadedAt: string;
  analysisScore?: number;
}

export interface UserProfile {
  name: string;
  email: string;
  college?: string;
  degree?: string;
  graduationYear?: string;
  skills?: string[];
  bio?: string;
  phone?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumeFileName?: string;
  resumeFileType?: string;
  resumeFileSize?: string;
}
