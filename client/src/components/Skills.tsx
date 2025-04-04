import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Brain, Server, Layout, Cpu } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type SkillCategory = "all" | "languages" | "data" | "ml" | "platforms" | "certs";

type Skill = {
  name: string;
  level: number; // 0-100
  category: SkillCategory[];
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const skills: Skill[] = [
    // Languages
    { name: "Python", level: 95, category: ["languages"] },
    { name: "SQL", level: 90, category: ["languages"] },
    { name: "Java", level: 85, category: ["languages"] },
    { name: "C++", level: 80, category: ["languages"] },
    { name: "R", level: 80, category: ["languages"] },
    { name: "JavaScript", level: 75, category: ["languages"] },
    { name: "HTML5", level: 85, category: ["languages"] },
    { name: "CSS3", level: 80, category: ["languages"] },
    
    // Data Analysis & Visualization
    { name: "Pandas", level: 95, category: ["data"] },
    { name: "NumPy", level: 90, category: ["data"] },
    { name: "Matplotlib", level: 85, category: ["data"] },
    { name: "Seaborn", level: 85, category: ["data"] },
    { name: "Power BI", level: 90, category: ["data"] },
    { name: "Tableau", level: 85, category: ["data"] },
    { name: "Excel", level: 80, category: ["data"] },
    { name: "Jupyter Notebook", level: 95, category: ["data"] },
    { name: "Google Colab", level: 90, category: ["data"] },
    
    // Machine Learning & AI
    { name: "TensorFlow", level: 85, category: ["ml"] },
    { name: "PyTorch", level: 80, category: ["ml"] },
    { name: "Scikit-learn", level: 90, category: ["ml"] },
    { name: "Keras", level: 85, category: ["ml"] },
    { name: "OpenCV", level: 75, category: ["ml"] },
    { name: "Hugging Face", level: 70, category: ["ml"] },
    
    // Platforms & Engineering
    { name: "Git/GitHub", level: 90, category: ["platforms"] },
    { name: "API Integration", level: 85, category: ["platforms"] },
    { name: "Cloud (Azure, AWS)", level: 80, category: ["platforms"] },
    { name: "Databricks", level: 75, category: ["platforms"] },
    { name: "Synapse Analytics", level: 70, category: ["platforms"] },
    { name: "MySQL Workbench", level: 85, category: ["platforms"] },
    { name: "ETL", level: 80, category: ["platforms"] },
    { name: "CI/CD", level: 75, category: ["platforms"] },
    { name: "Forecasting & Decision-Making", level: 80, category: ["platforms"] },
    
    // Certifications
    { name: "Microsoft Certified Azure Data Scientist Associate", level: 100, category: ["certs"] },
    { name: "AZ-900 Microsoft Azure Fundamentals", level: 100, category: ["certs"] },
    { name: "Python Programming Masterclass", level: 100, category: ["certs"] },
    { name: "CompTIA Network+ (In Progress)", level: 70, category: ["certs"] },
    { name: "AWS Certified Cloud Practitioner (In Progress)", level: 60, category: ["certs"] },
  ];

  const filteredSkills = skills.filter(
    skill => activeCategory === "all" || skill.category.includes(activeCategory)
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-gray-600">
            A comprehensive overview of my technical abilities and expertise
          </p>
        </motion.div>

        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as SkillCategory)}
          className="w-full mb-10"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="all" className="flex gap-2 items-center">
              <Cpu className="h-4 w-4" />
              <span className="hidden sm:inline">All Skills</span>
            </TabsTrigger>
            <TabsTrigger value="languages" className="flex gap-2 items-center">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Languages</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex gap-2 items-center">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Data Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="ml" className="flex gap-2 items-center">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">ML & AI</span>
            </TabsTrigger>
            <TabsTrigger value="platforms" className="flex gap-2 items-center">
              <Server className="h-4 w-4" />
              <span className="hidden sm:inline">Platforms</span>
            </TabsTrigger>
            <TabsTrigger value="certs" className="flex gap-2 items-center">
              <Layout className="h-4 w-4" />
              <span className="hidden sm:inline">Certifications</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeCategory}>
            <Card>
              <CardContent className="p-6">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="p-4 rounded-lg border"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant={skill.level >= 90 ? "default" : "secondary"}>
                          {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Intermediate" : "Learning"}
                        </Badge>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-100" />
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
