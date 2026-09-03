export const profile = {
  name: 'Ajay Rathod',
  titles: ['Data Analyst', 'Software Developer', 'Full-Stack Engineer'],
  email: 'rathodaj02@gmail.com',
  phone: '+91 9834183493',
  location: 'Maharashtra, India',
  linkedin: 'https://linkedin.com/in/ajay-rathod-1445ba222',
  github: 'https://github.com/AjRathod02',
}

export const summary = `Data analyst and developer who connects business questions to measurable outcomes. I work end-to-end—from SQL queries and Python automation to dashboards and internal tools—so teams can see trends, track KPIs, and act with confidence. At work I have applied that lens to inventory acquisition, pricing, and occupancy: defining metrics, validating assumptions with data, and iterating on what the numbers show. On the engineering side I ship with React, Next.js, Supabase, and Firebase when a problem is best solved with a product, not only a spreadsheet.`

export const skillGroups = [
  {
    title: 'Data & analytics',
    items: [
      'SQL',
      'Python (analysis & automation)',
      'Dashboards & KPIs',
      'Exploratory analysis',
      'Reporting & storytelling',
      'Data cleaning & validation',
    ],
  },
  {
    title: 'Languages',
    items: ['JavaScript', 'Python'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend & data stores',
    items: ['Supabase (PostgreSQL)', 'Firebase', 'MongoDB'],
  },
  {
    title: 'Tools',
    items: ['Docker', 'Git', 'Firebase Hosting'],
  },
  {
    title: 'Core',
    items: ['REST APIs', 'Authentication', 'System Design'],
  },
  {
    title: 'Domain',
    items: ['Pricing strategy', 'Inventory optimization', 'Operational metrics', 'Stakeholder communication'],
  },
]

export const experience = [
  {
    role: 'Software Developer & Data Analyst',
    company: 'Reunios',
    period: '2024 – Present',
    highlights: [
      'Owned recurring reporting and dashboard views for occupancy, revenue, and operational KPIs; translated stakeholder questions into SQL-backed analyses and Python workflows for inventory, pricing, and acquisition.',
      'Ran inventory acquisition analysis and partnered on pricing strategy, grounding recommendations in revenue, occupancy, and utilization signals.',
      'Built internal web tools and dashboards so teams see metrics inside the workflows they already use.',
      'Developed Python automation to cut manual work, tighten data quality, and keep operational pipelines reliable.',
      'Contributed across the stack (UI, APIs, data access) to scalable, maintainable systems that support day-to-day business operations.',
    ],
  },
]

export const projects = [
  {
    name: 'CasaFlow',
    tag: 'Property Management System',
    period: '2024 – Present',
    description:
      'Developed Python backend logic and REST APIs for booking, pricing, and inventory workflows. Integrated Beds24 and Hospitable via API automation; built real-time dashboards and data pipelines.',
    stack: ['Python', 'React', 'Next.js', 'REST APIs', 'Supabase'],
  },
  {
    name: 'Personal Portfolio Website',
    tag: 'Portfolio',
    period: '2024 – Present',
    description:
      'Designed and deployed an interactive portfolio with responsive UI, project showcase, and contact form on Firebase Hosting.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase Hosting'],
    url: 'https://ajay-portfolio-3bcf8.web.app',
  },
  {
    name: 'Student Dropout Analysis',
    tag: 'ML & Data Analysis',
    description:
      'Built ML models for dropout prediction; performed preprocessing, feature engineering, and web visualization for stakeholder-friendly insights.',
    stack: ['Python', 'Machine Learning', 'Data Analysis'],
  },
  {
    name: 'FastKart',
    tag: 'E-commerce Platform',
    description:
      'Implemented catalog, cart, checkout, order tracking, and role-based access control across a full-stack commerce flow.',
    stack: ['React', 'Next.js', 'Firebase', 'MongoDB', 'REST APIs'],
  },
  {
    name: 'BrightLink',
    tag: 'Corporate Website',
    description:
      'Built a responsive, performance-optimized corporate website with cross-device compatibility.',
    stack: ['React', 'Tailwind CSS'],
  },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Marathwada Institute of Technology',
    period: '2020 – 2024',
    detail: 'CGPA: 8.2',
  },
  {
    degree: 'Class 12',
    school: 'Vivekanand College',
    period: '',
    detail: '62%',
  },
]

export const certifications = [
  'Red Hat Certified System Administrator (RHCSA)',
  'Python (Udemy)',
  'Prompt Engineering (IBM)',
  'Google Apps Script',
]

export const achievements = ['First Rank Holder in Technical Aptitude Competition']

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
