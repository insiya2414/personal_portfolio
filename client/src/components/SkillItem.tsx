import { motion } from "framer-motion";
import { SkillItemProps } from "@/lib/types";

const SkillItem = ({ icon, title, items }: SkillItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillItem;
