export interface TeamMember {
  name: string;
  position: string;
  description?: string;
  image: string;
  socials: {
    linkedin: string;
    instagram: string;
    github: string;
  };
}

export const LeaderData: TeamMember[] = [
  {
    name: 'Rushi Balapure',
    position: 'Founder & Chairperson',
    description:
      'A cybersecurity expert and developer focused on building secure with a strong emphasis on threat analysis and risk management.',
    image: '/images/rushi.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/rushi-balapure-75148022a/',
      instagram: 'https://instagram.com',
      github: 'https://github.com/Rushi-Balapure',
    },
  },
  {
    name: 'Riddhi Kulkarni',
    position: 'Vice Chairperson',
    description:
      'A passionate developer focused on creating intuitive user experiences in web technologies.',
    image: '/images/riddhi.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/riddhi-kulkarni-9a6b84232/',
      github: 'https://github.com/riddhikul',
      instagram: 'https://instagram.com/',
    },
  },
  {
    name: 'Kaushik Aduri',
    position: 'Seceretary',
    description:
      'A designer with expertise in machine learning, creating intuitive, AI-driven user interfaces that enhance digital experiences',
    image: '/images/kaushik.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/kaushik-aduri-b3ba20142/',
      instagram: 'https://instagram.com',
      github: 'https://github.com/Kok363',
    },
  },
];

export const coordinators: TeamMember[] = [
  {
    name: 'Tanmay Shingavi',
    position: 'Vice Chairperson',
    image: '/images/tanmay.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/tanmay-shingavi',
      github: 'https://github.com/decodingafterlife',
      instagram: 'https://www.instagram.com/tps_1514',
    },
  },
  {
    name: 'Devendra Ingale',
    position: 'Chairperson',
    image: '/images/Devendra.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/devendra-ingale/',
      github: 'https://github.com/Valerio-Lotus',
      instagram: 'https://www.instagram.com/devendra_ingale_/',
    },
  },
  {
    name: 'Pranav Deshpande',
    position: 'Secretary', // Changed from title to position for consistency
    image: '/images/pranav.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/pranav-deshpande-75a80532b/',
      github: 'https://github.com/prannavdeshpande',
      instagram: 'https://www.instagram.com',
    },
  },
  {
    name: 'Jagdish Bainade',
    position: 'Web Security Head', // Changed from title to position for consistency
    image: '/images/Jagdish.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/',
      github: 'https://github.com/Jagdish1123',
      instagram: 'https://www.instagram.com',
    },
  },
  {
    name: 'Kunj Chandak',
    position: 'Technical Head', // Changed from title to position for consistency
    image: '/images/kunj.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/',
      github: 'https://github.com/Kunj05',
      instagram: 'https://www.instagram.com',
    },
  },
  {
    name: 'Aditya Gaikwad',
    position: 'Digital Forensic Head', // Changed from title to position for consistency
    image: '/images/aditya.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/aditya-gaikwad16/',
      github: 'https://github.com/AdityaGaikwad16',
      instagram: 'https://www.instagram.com/adityagaikwad1620',
    },
  },
  {
    name: 'Kedar Attarde',
    position: 'Marketing Head', // Changed from title to position for consistency
    image: '/images/kedar.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/kedar-attarde-a9b9122ba/',
      github: 'https://github.com/Kedarattarde9',
      instagram:
        'https://www.instagram.com/kedar_attarde_9?igsh=MXc1aWo4bXU3ZDA5MQ==',
    },
  },
  {
    name: 'Ajinkya Kachare',
    position: 'Admin Head', // Changed from title to position for consistency
    image: '/images/ajinkya.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ajinkya-kachare-93786328b/',
      github: 'https://github.com',
      instagram: 'https://www.instagram.com',
    },
  },
  {
    name: 'Sunny Bagul',
    position: 'Design Head', // Changed from title to position for consistency
    image: '/images/sunny.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/sunny-bagul-b38b73259/',
      github: 'https://github.com',
      instagram: 'https://www.instagram.com',
    },
  },
  // Add more coordinators as needed
];
