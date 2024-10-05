import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Puly G",
  DESCRIPTION: "Welcome to my portfolio.",
  AUTHOR: "Puly G",
}


// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "pulygarcia09@gmail.com",
    HREF: "mailto:pulygarcia09@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "pulygarcia",
    HREF: "https://github.com/pulygarcia"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "jose-ignacio-robledo",
    HREF: "https://www.linkedin.com/in/jose-ignacio-robledo/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "pulygarciadev",
    HREF: "https://twitter.com/pulygarcia",
  },
]

