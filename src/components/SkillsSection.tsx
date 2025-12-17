import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95, color: "from-primary to-neon-blue" },
  { name: "TypeScript", level: 90, color: "from-neon-blue to-primary" },
  { name: "Node.js / Express", level: 85, color: "from-primary to-accent" },
  { name: "Python / Django", level: 80, color: "from-accent to-neon-purple" },
  { name: "PostgreSQL / MongoDB", level: 85, color: "from-neon-purple to-primary" },
  { name: "AWS / Docker", level: 75, color: "from-primary to-neon-blue" },
  { name: "Tailwind CSS", level: 95, color: "from-neon-blue to-accent" },
  { name: "Git / CI/CD", level: 90, color: "from-accent to-primary" },
];

const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "📦" },
];

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

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 cursor-default"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bars */}
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-primary font-display">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} skill-bar`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
