import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Terminal, 
  Container, 
  GitBranch, 
  Cloud, 
  Workflow, 
  Code2,
  Server,
  Boxes
} from "lucide-react";

type Proficiency = "Beginner" | "Intermediate" | "Advanced";

interface Skill {
  name: string;
  icon: React.ElementType;
  proficiency: Proficiency;
}

const skills: Skill[] = [
  { name: "Linux", icon: Terminal, proficiency: "Advanced" },
  { name: "Docker", icon: Container, proficiency: "Advanced" },
  { name: "Kubernetes", icon: Boxes, proficiency: "Intermediate" },
  { name: "Git", icon: GitBranch, proficiency: "Advanced" },
  { name: "CI/CD", icon: Workflow, proficiency: "Advanced" },
  { name: "AWS", icon: Cloud, proficiency: "Intermediate" },
  { name: "Terraform", icon: Server, proficiency: "Intermediate" },
  { name: "Bash", icon: Terminal, proficiency: "Advanced" },
  { name: "Python", icon: Code2, proficiency: "Intermediate" },
];

const proficiencyColors: Record<Proficiency, string> = {
  Beginner: "text-yellow-400",
  Intermediate: "text-neon-blue",
  Advanced: "text-primary",
};

const SkillCard = ({ skill, index, isInView }: { skill: Skill; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        className="glass rounded-xl p-6 flex flex-col items-center gap-4 cursor-default transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] min-h-[140px]"
      >
        <div className="relative">
          <Icon className="w-10 h-10 text-primary transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
        </div>
        
        <span className="font-medium text-foreground text-center">{skill.name}</span>
        
        {/* Proficiency label on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 10 
          }}
          transition={{ duration: 0.2 }}
          className={`absolute bottom-4 ${proficiencyColors[skill.proficiency]} font-display text-sm font-semibold`}
        >
          {skill.proficiency}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard 
              key={skill.name} 
              skill={skill} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
