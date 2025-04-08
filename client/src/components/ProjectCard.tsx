import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string[];
    tech: string[];
    link?: string;
    links?: { name: string; url: string }[];
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-100 rounded-lg shadow-md p-6 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-500">{project.title}</h3>
        <ul className="list-disc pl-5 text-sm text-muted-foreground mb-4 space-y-1">
          {project.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Link Section */}
{project.link && (
  <div className="border-t border-gray-100 mt-auto pt-4 flex justify-end">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-sm text-primary font-medium hover:text-primary/80 transition"
    >
      View Project
      <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  </div>
)}

{project.links && project.links.length > 0 && (
  <div className="border-t border-gray-100 mt-4 pt-4 flex flex-wrap gap-x-6 gap-y-2">
    {project.links.map((linkObj, idx) => (
      <a
        key={idx}
        href={linkObj.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/3 inline-flex items-center text-sm text-primary font-medium hover:text-primary/80 transition whitespace-nowrap"
      >
        {linkObj.name}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    ))}
  </div>
)}


    </motion.div>
  );
};

export default ProjectCard;