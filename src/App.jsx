

import { ThemeProvider } from "./components/Themecontext.jsx";
import Navbar   from "./components/Navbar.jsx";
import Hero     from "./sections/Hero.jsx";
import About    from "./sections/About.jsx";
import Skills   from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Services from "./sections/Services.jsx";
import Contact  from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <ThemeProvider>
      
      <div className="min-h-screen  overflow-x-hidden bg-white dark:bg-[#06091a] text-slate-900 dark:text-white transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;