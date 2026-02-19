export const translations = {
  en: {
    intro: {
      title: "Hi, I'm Luca Bledea",
      description: "CSE student passionate about algorithms, optimization, and clean code. Welcome to my portfolio!"
    },
    projects: {
      heading: "Projects",
      description: "Check out any of my projects below:",
      showBtn: "Show Projects",
      hideBtn: "Hide Projects"
    },
    resume: {
      heading: "Resume",
      description: "Download my resume below:",
      button: "View Resume"
    },
    contact: {
      heading: "Contact Me",
      description: "Feel free to reach out via any of the platforms below:",
      showBtn: "Show Social Icons",
      hideBtn: "Hide Social Icons"
    },
    buttons: {
      toggleTheme: "Dark Mode",
      toggleThemeW: "Light Mode",
      toggleLanguage: "Toggle Language"
    }
  },
  ro: {
    intro: {
      title: "Bună, sunt Luca Bledea",
      description: "Student CSE pasionat de algoritmi, optimizare și cod curat. \nBine ai venit pe portofoliul meu!"
    },
    projects: {
      heading: "Proiecte",
      description: "Vezi oricare dintre proiectele mele mai jos:",
      showBtn: "Arată Proiecte",
      hideBtn: "Ascunde Proiecte"
    },
    resume: {
      heading: "CV",
      description: "Descarcă CV-ul meu mai jos:",
      button: "Vizualizează CV"
    },
    contact: {
      heading: "Contactează-mă",
      description: "Nu ezita să mă contactezi pe una dintre platformele de mai jos:",
      showBtn: "Arată Platformele de Contact",
      hideBtn: "Ascunde Platformele de Contact"
    },
    buttons: {
      toggleTheme: "Mod Întunecat",
      toggleThemeW: "Mod Luminos",
      toggleLanguage: "Schimbă Limba"
    }
  }
} as const;

export type Language = keyof typeof translations;
