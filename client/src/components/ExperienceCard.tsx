import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { ExperienceCardProps } from "@/lib/types";

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline bar and circle */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200">
        <div className="absolute top-7 -left-1.5 w-3 h-3 rounded-full bg-primary"></div>
      </div>
      
      {/* Experience card */}
      <div className="md:pl-8 pb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">{experience.title}</h3>
          <h4 className="text-primary font-medium">{experience.company}</h4>
          
          <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {experience.location}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {experience.date}
            </div>
          </div>
          
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
            {experience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
