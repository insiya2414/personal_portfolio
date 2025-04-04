import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Mail, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 -right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 -left-10 w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Insiya Raja</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              Computer Science Student & Data Scientist
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto md:mx-0">
              Passionate about leveraging data science and AI to solve complex problems.
              Seeking to apply my skills in cloud computing, machine learning, and data analysis
              to drive innovation and insights.
            </p>

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
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                {/* Replace with actual profile photo if available */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-indigo-700 flex items-center justify-center text-white text-6xl font-bold">
                  IR
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
