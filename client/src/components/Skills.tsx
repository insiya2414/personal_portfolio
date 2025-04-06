import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import SkillItem from "./SkillItem";
import { Code, Database, BookOpen, Server, Award } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="section dark:text-gray-700">
      <div className="container-custom">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="My technical skills and areas of expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillItem 
            icon={<Code className="w-5 h-5 text-primary" />}
            title="Programming Languages"
            items={SKILLS.languages}
          />
          
          <SkillItem 
            icon={<Database className="w-5 h-5 text-primary" />}
            title="Data Analysis & Visualization"
            items={SKILLS.dataAnalysis}
          />
          
          <SkillItem 
            icon={<BookOpen className="w-5 h-5 text-primary" />}
            title="Machine Learning & AI"
            items={SKILLS.machinelearning}
          />
          
          <SkillItem 
            icon={<Server className="w-5 h-5 text-primary" />}
            title="Platforms & Engineering"
            items={SKILLS.platforms}
          />
          
          <SkillItem 
            icon={<Award className="w-5 h-5 text-primary" />}
            title="Certifications"
            items={SKILLS.certifications}
          />

          {/* Skills graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold mb-6">Core Competencies</h3>
            
            <div className="space-y-4">
              {[
                { name: "Data Science & Analytics", percentage: 75 },
                { name: "Machine Learning", percentage: 60 },
                { name: "Cloud Computing (Azure, AWS)", percentage: 50 },
                { name: "Software Development", percentage: 75 },
                { name: "Database Management", percentage: 55 }
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="bg-primary h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
