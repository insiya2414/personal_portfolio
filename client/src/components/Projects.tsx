import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  // Get unique technologies from all projects
  const allTechnologies = PROJECTS.reduce<string[]>((acc, project) => {
    project.tech.forEach(tech => {
      if (!acc.includes(tech)) acc.push(tech);
    });
    return acc;
  }, []);
  
  // Filter projects based on selected filter
  const filteredProjects = filter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.tech.includes(filter));

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="My Projects" 
          subtitle="Showcasing some of my recent work and projects"
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            All
          </Button>
          
          {allTechnologies.slice(0, 6).map((tech, index) => (
            <Button
              key={index}
              variant={filter === tech ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tech)}
              className="rounded-full"
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No projects match the selected filter.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
