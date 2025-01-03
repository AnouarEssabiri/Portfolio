"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A creative developer portfolio showcasing my work and skills, built with modern web technologies.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/portfolio.png',
    liveUrl: 'https://yoursite.com',
    githubUrl: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory and payment processing.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/projects/ecommerce.png',
    liveUrl: 'https://demo-store.com'
  },
  // Add more projects as needed
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-navy-900 to-navy-950">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-cream-200/80 max-w-2xl mx-auto">
            A collection of my recent work showcasing my expertise in web development
            and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={cn(
                "group relative",
                "bg-navy-800/50 backdrop-blur-sm",
                "rounded-xl overflow-hidden",
                "border border-cream-100/10",
                "hover:border-cream-100/20",
                "transition-all duration-500"
              )}
            >
              <div className="p-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-golden-500 to-crimson-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-cream-200/70 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-navy-700/50 text-cream-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "px-4 py-2",
                        "text-sm font-medium",
                        "rounded-full",
                        "bg-golden-500/10 text-golden-500",
                        "hover:bg-golden-500/20",
                        "transition-all duration-300"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Live
                    </motion.a>
                  )}
                  
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "px-4 py-2",
                        "text-sm font-medium",
                        "rounded-full",
                        "bg-cream-100/10 text-cream-100",
                        "hover:bg-cream-100/20",
                        "transition-all duration-300"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;