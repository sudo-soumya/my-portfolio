import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cloud, 
  Container, 
  Terminal, 
  GitBranch, 
  Database,
  Activity,
  Shield,
  Server,
  Workflow,
  Boxes,
  Code2,
  Network
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: { name: string; icon: React.ElementType }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
      { name: "Oracle Cloud", icon: Cloud },
      { name: "Kubernetes", icon: Boxes },
      { name: "Docker", icon: Container },
      { name: "Terraform", icon: Server },
      { name: "Nginx", icon: Network },
    ],
  },
  {
    title: "CI/CD & Automation",
    skills: [
      { name: "GitHub Actions", icon: Workflow },
      { name: "Jenkins", icon: Workflow },
      { name: "Bash", icon: Terminal },
      { name: "Python", icon: Code2 },
    ],
  },
  {
    title: "Monitoring & Logging",
    skills: [
      { name: "Prometheus", icon: Activity },
      { name: "Grafana", icon: Activity },
      { name: "OpenSearch", icon: Activity },
      { name: "Fluentd", icon: Activity },
      { name: "Fluent Bit", icon: Activity },
      { name: "Uptime Kuma", icon: Activity },
    ],
  },
  {
    title: "Data & Workflow",
    skills: [
      { name: "Apache NiFi", icon: Workflow },
      { name: "Apache Airflow", icon: Workflow },
      { name: "Superset", icon: Activity },
      { name: "Appsmith", icon: Code2 },
      { name: "PHPMyAdmin", icon: Database },
    ],
  },
  {
    title: "Security & Networking",
    skills: [
      { name: "Istio", icon: Shield },
      { name: "Envoy", icon: Shield },
      { name: "Suricata", icon: Shield },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Version Control & OS",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Linux", icon: Terminal },
    ],
  },
];

const SkillBadge = ({ 
  skill, 
  index, 
  isInView 
}: { 
  skill: { name: string; icon: React.ElementType }; 
  index: number; 
  isInView: boolean;
}) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="glass rounded-lg px-4 py-3 flex items-center gap-3 cursor-default transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]"
    >
      <Icon className="w-5 h-5 text-primary" />
      <span className="text-foreground text-sm font-medium">{skill.name}</span>
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Tools and technologies I use to build reliable infrastructure
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="max-w-5xl mx-auto space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
