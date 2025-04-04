import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ProjectCardProps } from "@/lib/types";

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
        
        <div className="space-y-2 mb-4">
          {project.description.map((desc, i) => (
            <p key={i} className="text-muted-foreground text-sm">{desc}</p>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex justify-end">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 flex items-center text-sm"
        >
          {project.link.includes("github") ? (
            <Github className="h-4 w-4 mr-2" />
          ) : (
            <ExternalLink className="h-4 w-4 mr-2" />
          )}
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
