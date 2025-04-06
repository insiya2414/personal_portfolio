import { motion } from "framer-motion";
import { ACTIVITIES } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import { Award, Check } from "lucide-react";
import {  ACTIVITY_HIGHLIGHTS } from "@/lib/constants";


const Activities = () => {
  return (
    <section id="activities" className="section bg-gray-50 dark:text-gray-500">
      <div className="container-custom">
        <SectionTitle 
          title="Activities & Achievements" 
          subtitle="My involvement in clubs, hackathons, and other activities"
        />

        <div className="bg-white w-full rounded-lg shadow-md p-6 md:p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Extracurricular Involvement</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  {ACTIVITIES.map((activity, index) => (
    <motion.a
      href={activity.link}
      target="_blank"
      rel="noopener noreferrer"
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-200"
    >
      <img 
        src={activity.image} 
        alt={activity.title} 
        className="w-full h-40 object-contain bg-gray-100"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 group-hover:text-primary mb-2">
          {activity.title}
        </h4>
        <p className="text-sm text-muted-foreground">{activity.description}</p>
      </div>
    </motion.a>
  ))}
</div>

{/* Now your bullet points are below the grid, full width */}
<div className="space-y-4 w-full">
  {ACTIVITY_HIGHLIGHTS.map((highlight, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex"
    >
      <div className="mr-3 mt-1 flex-shrink-0">
        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
          <Check className="h-3 w-3 text-primary" />
        </div>
      </div>
      <p className="text-muted-foreground">{highlight}</p>
    </motion.div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default Activities;
