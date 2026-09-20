import { existsSync } from "node:fs";
import path from "node:path";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

// Drop a PDF at public/documents/ and the CV download handles show up.
const CV_FILE = "documents/Andres_Gacharna_CV.pdf";
const cvHref = existsSync(path.join(process.cwd(), "public", CV_FILE))
  ? `/${CV_FILE}`
  : undefined;

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero cvHref={cvHref} />
        <Projects />
        <Experience />
        <TechStack />
        <About />
        <Contact cvHref={cvHref} />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
