// ============================================
// Shared interfaces — single source of truth
// ============================================

/** Generic icon + color pair, reused across every UI element */
export interface IconStyle {
  icon: string;
  colorClass: string;
  bgClass: string;
}

/** Stat box (home, skills, career, projects) */
export interface Stat {
  icon: string;
  value: string;
  label: string;
  colorClass: string;
}

/** Hero section configuration */
export interface HeroConfig {
  badgeIcon: string;
  badgeLabel: string;
  title: string;
  titleHighlight: string;
  description: string;
  /** Tailwind gradient classes for the highlighted text */
  gradientClass?: string;
}

/** Filter pill (skills, projects, career) */
export interface Filter {
  id: string;
  label: string;
  icon?: string;
}

/** CTA section configuration */
export interface CtaConfig {
  title: string;
  description: string;
  primaryButton: CtaButton;
  secondaryButton?: CtaButton;
}

export interface CtaButton {
  label: string;
  icon: string;
  routerLink?: string;
  href?: string;
}

/** Tag / badge displayed as a pill */
export interface Tag {
  label: string;
  colorClass?: string;
  bgClass?: string;
}

// ---- Domain models ----

export interface Skill {
  name: string;
  level: number;
  experience: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  longDescription?: string;
  level: number;
  yearsExperience?: number;
  colorClass: string;
  bgClass: string;
  borderClass?: string;
  barClass: string;
  gradientClass?: string;
  skills: Skill[];
  keyStrengths?: string[];
  tools?: string[];
  relatedProjects?: ProjectRef[];
  resources?: Resource[];
}

export interface ProjectRef {
  id: string;
  title: string;
  description: string;
}

export interface Resource {
  title: string;
  type: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  context?: string;
  imageUrl: string;
  tags: string[];
  categories?: string[];
  year?: number;
  featured?: boolean;
  status?: string;
  statusColor?: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: Metric[];
  tabs?: TabContent[];
}

export interface Metric {
  icon: string;
  value: string;
  label: string;
}

export interface TabContent {
  id: string;
  label: string;
  icon: string;
  content: string[];
}

export interface TimelineEvent {
  id: string;
  type: 'job' | 'education';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  highlights: string[];
  technologies?: string[];
  icon: string;
  colorClass: string;
  bgClass: string;
  linkedTo?: string;
}

export interface TimelineItem {
  id: string;
  type: 'alternance' | 'standalone';
  startDate: string;
  endDate: string | null;
  current: boolean;
  education?: TimelineEvent;
  job?: TimelineEvent;
  event?: TimelineEvent;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
  colorClass: string;
  bgClass: string;
}

export interface LearningItem {
  name: string;
  progress: number;
  status: string;
}

export interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link?: string;
  colorClass: string;
  bgClass: string;
}

export interface SocialLink {
  icon: string;
  name: string;
  url: string;
  colorClass: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

export interface Value {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  hoverBorderClass: string;
}

export interface Fact {
  icon: string;
  iconColor: string;
  text: string;
}
