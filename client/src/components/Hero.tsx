import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Mail, MapPin, Terminal, Code, Database, Braces } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden crt-effect"
    >
      {/* Creative artistic background with flowing shapes and gradients */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 dark:from-primary/30 dark:to-cyan-500/30 blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-600/20 to-pink-500/20 dark:from-indigo-600/30 dark:to-pink-500/30 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-teal-400/20 to-primary/20 dark:from-teal-400/30 dark:to-primary/30 blur-3xl"></div>
        
        {/* Decorative shapes */}
        <svg className="absolute top-20 right-1/4 opacity-20 dark:opacity-30 text-primary" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
        </svg>
        
        <svg className="absolute bottom-24 left-1/4 opacity-20 dark:opacity-30 text-cyan-500" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <polygon points="12 2 19 21 12 17 5 21 12 2" />
        </svg>
      </div>
      
      {/* Floating tech elements with improved animations */}
      <div className="absolute inset-0 -z-5 opacity-30 dark:opacity-40 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-10"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Terminal size={48} className="text-primary drop-shadow-md" />
        </motion.div>
        <motion.div 
          className="absolute top-2/3 right-10"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database size={40} className="text-pink-500 drop-shadow-md" />
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4"
          animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code size={36} className="text-cyan-500 drop-shadow-md" />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/4"
          animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Braces size={32} className="text-teal-500 drop-shadow-md" />
        </motion.div>
      </div>

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-3/5 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
              <span className="absolute -top-6 left-0 md:left-4 text-base text-primary/80 font-mono tracking-wider">&lt;developer&gt;</span>
              <span>Hi, I'm{" "}</span>
              <span className="gradient-tech glitch-effect text-glow" data-text="Insiya Raja">Insiya Raja</span>
              <span className="absolute -bottom-6 right-0 md:right-4 text-base text-primary/80 font-mono tracking-wider">&lt;/developer&gt;</span>
            </h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium mb-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="matrix-code neo-brutalism p-1 text-cyan-700 dark:text-cyan-400 bg-slate-100/80 dark:bg-slate-800/80">Computer Science Student</span>
              <span className="mx-2">&</span>
              <span className="typing-effect text-primary font-semibold inline-block">Data Scientist</span>
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto md:mx-0 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="absolute -left-4 top-0 text-primary text-3xl opacity-20">{"{{"}</span>
              Passionate about leveraging <span className="font-medium text-primary">data science</span> and <span className="font-medium text-indigo-500">AI</span> to solve complex problems.
              Seeking to apply my skills in <span className="font-medium text-blue-500">cloud computing</span>, <span className="font-medium text-purple-500">machine learning</span>, and <span className="font-medium text-green-500">data analysis</span> to drive innovation and insights.
              <span className="absolute -right-4 bottom-0 text-primary text-3xl opacity-20">{"}}"}</span>
            </motion.p>

            {/* Contact information */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`https://${PERSONAL_INFO.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-outline">
                View My Projects
              </a>
            </div>
          </motion.div>

          {/* Image illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 -z-10">
                <path
                  fill="#4F56E5"
                  d="M45.9,-60.8C58.5,-51.3,67.3,-37,70.2,-22.1C73,-7.1,69.8,8.4,63.8,22.3C57.8,36.2,49,48.4,37,56.8C25.1,65.1,10,69.6,-4.3,74.7C-18.6,79.8,-32.1,85.6,-46.4,80.9C-60.7,76.3,-75.7,61.2,-81.4,44.3C-87.1,27.3,-83.4,8.4,-78.6,-8.9C-73.7,-26.2,-67.7,-41.8,-56.4,-52.1C-45.1,-62.4,-28.6,-67.3,-13,-64.5C2.7,-61.7,33.3,-70.3,45.9,-60.8Z"
                  transform="translate(100 100)"
                />
              </svg>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                {/* Tech-themed profile avatar */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-indigo-700 dark:from-cyan-500 dark:to-blue-800 flex items-center justify-center text-white dark:text-cyan-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full absolute opacity-20">
                      {/* Binary code background pattern */}
                      <div className="absolute text-[10px] font-mono text-white/70 top-1/4 left-1/4">01001001 01010010</div>
                      <div className="absolute text-[10px] font-mono text-white/70 bottom-1/4 right-1/4">10101010</div>
                      <div className="absolute text-[10px] font-mono text-white/70 bottom-1/3 left-1/3">01001001</div>
                    </div>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 opacity-30 dark:opacity-60 animate-spin-slow rounded-full" 
                      style={{ 
                        border: '4px dashed rgba(255,255,255,0.5)', 
                        animationDuration: '20s'
                      }}>
                    </div>
                  </div>
                  
                  <span className="text-6xl font-bold relative z-10">IR</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.3
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <motion.div
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
