import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import { Award, Calendar, GraduationCap, School } from "lucide-react";
import txstLogo from "./txst-logo.jpeg";



const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn about my education and background"
        />

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-black">
              Aspiring Data Scientist & Software Engineer
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Computer Science student at Texas State University with a passion for data science, 
                machine learning, and AI. Throughout my academic journey, I've focused on developing strong 
                analytical skills and a deep understanding of data structures and algorithms.
              </p>
              <p>
                My experience spans from research analysis to software development, with a particular 
                interest in building scalable data pipelines and implementing machine learning models to 
                solve real-world problems.
              </p>
              <p>
                I'm continuously learning and expanding my technical skills to stay at the forefront of 
                technological innovation. I'm particularly interested in healthcare analytics, sustainable 
                technology, and AI for social good.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  {/* <GraduationCap className="h-7 w-7 text-primary" /> */}
                  <img
                src={txstLogo}
                alt="Texas State University Logo"
                className="w-full h-full object-cover rounded-full"
              />
              </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-black">{EDUCATION.school}</h3>
                  <p className="text-muted-foreground dark:text-gray-500">{EDUCATION.degree}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-500">{EDUCATION.graduationDate}</span>
                </div>
                <div className="flex items-center">
                  <School className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-500">GPA: {EDUCATION.gpa}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 flex items-center dark:text-gray-600">
                  <Award className="h-5 w-5 text-primary mr-2 dark:text-gray-500" /> 
                  Awards & Honors
                </h4>
                <ul className="space-y-2 pl-7 list-disc text-sm text-muted-foreground dark:text-gray-500">
                  {EDUCATION.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
