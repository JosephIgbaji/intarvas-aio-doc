import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'INTARVAS AIO Docs',
  description: 'Comprehensive 60-Chapter Product Manual & Knowledge Base for the INTARVAS AIO Platform',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'INTARVAS AIO Product Documentation' }],
    ['meta', { name: 'og:description', content: 'Complete user manual, operational guide, and 60-chapter wiki for INTARVAS AIO.' }]
  ],

  themeConfig: {
    siteTitle: '',
    logo: {
      light: '/images/intarvaslogoblue.svg',
      dark: '/images/intarvaslogowhite.svg',
      alt: 'INTARVAS Logo'
    },

    // Built-in Local Search
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    },

    nav: [
      { text: 'Overview & TOC', link: '/' },
      // { text: 'Chapter 01 (Start)', link: '/chapters/chapter-01' },
      // { text: 'Chapter 02 (Interviews)', link: '/chapters/chapter-02' },
      // { text: 'Chapter 40 (Panels)', link: '/chapters/chapter-40' },
      // { text: 'Chapter 60 (Data List)', link: '/chapters/chapter-60' }
    ],

    sidebar: [
      {
        text: 'Overview',
        collapsed: true,
        items: [
          { text: 'Table of Contents (Chapters 01 - 60)', link: '/' }
        ]
      },
      {
        text: 'Part 1: Platform Setup',
        collapsed: true,
        items: [
          { text: '01. Introduction Guide', link: '/chapters/chapter-01' },
          { text: '02. Interviews Module', link: '/chapters/chapter-02' },
          { text: '03. Inbox Module', link: '/chapters/chapter-03' },
          { text: '04. Task Management', link: '/chapters/chapter-04' },
          { text: '05. Information Bank', link: '/chapters/chapter-05' },
          { text: '06. Quick Add Module', link: '/chapters/chapter-06' },
          { text: '07. Language Options', link: '/chapters/chapter-07' },
          { text: '08. View Options', link: '/chapters/chapter-08' },
          { text: '09. Notification Module', link: '/chapters/chapter-09' },
          { text: '10. Search Module', link: '/chapters/chapter-10' },
          { text: '11. Status Management', link: '/chapters/chapter-11' },
          { text: '12. My Profile Module', link: '/chapters/chapter-12' },
          { text: '13. Workplace Panel', link: '/chapters/chapter-13' }
        ]
      },
      {
        text: 'Part 2: Interviews & Calls',
        collapsed: true,
        items: [
          { text: '14. Conversation Flow', link: '/chapters/chapter-14' },
          { text: '15. Caller ID & Lines', link: '/chapters/chapter-15' },
          { text: '16. Interview Start', link: '/chapters/chapter-16' },
          { text: '17. Result Code (Disposition)', link: '/chapters/chapter-17' },
          { text: '18. Advanced Result Codes', link: '/chapters/chapter-18' },
          { text: '19. Save & Close Protocol', link: '/chapters/chapter-19' },
          { text: '20. Personal Card & Data', link: '/chapters/chapter-20' },
          { text: '21. Person Card Merging', link: '/chapters/chapter-21' },
          { text: '22. Block Person & Channel', link: '/chapters/chapter-22' },
          { text: '23. Instant Data Update', link: '/chapters/chapter-23' },
          { text: '24. More Information & Title', link: '/chapters/chapter-24' },
          { text: '25. Address & Maps', link: '/chapters/chapter-25' },
          { text: '26. Social Media Profiles', link: '/chapters/chapter-26' },
          { text: '27. Custom Fields', link: '/chapters/chapter-27' },
          { text: '28. Contact Consolidation', link: '/chapters/chapter-28' }
        ]
      },
      {
        text: 'Part 3: CRM Records & Forms',
        collapsed: true,
        items: [
          { text: '29. Past (Timeline)', link: '/chapters/chapter-29' },
          { text: '30. Request (Ticket) Tracking', link: '/chapters/chapter-30' },
          { text: '31. Customer Special Notes', link: '/chapters/chapter-31' },
          { text: '32. Dynamic Forms', link: '/chapters/chapter-32' },
          { text: '33. Product & Inventory', link: '/chapters/chapter-33' },
          { text: '34. Media & File Archive', link: '/chapters/chapter-34' },
          { text: '35. Timed Reminders', link: '/chapters/chapter-35' },
          { text: '36. Proposal Management', link: '/chapters/chapter-36' },
          { text: '37. Campaign Participation', link: '/chapters/chapter-37' },
          { text: '38. Manual Offline Logs', link: '/chapters/chapter-38' },
          { text: '39. Interface Settings', link: '/chapters/chapter-39' }
        ]
      },
      {
        text: 'Part 4: Dashboards & Analytics',
        collapsed: true,
        items: [
          { text: '40. Create a Panel', link: '/chapters/chapter-40' },
          { text: '41. Representatives Tracking', link: '/chapters/chapter-41' },
          { text: '42. Daily Components', link: '/chapters/chapter-42' },
          { text: '43. Incoming Call Traffic', link: '/chapters/chapter-43' },
          { text: '44. Outgoing Call Performance', link: '/chapters/chapter-44' },
          { text: '45. Those Not Seen', link: '/chapters/chapter-45' },
          { text: '46. People in Line (Queues)', link: '/chapters/chapter-46' },
          { text: '47. Phone IVR Routing', link: '/chapters/chapter-47' },
          { text: '48. Representative Statistics', link: '/chapters/chapter-48' },
          { text: '49. Social Media Statistics', link: '/chapters/chapter-49' },
          { text: '50. Representative Panel', link: '/chapters/chapter-50' },
          { text: '51. Instant Support & Sync', link: '/chapters/chapter-51' },
          { text: '52. Gamification Report', link: '/chapters/chapter-52' },
          { text: '53. Meeting Board', link: '/chapters/chapter-53' },
          { text: '54. Social Discussion Stats', link: '/chapters/chapter-54' }
        ]
      },
      {
        text: 'Part 5: Contacts & Data Lists',
        collapsed: true,
        items: [
          { text: '55. All Individuals (Contacts)', link: '/chapters/chapter-55' },
          { text: '56. Advanced Filtering', link: '/chapters/chapter-56' },
          { text: '57. My People Portfolio', link: '/chapters/chapter-57' },
          { text: '58. Blocked Users Blacklist', link: '/chapters/chapter-58' },
          { text: '59. Companies (B2B Database)', link: '/chapters/chapter-59' },
          { text: '60. Data List & Smart Import', link: '/chapters/chapter-60' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: 'On This Page'
    },

    docFooter: {
      prev: 'Previous Chapter',
      next: 'Next Chapter'
    },

    footer: {
      message: 'INTARVAS AIO Platform Manual v1.0 (Chapters 01 - 60)',
      copyright: 'Copyright © 2026 INTARVAS AIO. All rights reserved.'
    }
  }
});
