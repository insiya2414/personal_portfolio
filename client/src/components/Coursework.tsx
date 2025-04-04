import { motion } from "framer-motion";
import { COURSEWORK } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";
import { BookOpen, Code, Calculator, Layers } from "lucide-react";

const Coursework = () => {
  // Define fun icons for each coursework category
  const getIcon = (id: number) => {
    switch (id) {
      case 1: return <Code className="h-8 w-8 text-primary" />;
      case 2: return <Layers className="h-8 w-8 text-indigo-500" />;
      case 3: return <Calculator className="h-8 w-8 text-purple-500" />;
      case 4: return <BookOpen className="h-8 w-8 text-blue-400" />;
      default: return <Code className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <section id="coursework" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm relative">
      {/* Artistic background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30 dark:opacity-40">
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-indigo-300/30 dark:bg-indigo-800/30 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-sky-300/30 dark:bg-sky-800/30 filter blur-3xl"></div>
        <div className="absolute -top-10 right-0 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full filter blur-3xl"></div>
        
        {/* Binary code background (subtle) */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none select-none">
          <div className="absolute top-0 left-0 text-xs font-mono text-primary/60 dark:text-primary/40 tracking-tight leading-none">
            {Array(30).fill(0).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {Array(100).fill(0).map((_, j) => (
                  <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Relevant Coursework" 
          subtitle="Academic foundation and specialized knowledge in computer science and data science"
          className="mb-12 text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {COURSEWORK.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/30 p-6 border border-slate-100 dark:border-slate-700/50 hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-600/70 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-5 space-x-3">
                  <div className="rounded-lg bg-primary/10 dark:bg-primary/20 p-3 transition-transform hover:rotate-6">
                    {getIcon(category.id)}
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                    {category.name}
                  </h3>
                </div>

                <ul className="space-y-3 list-none">
                  {category.courses.map((course, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className={cn(
                        "flex items-center pl-4 py-2 rounded-md relative",
                        "bg-gradient-to-r hover:from-slate-100/70 hover:to-transparent dark:hover:from-slate-700/40 dark:hover:to-transparent transition-colors",
                        "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[calc(100%-8px)] before:w-1 before:rounded-full",
                        idx % 2 === 0 ? "before:bg-primary" : "before:bg-indigo-500"
                      )}
                    >
                      <span>{course}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coursework;