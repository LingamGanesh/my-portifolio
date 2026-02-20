/*
  File: src/App.jsx

  FIXES APPLIED:
  1. ThemeProvider import uses "Themecontext.jsx" (lowercase c) — must match filename
  2. All section imports use correct paths
  3. Single ThemeProvider — NEVER add another in main.jsx
*/

import { ThemeProvider } from "./components/Themecontext.jsx";
import Navbar   from "./components/Navbar.jsx";
import Hero     from "./sections/Hero.jsx";
import About    from "./sections/About.jsx";
import Skills   from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Services from "./sections/Services.jsx";
import Contact  from "./sections/Contact.jsx";


function App() {
  return (
    <ThemeProvider>
      {/*
        This div is the full-page background.
        bg-white in light mode → dark:bg-[#06091a] in dark mode.
        ALL sections must use Tailwind dark: classes, not inline style backgrounds.
      */}
      <div className="min-h-screen bg-white dark:bg-[#06091a] text-slate-900 dark:text-white transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;