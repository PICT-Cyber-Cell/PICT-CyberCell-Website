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

export const PrevData: TeamMember[] = [
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
];

export const coordinators: TeamMember[] = [
  {
    name: 'Mangalam Misra',
    position: 'Chairperson',
    image: '/images/mangalam.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/mangalam-misra-8338a2291/',
      github: 'https://github.com/tacjuicy ',
      instagram: 'https://www.instagram.com/mangalam_misra/',
    },
  },
  {
    name: 'Krish Gulati',
    position: 'Vice Chairperson',
    image: '/images/krish.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/krish-gulati-560997276',
      github: ' https://github.com/fusion1110',
      instagram: 'https://www.instagram.com/krishhhh_1110/',
    },
  },
  {
    name: 'Rohit Jadhav',
    position: 'Secretary', // Changed from title to position for consistency
    image: '/images/rohit.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/rohit-jadhav-696955306/',
      github: 'https://github.com/rohit510511',
      instagram: 'https://www.instagram.com/rohit_jadhav746?igsh=NTVzbWp0eHg0ZWU0',
    },
  },
  {
    name: 'Omkar Joshi',
    position: 'Technical Head', // Changed from title to position for consistency
    image: '/images/omkar.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/omkarjoshi9/',
      github: 'https://github.com/omkarjoshi9',
      instagram: 'https://www.instagram.com/omkar_joshi._/',
    },
  },
  {
    name: 'Arya Bejalwar',
    position: 'Admin Head', // Changed from title to position for consistency
    image: '/images/arya.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/arya-bejalwar-a23a46303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/Ryzen86',
      instagram: 'https://www.instagram.com/arya_bejalwar?igsh=MW9iMmd4OWQwMzlneg==',
    },
  },
  {
    name: 'Arfat Kadvekar',
    position: 'Blue Team Head', // Changed from title to position for consistency
    image: '/images/arfat.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/arfat-kadvekar-7b16a8232',
      github: 'https://github.com/ArfatKadvekar',
      instagram: 'https://www.instagram.com/arfat_kadvekar',
    },
  },
  {
    name: 'Riddhiraj Kulkarni',
    position: 'Red Team Head', // Changed from title to position for consistency
    image: '/images/riddhiraj.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/riddhiraj-kulkarni-989343299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/RiddhirajKulkarni',
      instagram: 'https://www.instagram.com/riddhiraj_kulkarni/',
    },
  },
  {
    name: 'Atharv Raut',
    position: 'Marketing Head', // Changed from title to position for consistency
    image: '/images/atharv.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/atharv-raut-1708b9288',
      github: 'https://github.com/RautAtharv07',
      instagram: 'https://www.instagram.com/atharvr_07?igsh=MWdtZ3J1ZHMyeHhpMw==',
    },
  },
  
  {
    name: 'Suyash Pathade',
    position: 'Design Head', // Changed from title to position for consistency
    image: '/images/suyash.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/suyash-pathade-64b795289',
      github: 'https://github.com/Suyashp10',
      instagram: 'https://www.instagram.com/suyashp10?igsh=bmh5YjFiMHJid3do',
    },
  },
  // Add more coordinators as needed
];
