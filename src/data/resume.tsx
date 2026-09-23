import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localizeNavbar, plCopy } from "./resume.pl";

export const DATA = {
  name: "Oliwier Drop - Network & Infrastructure Administrator",
  initials: "OD",
  url: "https://oliwierdrop.com",
  location: "Poznań, Poland",
  locationLink: "https://www.google.com/maps/place/poznań+poland",
  description:
    "Network & Infrastructure Administrator with a passion for building scalable and reliable systems.",
  summary:
    "I am a Network & Infrastructure Administrator with a passion for building scalable and reliable systems. I have a strong background in network engineering and infrastructure management.",
  avatarUrl: "/photos/picofme.png",
  ogImage: "/portfolio-preview.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a DM with a direct question on LinkedIn and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Cisco", slug: "cisco" },
    {
      name: "Extreme Networks",
      iconUrl: "https://www.google.com/s2/favicons?domain=extremenetworks.com&sz=64",
    },
    { name: "Ubiquiti", slug: "ubiquiti" },
    { name: "Palo Alto Networks", slug: "paloaltonetworks" },
    {
      name: "Wazuh",
      iconUrl: "https://www.google.com/s2/favicons?domain=wazuh.com&sz=64",
    },
    {
      name: "Ansible",
      iconUrl: "https://www.google.com/s2/favicons?domain=docs.ansible.com&sz=64",
    },
    { name: "Debian", slug: "debian" },
    { name: "Ubuntu", slug: "ubuntu" },
    { 
      name: "Synology", 
      iconUrl: "https://www.google.com/s2/favicons?domain=synology.com&sz=64",
    },
    {
      name: "Windows Server",
      iconUrl: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=64",
    },
    {
      name: "Windows 11",
      iconUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_Windows_11.webp?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ] as const,
  contact: {
    email: "oliwier.drop11@outlook.com ",
    tel: "+48 505 235 431",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/oliwier-drop",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oliwier-drop/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "HellermannTyton Poland",
      href: "https://hellermanntyton.pl",
      badges: ["Full-time"],
      location: "Słupca, Poland",
      title: "IT Infrastructure Specialist",
      logoUrl: "/photos/ht_logo.png",
      start: "November 2026",
      end: undefined,
      description:
        "Maintaining and developing IT infrastructure in a production environment. Managing Cisco, Extreme Networks and Ubiquiti networks, administering VMware ESXi, Proxmox and Hyper-V, Windows Server, print management, monitoring and RMM systems, access control deployments, and user support.",
    },
    {
      company: "Corpotech",
      href: "https://corpotech.com.pl",
      badges: ["Freelance"],
      location: "Słupca, Poland",
      title: "Network & Infrastructure Consultant",
      logoUrl: "https://corpotech.com.pl/favicon.svg",
      logoScale: 0.8,
      start: "November 2026",
      end: undefined,
      description:
        "Supporting clients on network and infrastructure implementation projects — designing solutions, planning deployments, and rolling them out in production environments.",
    },
    {
      company: "Corpotech",
      href: "https://corpotech.com.pl",
      badges: ["Full-time"],
      location: "Słupca, Poland",
      title: "IT Specialist",
      logoUrl: "https://corpotech.com.pl/favicon.svg",
      logoScale: 0.8,
      start: "September 2024",
      end: "November 2026",
      description:
        "Administering network and IT infrastructure for clients — switching, VLANs, servers and virtualization. Also building websites and custom software solutions tailored to client needs.",
    },
  ],
  education: [
    {
      school: "Adam Mickiewicz University in Poznań",
      href: "https://amu.edu.pl",
      degree: ["Bachelor's degree"],
      major: "Journalism and Communication",
      logoScale: 0.9,
      logoUrl: "https://amu.edu.pl/__data/assets/file/0015/6603/apple-touch-icon.png?v=0.1.1",
      start: "2024",
      end: "2027",
    },
    {
      school: "General Education and Vocational High School in Zagórów",
      href: "https://zszagorow.eu",
      degree: ["Technician Diploma"],
      major: "Information and Telecommunications",
      logoUrl: "https://www.google.com/s2/favicons?domain=zszagorow.eu&sz=128",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Wazuh Deployment and ExtremeXOS Integration",
      href: "https://github.com/oliwier-drop/wazuh-extremexos-integration",
      dates: "July 2026",
      active: true,
      description:
        "Deployed Wazuh at the HellermannTyton plant and wrote custom decoders and correlation rules for Extreme Networks Switch Engine syslog — improving visibility into auth, ports, loops, and platform events.",
      technologies: ["Wazuh", "Extreme Networks", "Syslog", "PCRE2"],
      links: [
        {
          type: "Source",
          href: "https://github.com/oliwier-drop/wazuh-extremexos-integration",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/photos/wazuh-header-image.jpg",
      video: "",
    },
    {
      title: "Electron Kiosk",
      href: "https://github.com/oliwier-drop/electron-kiosk",
      dates: "May 2026",
      active: true,
      description:
        "A kiosk browser overlay for shared plant-floor terminals. Built with Electron — includes an on-screen keyboard and automatic session wipe.",
      technologies: ["Electron", "JavaScript", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/oliwier-drop/electron-kiosk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/photos/ht-kiosk-photo.png",
      imageScale: 1,
      video: "",
    },
    {
      title: "Marpol",
      href: "https://marpol-opakowania.pl",
      dates: "February 2026",
      active: true,
      description:
        "A simple landing page for a local cardboard packaging manufacturer. Clean, industrial look with product-focused messaging — built for a regional packaging company.",
      technologies: ["PHP", "Laravel", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://marpol-opakowania.pl",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/photos/marpol-mockup.png",
      imageScale: 1,
      video: "",
    },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description: "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description: "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description: "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description: "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
};

export type ResumeData = typeof DATA;

/** Localized resume view. Edit English copy in `DATA` above; Polish in `resume.pl.ts`. */
export function getData(locale: Locale): ResumeData {
  const navbar = localizeNavbar(
    locale,
    DATA.navbar as unknown as { href: string; label: string; icon: unknown }[],
    locale === "pl" ? plCopy.navbar : undefined,
  ) as unknown as typeof DATA.navbar;

  if (locale !== "pl") {
    return {
      ...DATA,
      navbar,
    };
  }

  return {
    ...DATA,
    name: plCopy.name,
    description: plCopy.description,
    summary: plCopy.summary,
    sections: {
      about: { ...DATA.sections.about, ...plCopy.sections.about },
      work: { ...DATA.sections.work, ...plCopy.sections.work },
      education: { ...DATA.sections.education, ...plCopy.sections.education },
      skills: { ...DATA.sections.skills, ...plCopy.sections.skills },
      projects: { ...DATA.sections.projects, ...plCopy.sections.projects },
      hackathons: { ...DATA.sections.hackathons, ...plCopy.sections.hackathons },
      photos: { ...DATA.sections.photos, ...plCopy.sections.photos },
      contact: { ...DATA.sections.contact, ...plCopy.sections.contact },
    },
    navbar,
    contact: DATA.contact,
    work: DATA.work.map((item, i) => {
      const pl = plCopy.work[i];
      return {
        ...item,
        ...(pl ?? {}),
        badges: pl?.badges ? [...pl.badges] : [...item.badges],
        title: pl?.title ?? item.title,
        location: pl?.location ?? item.location,
        start: pl?.start ?? item.start,
        end: pl && "end" in pl ? pl.end : item.end,
        description: pl?.description ?? item.description,
      };
    }),
    education: DATA.education.map((item, i) => {
      const pl = plCopy.education[i];
      if (!pl) return item;
      return {
        ...item,
        school: pl.school ?? item.school,
        degree: pl.degree ? [...pl.degree] : [...item.degree],
        major: pl.major ?? item.major,
      };
    }),
    projects: DATA.projects.map((item, i) => {
      const pl = plCopy.projects[i];
      if (!pl) return item;
      return {
        ...item,
        ...("title" in pl && pl.title ? { title: pl.title } : {}),
        dates: pl.dates,
        description: pl.description,
        links: item.links.map((link, j) => ({
          ...link,
          type: pl.links[j]?.type ?? link.type,
        })),
      };
    }),
    hackathons: DATA.hackathons.map((item, i) => {
      const pl = plCopy.hackathons[i] as
        | {
            dates: string;
            location: string;
            description: string;
            win?: string;
            links?: readonly { title: string }[];
          }
        | undefined;
      if (!pl) return item;
      return {
        ...item,
        dates: pl.dates,
        location: pl.location,
        description: pl.description,
        ...(pl.win ? { win: pl.win } : {}),
        links: item.links.map((link, j) => ({
          ...link,
          title: pl.links?.[j]?.title ?? ("title" in link ? link.title : ""),
        })),
      };
    }),
  } as unknown as ResumeData;
}
