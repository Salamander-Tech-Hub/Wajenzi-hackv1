import React from 'react';
import { motion } from 'motion/react';

interface ThemeCardProps {
  children: React.ReactNode;
  className?: string;
  hoverElevation?: number;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ children, className = '', hoverElevation = 8 }) => {
  return (
    <motion.div
      className={"theme-card rounded-2xl overflow-hidden border border-slate-700/80 bg-background-dark/90 backdrop-blur-sm " + className}
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.2), 0 0 0 1px rgba(253, 224, 71, 0.05)" }}
      whileHover={{ y: -hoverElevation, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
};

export default ThemeCard;
