import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="section bg-gray-50">
      <div className="text-3xl md:text-4xl gradient-text leading-tight pb-2">
        <SectionTitle 
          title="My Projects" 
          subtitle="Showcasing some of my recent work and projects"
        />

        {/* Project grid without filters */}
        <AnimatePresence mode="wait">
          <motion.div
            key="all-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

