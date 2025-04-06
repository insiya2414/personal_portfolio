import { EXPERIENCE } from "@/lib/constants";
import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="section dark:text-gray-500">
      <div className="container-custom">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional experience and work history"
        />

        <div className="md:w-4/5 mx-auto">
          {EXPERIENCE.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
