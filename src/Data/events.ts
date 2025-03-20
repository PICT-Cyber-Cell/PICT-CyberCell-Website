// Define Types for Event Data
type Event = {
  id: number;
  attributes: {
    sigs: {
      data: {
        attributes: {
          name: string[];
        };
      }[];
    };
    title: string;
    date_time: string;
    event_type: string;
    location: string;
    link: string;
    cems_link: string;
    body: string;
    cover_images: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
    slider_images: (string | number)[];
    status: 'upcoming' | 'past';
  };
};

// Events data
export const events: Event[] = [
//   {
//     id: 1,
//     attributes: {
//       sigs: {
//         data: [
//           {
//             attributes: {
//               name: ['Workshop'],
//             },
//           },
//         ],
//       },
//       title: 'Strengthening Cyber Defenses',
//       date_time: '2024-09-27',
//       event_type: 'Workshop',
//       location: 'COMP Seminar Hall',
//       link: '',
//       cems_link: '',
//       body: `📢 Whoaa! A cyber storm is brewing! 🤯 \n \n No worries! PICT Cyber Cell is back with an electrifying workshop you can't miss! Join us for an exclusive session on:
        
// Topic: Strengthening Cyber Defenses: Navigating Threats and Risks
// Special Guest: Mr. Santosh Kamane, Cybersecurity and Data Privacy Leader, Founder and CISO of RIVEDIX

// Get ready for an insightful session as Mr. Santosh Kamane dives into:

// 🔍 Decoding Threat Models
// ⚖ Mastering Risk Management Strategies
// 🌐 Unlocking Cybersecurity Career Pathways

// This is your chance to connect with a cybersecurity expert, ask your burning questions, and kickstart your career journey! 🔐

// For details and queries, please reach out to:
// 📱 Devendra Ingale: 9420877105
// 📱 Tanmay Shingavi: 7448267050`,
//       cover_images: {
//         data: [
//           {
//             attributes: {
//               url: '/event_webclass/event_webclass2.jpeg',
//             },
//           },
//         ],
//       },
//       slider_images: ['', 0],
//       status: 'upcoming',
//     },
//   },
  {
    id: 2,
    attributes: {
      sigs: {
        data: [
          {
            attributes: {
              name: ['Workshop'],
            },
          },
        ],
      },
      title: 'Jobs in Cyber Secruity ',
      date_time: '2024-09-21',
      event_type: 'SIG Workshop',
      location: 'PICT, Pune',
      link: '',
      cems_link: '',
      body: 'PuneDAO is an all-inclusive network that strives to create a thriving startup community across the globe. Currently catering to Web3 domain for Pune ecosystem.\n',
      cover_images: {
        data: [
          {
            attributes: {
              url: '/event_dao/event_dao2.jpeg',
            },
          },
        ],
      },
      slider_images: ['/event_dao/event_dao1.jpeg','/event_dao/event_dao2.jpeg','/event_dao/event_dao3.jpeg','/event_dao/event_dao4.jpeg','/event_dao/event_dao5.jpeg','/event_dao/event_dao6.jpeg'],
      status: 'past',
    },
  },
  {
    id: 3,
    attributes: {
      sigs: {
        data: [
          {
            attributes: {
              name: ['CTF'],
            },
          },
        ],
      },
      title: 'Lakshya CTF',
      date_time: '2024-07-20',
      event_type: 'CTF',
      location: 'PICT, Pune',
      link: '',
      cems_link: '',
      body: 'Lakshya CTF was an awesome event that I sadly missed :(',
      cover_images: {
        data: [
          {
            attributes: {
              url: '/event_ctf/event_ctf2.jpeg',
            },
          },
        ],
      },
      slider_images: ['/event_ctf/event_ctf2.jpeg', '/event_ctf/event_ctf1.jpeg','/event_ctf/event_ctf3.jpeg','/event_ctf/event_ctf4.jpeg','/event_ctf/event_ctf5.jpeg','/event_ctf/event_ctf6.jpeg','/event_ctf/event_ctf7.jpeg','/event_ctf/event_ctf8.jpeg','/event_ctf/event_ctf9.jpeg','/event_ctf/event_ctf10.jpeg','/event_ctf/event_ctf11.jpeg'],
      status: 'past',
    },
  },
  {
    id: 4,
    attributes: {
      sigs: {
        data: [
          {
            attributes: {
              name: ['Workshop'],
            },
          },
        ],
      },
      title: 'Web Vulnerability Workshop',
      date_time: '2024-08-20',
      event_type: 'Workshop',
      location: 'PICT, Pune',
      link: '',
      cems_link: '',
      body: 'Conducted an introductory workshop for everyone interested in getting started with Cybersecurity! Discussed Linux and Web fundamentals, some hands-on activities, and lots of learnings.',
      cover_images: {
        data: [
          {
            attributes: {
              url: '/event_webclass/event_webclass2.jpeg',
            },
          },
        ],
      },
      slider_images: ['/event_webclass/event_webclass2.jpeg','/event_webclass/event_webclass3.jpeg','/event_webclass/event_webclass4.jpeg','/event_webclass/event_webclass5.jpeg','/event_webclass/event_webclass6.jpeg'],
      status: 'past',
    },
  },
];