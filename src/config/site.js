// Personal and studio details used across the site. Change them here only.
export const SITE = {
  name: "Steven Gabriel",
  fullName: "Gabriel Steven Oluwapelumi",
  role: "Software Engineer & Founder",
  location: "Ikeja, Lagos, Nigeria",
  url: "https://gabsteven.com",
  email: "stevengabriel2015@gmail.com",
  cv: "/Gabriel_Steven_CV.pdf",
};

export const SOCIALS = [
  { label: "GitHub", handle: "bluemagikSGO", href: "https://github.com/bluemagikSGO" },
  {
    label: "LinkedIn",
    handle: "steven-gabriel",
    href: "https://www.linkedin.com/in/steven-gabriel-059345371/",
  },
  { label: "X", handle: "@bluemagikSGO", href: "https://x.com/bluemagikSGO" },
];

export const STUDIO = {
  name: "Iteminder",
  legalName: "Iteminder LTD",
  url: "https://iteminder.com",
  email: "support@iteminder.com",
};

export const studioMailto = (subject) =>
  `mailto:${STUDIO.email}?subject=${encodeURIComponent(subject)}`;

// Home page anchors. Rendered as /#id so they also work from inner pages.
export const NAV = [
  { id: "work", label: "Work" },
  { id: "studio", label: "Studio" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
