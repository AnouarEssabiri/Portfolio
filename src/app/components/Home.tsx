'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface HeroProps {
  name: string;
  title: string;
}

const Hero = ({ name = "Anouar Essabiri", title = "Creative Developer" }: HeroProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: [
        '0% 0%',
        '100% 100%',
        '0% 100%',
        '100% 0%',
        '0% 0%'
      ],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div 
      className={cn(
        "relative min-h-screen w-full",
        "flex items-center justify-center",
        "overflow-hidden"
      )}
      initial="hidden"
      animate="visible"
      variants={backgroundVariants}
      style={{
        background: 'linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%)',
        backgroundSize: '400% 400%'
      }}
    >
      {/* Animated background circles */}
      <motion.div
        className={cn(
          "absolute",
          "w-[800px] h-[800px]",
          "rounded-full",
          "bg-white/10",
          "blur-3xl"
        )}
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        transition={{ type: "spring", damping: 15 }}
      />
      <motion.div
        className={cn(
          "absolute",
          "w-[600px] h-[600px]",
          "rounded-full",
          "bg-blue-500/20",
          "blur-3xl"
        )}
        animate={{
          x: mousePosition.x * -0.1,
          y: mousePosition.y * -0.1,
        }}
        transition={{ type: "spring", damping: 15 }}
      />

      {/* Main content */}
      <div className={cn(
        "relative z-10",
        "text-center",
        "px-4 md:px-6 lg:px-8"
      )}>
        <motion.div
          variants={textVariants}
          className="mb-4"
        >
          <motion.span 
            className={cn(
              "text-xl md:text-2xl",
              "font-light",
              "text-white/80"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I&apos;m
          </motion.span>
        </motion.div>

        <motion.h1
          variants={textVariants}
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl",
            "font-bold",
            "text-white",
            "mb-4",
            "relative"
          )}
          style={{ textShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        >
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={cn(
                "inline-block",
                "hover:text-blue-200",
                "hover:-translate-y-1",
                "transition-all duration-300"
              )}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          variants={textVariants}
          className="relative"
        >
          <motion.h2 
            className={cn(
              "text-2xl md:text-3xl",
              "font-medium",
              "text-white/90"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="relative">
              {title}
              <motion.span
                className={cn(
                  "absolute -bottom-2 left-0",
                  "w-full h-[2px]",
                  "bg-white/40"
                )}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.h2>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className={cn(
            "mt-8",
            "px-6 py-3 md:px-8 md:py-3",
            "bg-white/10 hover:bg-white/20",
            "text-white",
            "rounded-full",
            "font-medium",
            "backdrop-blur-sm",
            "border border-white/20",
            "transition-all duration-300",
            "hover:scale-105"
          )}
          {...{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1 },
            whileHover: { y: -5 },
            whileTap: { scale: 0.95 }
          } as HTMLMotionProps<"button">}
        >
          Get In Touch
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero;
