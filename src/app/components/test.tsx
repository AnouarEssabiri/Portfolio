"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { HomeIcon, UserIcon, FolderIcon, StarIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import CustomCursor from "@/components/ui/custom-cursor";
import { motion } from "framer-motion";


export default function Navbar() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };
  return (
    <>
      <CustomCursor />
      <motion.div 
        className="fixed top-4 left-1/2 rounded-full -translate-x-1/2 z-40"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Dock iconSize={50} iconMagnification={70} iconDistance={100} className="rounded-full bg-white/10 dark:bg-black/10 border-none px-4">
        <motion.div variants={item}>
          <DockIcon>
            <a href="#hero" className="p-2 cursor-none group relative">
              <HomeIcon className="w-6 h-6 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-medium bg-white/10 dark:bg-black/10 px-2 py-1 rounded-full whitespace-nowrap">
                Home
              </span>
            </a>
          </DockIcon>
          </motion.div>
          
          <motion.div variants={item}>
          <DockIcon>
            <a href="#about" className="p-2 cursor-none group relative">
              <UserIcon className="w-6 h-6 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-medium bg-white/10 dark:bg-black/10 px-2 py-1 rounded-full whitespace-nowrap">
                About
              </span>
            </a>
          </DockIcon>
          </motion.div>
          
          <motion.div variants={item}>
          <DockIcon>
            <a href="#projects" className="p-2 cursor-none group relative">
              <FolderIcon className="w-6 h-6 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-medium bg-white/10 dark:bg-black/10 px-2 py-1 rounded-full whitespace-nowrap">
                Projects
              </span>
            </a>
          </DockIcon>
          </motion.div>
          
          <motion.div variants={item}>
          <DockIcon>
            <a href="#skills" className="p-2 cursor-none group relative">
              <StarIcon className="w-6 h-6 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-medium bg-white/10 dark:bg-black/10 px-2 py-1 rounded-full whitespace-nowrap">
                Skills
              </span>
            </a>
          </DockIcon>
          </motion.div>
          <motion.div variants={item}>
          <DockIcon>
            <a href="#contact" className="p-2 cursor-none group relative">
              <EnvelopeIcon className="w-6 h-6 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-110" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-medium bg-white/10 dark:bg-black/10 px-2 py-1 rounded-full whitespace-nowrap">
                Contact
              </span>
            </a>
          </DockIcon>
          </motion.div>
        </Dock>
      </motion.div>
    </>
  );
}