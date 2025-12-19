import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/soumyaxm", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/soumya-mishra-73870a24a/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/soumya.mishra._/", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-display text-xl font-bold text-primary neon-text"
            whileHover={{ scale: 1.05 }}
          >
            {"<SM />"}
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Made with */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> by Soumya Mishra
          </p>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
