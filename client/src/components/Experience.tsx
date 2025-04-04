import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Research Analyst",
      company: "Center for Analytics and Data Science",
      location: "San Marcos, TX",
      period: "May 2024 - Dec 2024",
      description: [
        "Examined national CMS datasets with nearly 1M+ records to identify health disparities, aimed at reducing care costs.",
        "Assisted PhD students in publishing 3+ research papers by conducting exploratory data analysis (EDA) using Python, R, and Power BI, uncovering patterns in patient care, provider performance, and cost-effectiveness to support data-driven healthcare policy decisions."
      ]
    },
    {
      title: "Student Assistant",
      company: "Ingram School of Engineering (AIT Lab)",
      location: "San Marcos, TX",
      period: "Nov 2023 - May 2024",
      description: [
        "Conducted literature reviews for PhD students using Zotero, categorizing sources, and ensuring accurate citation management for academic publications.",
        "Gathered and interpreted transportation data using ArcGIS Pro, mapping road networks and measuring infrastructure lengths to support data-driven insights for transportation research projects."
      ]
    },
    {
      title: "STEM Tutoring Team",
      company: "Student Support Services",
      location: "San Marcos, TX",
      period: "Aug 2023 - Dec 2023",
      description: [
        "Empowered over 50 students with personalized study tips, achieving an average two-letter grade improvement.",
        "Spearheaded a student referral initiative, strategically matching 20+ students with tailored academic support, resulting in a significant boost in overall academic achievements across multiple subjects."
      ]
    }
  ];

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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-gray-600">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12 relative"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col md:grid md:grid-cols-2 gap-8 relative"
              >
                <div className={`flex justify-${index % 2 === 0 ? 'end' : 'start'} md:col-span-1`}>
                  <Card className={`w-full max-w-lg transition-all duration-300 hover:shadow-md ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Briefcase className="h-4 w-4" />
                        <CardTitle className="text-lg">{experience.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-700 font-medium">
                        {experience.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-10 hidden md:block"></div>

                {/* Only needed for the layout in the timeline */}
                <div className="hidden md:block"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
