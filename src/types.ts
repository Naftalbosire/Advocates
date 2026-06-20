export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  statutes: string[];
  services: string[];
  caseStudyTitle?: string;
  caseStudyDesc?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
  qualifications: string[];
  admissionYear: string;
  courtRanking?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  reads: number;
  date: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  organization: string;
  role: string;
  text: string;
  rating: number;
  verified: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  practiceArea: string;
  date: string;
  status: 'New' | 'Reviewed' | 'Archived';
  notes?: string;
}
