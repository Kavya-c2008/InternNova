import { Application, ApplicationStatus, UserProfile, StoredResume } from '../types';

const STORAGE_KEYS = {
  USER: 'internova_user_profile',
  SAVED_IDS: 'internova_saved_internships',
  APPLICATIONS: 'internova_applications_list',
  RESUME: 'internova_current_resume',
};

// Safe JSON parse helper
function safeGet<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage:`, e);
    return fallback;
  }
}

function safeSet<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    // Dispatch custom event so tabs or non-React listeners stay in sync if needed
    window.dispatchEvent(new Event('internova_storage_update'));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage:`, e);
  }
}

// User Profile
export function getStoredUser(): UserProfile | null {
  return safeGet<UserProfile | null>(STORAGE_KEYS.USER, null);
}

export function setStoredUser(user: UserProfile | null): void {
  if (!user) {
    localStorage.removeItem(STORAGE_KEYS.USER);
    window.dispatchEvent(new Event('internova_storage_update'));
  } else {
    safeSet(STORAGE_KEYS.USER, user);
  }
}

// Saved Internships
export function getStoredSavedIds(): string[] {
  return safeGet<string[]>(STORAGE_KEYS.SAVED_IDS, ['int-001', 'int-002']);
}

export function setStoredSavedIds(ids: string[]): void {
  safeSet(STORAGE_KEYS.SAVED_IDS, ids);
}

export function toggleStoredSavedId(id: string): { isSaved: boolean; allIds: string[] } {
  const current = getStoredSavedIds();
  let updated: string[];
  let isSaved = false;

  if (current.includes(id)) {
    updated = current.filter((item) => item !== id);
    isSaved = false;
  } else {
    updated = [...current, id];
    isSaved = true;
  }

  setStoredSavedIds(updated);
  return { isSaved, allIds: updated };
}

export function removeStoredSavedId(id: string): string[] {
  const current = getStoredSavedIds();
  const updated = current.filter((item) => item !== id);
  setStoredSavedIds(updated);
  return updated;
}

// Applications
// Pre-seed with one realistic application if empty so first-time visitors immediately see the dashboard & applications working!
const DEFAULT_APPLICATIONS: Application[] = [
  {
    internshipId: 'int-001',
    appliedDate: '23 September 2026',
    appliedTimestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
    status: 'Under Review',
    applicantName: 'Kavya C',
    applicantEmail: 'kavya.c@campus.edu',
    resumeFileName: 'Kavya_C_CS_Resume.pdf',
    coverNote: 'Excited about modern frontend systems and user experience craft at Lumina Interactive.',
  },
];

export function getStoredApplications(): Application[] {
  const existing = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
  if (!existing) {
    safeSet(STORAGE_KEYS.APPLICATIONS, DEFAULT_APPLICATIONS);
    return DEFAULT_APPLICATIONS;
  }
  return safeGet<Application[]>(STORAGE_KEYS.APPLICATIONS, DEFAULT_APPLICATIONS);
}

export function setStoredApplications(apps: Application[]): void {
  safeSet(STORAGE_KEYS.APPLICATIONS, apps);
}

export function addStoredApplication(application: Application): Application[] {
  const current = getStoredApplications();
  // Prevent duplicates
  const filtered = current.filter((app) => app.internshipId !== application.internshipId);
  const updated = [application, ...filtered];
  setStoredApplications(updated);
  return updated;
}

export function updateStoredApplicationStatus(
  internshipId: string,
  newStatus: ApplicationStatus
): Application[] {
  const current = getStoredApplications();
  const updated = current.map((app) =>
    app.internshipId === internshipId ? { ...app, status: newStatus } : app
  );
  setStoredApplications(updated);
  return updated;
}

export function getStoredApplication(internshipId: string): Application | undefined {
  const apps = getStoredApplications();
  return apps.find((app) => app.internshipId === internshipId);
}

// Informational file size formatting helper (purely for display, not restriction)
export function formatInformationalFileSize(bytes?: number): string {
  if (!bytes || isNaN(bytes) || bytes <= 0) return '1.2 MB';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

export const DEFAULT_RESUME: StoredResume = {
  fileName: 'Kavya_C_Resume.pdf',
  fileType: 'PDF Document',
  fileSize: '1.2 MB',
  rawBytes: 1258291,
  uploadedAt: 'Sep 23, 2026',
  analysisScore: 92,
};

export function getStoredResume(): StoredResume {
  const existing = localStorage.getItem(STORAGE_KEYS.RESUME);
  if (!existing) {
    safeSet(STORAGE_KEYS.RESUME, DEFAULT_RESUME);
    return DEFAULT_RESUME;
  }
  return safeGet<StoredResume>(STORAGE_KEYS.RESUME, DEFAULT_RESUME);
}

export function setStoredResume(resume: StoredResume | null): void {
  if (!resume) {
    localStorage.removeItem(STORAGE_KEYS.RESUME);
    window.dispatchEvent(new Event('internova_storage_update'));
  } else {
    safeSet(STORAGE_KEYS.RESUME, resume);
  }
}
