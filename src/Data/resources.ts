export interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  keywords: string[];
  category: 'learning' | 'tools' | 'ctf' | 'security';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Web Security Fundamentals',
    description:
      'Learn the basics of web security, including XSS, CSRF, and SQL injection prevention.',
    link: 'https://github.com/PICT-Cyber-Cell/Web-Vulnerabilities',
    keywords: ['web security', 'xss', 'csrf', 'sql injection', 'beginner'],
    category: 'learning',
    difficulty: 'beginner',
  },
  {
    id: 2,
    title: 'Network Security Tools',
    description:
      'Essential tools for network security analysis and monitoring.',
    link: '#',
    keywords: ['network', 'wireshark', 'nmap', 'security tools'],
    category: 'tools',
    difficulty: 'intermediate',
  },
  {
    id: 3,
    title: 'Linux Basic',
    description: 'Linux Commands for Navigating, Managing Files, and More    ',
    link: 'https://github.com/PICT-Cyber-Cell/Linux-Session',
    keywords: ['linux', 'challenges', 'practice', 'competition'],
    category: 'learning',
    difficulty: 'beginner',
  },
  {
    id: 4,
    title: 'Cryptography Basics',
    description: 'Introduction to cryptography and encryption techniques.',
    link: '#',
    keywords: ['cryptography', 'encryption', 'security', 'beginner'],
    category: 'learning',
    difficulty: 'beginner',
  },
];