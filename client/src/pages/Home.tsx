import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Coursework from "@/components/Coursework";
import Experience from "@/components/Experience";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={homeRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Coursework />
        <Experience />
        <Activities />
        <Contact />
      </main>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container-custom text-center">
          <p>&copy; {new Date().getFullYear()} Insiya Raja. All Rights Reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
}
