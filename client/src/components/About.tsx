import { motion } from "framer-motion";
import { Medal, GraduationCap, Award } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-gray-600">
            Computer Science student with a passion for data science, machine learning, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Texas State University, San Marcos
                </CardTitle>
                <CardDescription>Expected Graduation: May 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-gray-600 mt-1">GPA: 3.89/4.0</p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Awards & Honors:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>TXST Distinguished Scholarship (four-year, top 25% incoming freshman)</li>
                    <li>Consistently featured on the Dean's List</li>
                    <li>Alpha Lambda Delta Honors Society (top 20%)</li>
                    <li>Computer Science Academic Excellence</li>
                    <li>Michael Austin Moore Endowed Awards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Achievements</h3>
            <Card className="bg-white border-l-4 border-l-primary transition hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Medal className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Impressive Academic Standing</h4>
                    <p className="text-gray-600 mt-1">
                      Maintaining a 3.89 GPA while actively participating in extracurricular activities and research.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-primary transition hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Hackathon Victories</h4>
                    <p className="text-gray-600 mt-1">
                      Won Best Product at Boko Hacks, 1st Prize in Chevron Track at Rice Datathon, and 1st Prize (Undergrad) at TXST 2025 Datathon.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-l-4 border-l-primary transition hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Award className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Microsoft Certified Professional</h4>
                    <p className="text-gray-600 mt-1">
                      Azure Data Scientist Associate and Azure Fundamentals certifications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
