import { motion } from "framer-motion";
import { Users, Award, Code, GraduationCap } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

export default function Activities() {
  const activities = [
    {
      title: "Professional Organization Member",
      icon: <Users className="h-8 w-8 text-primary" />,
      items: [
        "Active member of Society of Women Engineers (SWE)",
        "Association for Computing Machinery (ACM) member",
        "Computer Science Club (.EXE) participant",
        "Stay updated on AI and industry trends"
      ]
    },
    {
      title: "Hackathon Achievements",
      icon: <Award className="h-8 w-8 text-primary" />,
      items: [
        "Best Product at Boko Hacks",
        "1st Prize in Chevron Track at Rice Datathon (2024 vehicle prediction)",
        "1st Prize (Undergrad) at TXST 2025 Datathon",
        "Participated in multiple additional hackathons"
      ]
    },
    {
      title: "Mentorship & Diversity",
      icon: <Code className="h-8 w-8 text-primary" />,
      items: [
        "Mentored 10+ aspiring female coders through Girls Who Code",
        "Supported diversity initiatives with AI4ALL",
        "Encouraged STEM interest in underrepresented communities",
        "Provided technical guidance to new computer science students"
      ]
    },
    {
      title: "Conference Participation",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      items: [
        "Represented Texas State at ALD National Conference 2023 (collaborative research)",
        "Attended SWE Conference Chicago 2024",
        "Participated in tech meetups and industry panels",
        "Engaged in professional development workshops"
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
    <section id="activities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins mb-4">
            <span className="text-primary">Activities</span> & Leadership
          </h2>
          <p className="text-xl text-gray-600">
            Extracurricular involvements and community contributions
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-md bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {activity.icon}
                    </div>
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {activity.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
