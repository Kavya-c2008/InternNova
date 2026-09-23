import React, { createContext, useContext, useState, useEffect } from 'react';
import { Application, ApplicationStatus, UserProfile, StoredResume } from '../types';
import {
  getStoredUser,
  setStoredUser,
  getStoredSavedIds,
  toggleStoredSavedId,
  removeStoredSavedId,
  getStoredApplications,
  addStoredApplication,
  getStoredApplication,
  getStoredResume,
  setStoredResume,
  formatInformationalFileSize,
} from '../utils/storage';

interface ToastData {
  id: string;
  title?: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface AppContextType {
  user: UserProfile | null;
  signIn: (email: string, pass: string) => { success: boolean; error?: string };
  signUp: (name: string, email: string, pass: string) => { success: boolean; error?: string };
  signInDemoGoogle: () => void;
  signOut: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSave: (id: string) => boolean;
  removeSaved: (id: string) => void;
  applications: Application[];
  isApplied: (id: string) => boolean;
  getApplication: (id: string) => Application | undefined;
  applyingIds: string[];
  applyToInternship: (id: string, notes?: string) => Promise<{ success: boolean; message: string }>;
  currentResume: StoredResume;
  uploadResume: (file: File) => Promise<{ success: boolean; message: string; resume: StoredResume }>;
  replaceResume: (file: File) => Promise<{ success: boolean; message: string; resume: StoredResume }>;
  removeResume: () => void;
  toasts: ToastData[];
  showToast: (message: string, type?: 'success' | 'error' | 'info', title?: string) => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEMO_USER: UserProfile = {
  name: 'Kavya C',
  email: 'kavya.c@campus.edu',
  college: 'Apex Institute of Technology',
  degree: 'B.Tech in Computer Science & Engineering',
  graduationYear: '2026',
  skills: ['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL'],
  bio: 'Passionate student software engineer seeking a high-impact internship. Experienced in full-stack web, distributed systems, and user experience engineering.',
  phone: '+1 (555) 234-8901',
  githubUrl: 'https://github.com/kavya-c',
  linkedinUrl: 'https://linkedin.com/in/kavya-c',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial state from LocalStorage
  const [user, setUser] = useState<UserProfile | null>(() => getStoredUser() || DEMO_USER);
  const [savedIds, setSavedIds] = useState<string[]>(() => getStoredSavedIds());
  const [applications, setApplications] = useState<Application[]>(() => getStoredApplications());
  const [applyingIds, setApplyingIds] = useState<string[]>([]);
  const [currentResume, setCurrentResume] = useState<StoredResume>(() => getStoredResume());
  const [toasts, setToasts] = useState<ToastData[]>([]);

  // Sync when storage event fires (e.g. across tabs)
  useEffect(() => {
    const handleStorageUpdate = () => {
      setSavedIds(getStoredSavedIds());
      setApplications(getStoredApplications());
      setUser(getStoredUser());
      setCurrentResume(getStoredResume());
    };
    window.addEventListener('internova_storage_update', handleStorageUpdate);
    return () => window.removeEventListener('internova_storage_update', handleStorageUpdate);
  }, []);

  const getFileTypeLabel = (file: File): string => {
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return 'PDF Document';
    if (ext === 'docx') return 'Word Document (DOCX)';
    if (ext === 'doc') return 'Word Document (DOC)';
    if (ext === 'txt') return 'Plain Text (TXT)';
    return file.type || 'Document';
  };

  const uploadResume = async (
    file: File
  ): Promise<{ success: boolean; message: string; resume: StoredResume }> => {
    // Only check supported formats (PDF, DOC, DOCX, TXT)
    const ext = file.name.split('.').pop()?.toLowerCase();
    const validExtensions = ['pdf', 'doc', 'docx', 'txt'];
    if (ext && !validExtensions.includes(ext)) {
      showToast('Please select a PDF, DOC, DOCX or TXT file.', 'error');
      return { success: false, message: 'Invalid file format', resume: currentResume };
    }

    // Informational file size formatting (strictly non-restrictive)
    const formattedSize = formatInformationalFileSize(file.size);
    const typeLabel = getFileTypeLabel(file);

    const newResume: StoredResume = {
      fileName: file.name,
      fileType: typeLabel,
      fileSize: formattedSize,
      rawBytes: file.size,
      uploadedAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      analysisScore: Math.floor(Math.random() * 7) + 91, // 91 - 97 ATS score
    };

    setStoredResume(newResume);
    setCurrentResume(newResume);

    if (user) {
      const updatedUser: UserProfile = {
        ...user,
        resumeFileName: file.name,
        resumeFileType: typeLabel,
        resumeFileSize: formattedSize,
      };
      setUser(updatedUser);
      setStoredUser(updatedUser);
    }

    showToast(`Resume "${file.name}" uploaded successfully!`, 'success');
    return { success: true, message: 'Resume uploaded successfully', resume: newResume };
  };

  const replaceResume = async (file: File) => {
    return uploadResume(file);
  };

  const removeResume = () => {
    const emptyResume: StoredResume = {
      fileName: '',
      fileType: '',
      fileSize: '',
      uploadedAt: '',
    };
    setStoredResume(emptyResume);
    setCurrentResume(emptyResume);
    showToast('Resume removed.', 'info');
  };

  const showToast = (
    message: string,
    type: 'success' | 'error' | 'info' = 'success',
    title?: string
  ) => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    setToasts((prev) => [...prev, { id, message, type, title }]);

    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const signIn = (email: string, pass: string): { success: boolean; error?: string } => {
    if (!email || !pass) {
      return { success: false, error: 'Please provide both email and password.' };
    }
    if (pass.length < 4) {
      return { success: false, error: 'Password must be at least 4 characters.' };
    }

    // Determine user name from email prefix or demo
    const namePart = email.split('@')[0];
    const formattedName = namePart
      .split(/[._-]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    const signedInUser: UserProfile = {
      ...(user || DEMO_USER),
      email,
      name: formattedName || 'Alex Mercer',
    };

    setUser(signedInUser);
    setStoredUser(signedInUser);
    showToast(`Welcome back, ${signedInUser.name}!`, 'success');
    return { success: true };
  };

  const signUp = (name: string, email: string, pass: string): { success: boolean; error?: string } => {
    if (!name || !email || !pass) {
      return { success: false, error: 'All fields are required.' };
    }
    if (pass.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters long.' };
    }

    const newUser: UserProfile = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      college: 'University Campus',
      degree: 'Undergraduate Program',
      graduationYear: '2026',
      skills: ['Problem Solving', 'Git', 'Software Development'],
      bio: 'Enthusiastic student exploring career opportunities.',
    };

    setUser(newUser);
    setStoredUser(newUser);
    showToast(`Account created! Welcome to Internova, ${newUser.name}.`, 'success');
    return { success: true };
  };

  const signInDemoGoogle = () => {
    const googleDemoUser: UserProfile = {
      name: 'Alex Mercer (Google Demo)',
      email: 'alex.mercer.demo@gmail.com',
      college: 'National University of Tech',
      degree: 'B.S. in Computer Science',
      graduationYear: '2026',
      skills: ['React', 'TypeScript', 'Cloud Systems', 'Python'],
      bio: 'Enthusiastic builder passionate about high-scale web products and developer experience.',
      githubUrl: 'https://github.com/alex-mercer',
      linkedinUrl: 'https://linkedin.com/in/alex-mercer',
    };
    setUser(googleDemoUser);
    setStoredUser(googleDemoUser);
    showToast('Signed in with Google Demo account!', 'success');
  };

  const signOut = () => {
    setUser(null);
    setStoredUser(null);
    showToast('You have been signed out successfully.', 'info');
  };

  const updateProfile = (profileData: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...profileData };
    setUser(updated);
    setStoredUser(updated);
    showToast('Profile updated successfully!', 'success');
  };

  const isSaved = (id: string) => savedIds.includes(id);

  const toggleSave = (id: string): boolean => {
    const { isSaved: nowSaved, allIds } = toggleStoredSavedId(id);
    setSavedIds(allIds);
    if (nowSaved) {
      showToast('Internship saved to your bookmarks!', 'success');
    } else {
      showToast('Removed internship from bookmarks.', 'info');
    }
    return nowSaved;
  };

  const removeSaved = (id: string) => {
    const updated = removeStoredSavedId(id);
    setSavedIds(updated);
    showToast('Removed from saved internships.', 'info');
  };

  const isApplied = (id: string) => {
    return applications.some((app) => app.internshipId === id);
  };

  const getApplication = (id: string) => {
    return applications.find((app) => app.internshipId === id);
  };

  const applyToInternship = async (
    id: string,
    notes?: string
  ): Promise<{ success: boolean; message: string }> => {
    // Prevent duplicate application
    if (isApplied(id)) {
      showToast('You have already applied for this internship.', 'info');
      return { success: false, message: 'Already applied' };
    }

    if (applyingIds.includes(id)) {
      return { success: false, message: 'Application in progress' };
    }

    // Set loading state "Applying..."
    setApplyingIds((prev) => [...prev, id]);

    // Simulate realistic asynchronous network call (approx 950ms)
    await new Promise((resolve) => setTimeout(resolve, 950));

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const newApp: Application = {
      internshipId: id,
      appliedDate: formattedDate,
      appliedTimestamp: Date.now(),
      status: 'Applied',
      applicantName: user?.name || 'Kavya C',
      applicantEmail: user?.email || 'kavya.c@campus.edu',
      resumeFileName: currentResume.fileName || user?.resumeFileName || 'Kavya_C_Resume.pdf',
      coverNote: notes || 'Excited to apply and bring dedication to the team.',
    };

    const updated = addStoredApplication(newApp);
    setApplications(updated);
    setApplyingIds((prev) => prev.filter((item) => item !== id));

    showToast('Your application has been added to My Applications.', 'success', '✓ Application Submitted!');
    return { success: true, message: 'Application submitted successfully!' };
  };

  return (
    <AppContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signInDemoGoogle,
        signOut,
        updateProfile,
        savedIds,
        isSaved,
        toggleSave,
        removeSaved,
        applications,
        isApplied,
        getApplication,
        applyingIds,
        applyToInternship,
        currentResume,
        uploadResume,
        replaceResume,
        removeResume,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
