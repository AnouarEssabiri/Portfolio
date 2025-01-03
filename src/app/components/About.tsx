"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "Frontend Development", level: 90, color: "bg-blue-500" },
  { name: "Backend Development", level: 85, color: "bg-green-500" },
  { name: "UI/UX Design", level: 80, color: "bg-purple-500" },
  { name: "Database Management", level: 85, color: "bg-yellow-500" },
  { name: "DevOps", level: 75, color: "bg-red-500" },
  { name: "Mobile Development", level: 80, color: "bg-indigo-500" },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies and a keen eye for design.
            I create responsive, user-friendly applications with clean, efficient code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className={cn(
                "bg-gray-800/50 backdrop-blur-sm",
                "p-6 rounded-xl",
                "border border-gray-700",
                "hover:border-gray-600 transition-all duration-300",
                "group"
              )}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={cn("h-full rounded-full", skill.color)}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.button
            className={cn(
              "px-8 py-3",
              "bg-blue-500 hover:bg-blue-600",
              "text-white font-medium",
              "rounded-full",
              "transition-all duration-300",
              "transform hover:-translate-y-1"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;