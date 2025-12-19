import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Server, Shield, Activity } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Designing scalable AWS & Oracle Cloud solutions",
  },
  {
    icon: Server,
    title: "Automation",
    description: "CI/CD pipelines and Infrastructure as Code",
  },
  {
    icon: Activity,
    title: "Observability",
    description: "Monitoring, logging, and alerting systems",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Service mesh, networking, and security tools",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
              DevOps Engineer with 2+ Years of Experience
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a DevOps Engineer passionate about building and maintaining robust 
              cloud infrastructure. My expertise lies in automating deployments, 
              implementing monitoring solutions, and ensuring system reliability 
              across multi-cloud environments.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From setting up Kubernetes clusters to designing CI/CD pipelines, I 
              focus on creating efficient, secure, and scalable infrastructure. I 
              believe in taking ownership beyond role expectations and continuously 
              improving system performance and reliability.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-6 card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
