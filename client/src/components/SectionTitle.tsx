import { motion } from "framer-motion";
import { SectionTitleProps } from "@/lib/types";

const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 text-center ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-primary rounded-full mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionTitle;
