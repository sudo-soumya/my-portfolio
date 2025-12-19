import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  contributions: string[];
}

const experiences: Experience[] = [
  {
    company: "Nuclei",
    role: "Associate System Engineer (DevOps)",
    duration: "Feb 2024 – Present",
    description: "End-to-end ownership of cloud infrastructure and DevOps practices for enterprise-grade applications.",
    contributions: [
      "Built AWS infrastructure from scratch including VPCs, EC2, EKS, RDS, S3, and IAM policies",
      "Set up and managed Oracle Cloud Infrastructure for multi-cloud deployments",
      "Deployed and scaled Kubernetes clusters for containerized applications",
      "Migrated CI/CD pipelines from Jenkins to GitHub Actions, improving deployment efficiency",
      "Implemented comprehensive monitoring and logging using Prometheus, Grafana, OpenSearch, and Fluentd",
      "Managed database operations including backup, replication, and restoration for MySQL and PostgreSQL",
      "Configured service mesh with Istio and Envoy for traffic management and security",
      "Set up and maintained Nginx as reverse proxy and load balancer",
      "Implemented network security using Suricata for intrusion detection",
      "Took ownership beyond role expectations, proactively improving system reliability",
    ],
  },
];

const ExperienceCard = ({ 
  experience, 
  index, 
  isInView 
}: { 
  experience: Experience; 
  index: number; 
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      className="relative flex items-start gap-6"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(0,255,255,0.6)] z-10" />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="flex-1 glass rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-primary">{experience.role}</h3>
            <div className="flex items-center gap-2 text-foreground/80 mt-1">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4" />
            <span>{experience.duration}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">{experience.description}</p>

        <ul className="space-y-3">
          {experience.contributions.map((contribution, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
              className="flex items-start gap-3 text-foreground/80 text-sm"
            >
              <span className="text-primary mt-1 flex-shrink-0">▹</span>
              <span>{contribution}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 relative bg-card/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My professional journey in DevOps and Cloud Engineering
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company + experience.role}
              experience={experience}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
