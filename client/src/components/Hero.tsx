import { motion } from "framer-motion";
import { ArrowRight, GitPullRequest, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="pt-28 lg:pt-36 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="order-2 lg:order-1">
            <motion.h2
              className="text-2xl text-primary font-medium mb-2"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins leading-tight mb-4"
              variants={itemVariants}
            >
              Insiya Raja
            </motion.h1>
            <motion.div
              className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-block mb-6"
              variants={itemVariants}
            >
              Computer Science Student
            </motion.div>
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-lg"
              variants={itemVariants}
            >
              Passionate about Data Science, Machine Learning, and Software Development. 
              Currently pursuing a B.S. in Computer Science at Texas State University.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-4 mt-8"
              variants={itemVariants}
            >
              <a
                href="https://github.com/insiya2414"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <GitPullRequest className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/insiya-raja24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-70"></div>
              <div className="relative h-full w-full bg-gradient-to-br from-primary/80 to-blue-400/80 rounded-full overflow-hidden flex items-center justify-center">
                <div className="text-white text-4xl font-poppins font-bold">IR</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
