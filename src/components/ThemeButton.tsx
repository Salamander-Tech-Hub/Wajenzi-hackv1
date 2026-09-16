import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PRIMARY_CLASS =
  'inline-flex items-center justify-center gap-2 bg-primary text-slate-900 font-bold rounded-lg px-6 py-3.5 ' +
  'shadow-[0_0_20px_rgba(253,224,71,0.25)] hover:shadow-[0_0_28px_rgba(253,224,71,0.4)] hover:bg-[#fef08a] ' +
  'transition-all duration-300 uppercase tracking-wide text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark';

const SECONDARY_CLASS =
  'inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary/60 text-primary font-bold rounded-lg px-6 py-3 ' +
  'hover:bg-primary/10 hover:border-primary transition-all duration-300 uppercase tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark';

interface ThemeButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  newTab?: boolean;
}

/**
 * Theme CTA button (primary yellow or secondary outline). Use for Inquire, Book consultation, Explore, etc.
 */
const ThemeButton: React.FC<ThemeButtonProps> = ({
  children,
  variant = 'primary',
  to,
  href,
  type = 'button',
  onClick,
  className = '',
  newTab = false,
}) => {
  const baseClass = variant === 'primary' ? PRIMARY_CLASS : SECONDARY_CLASS;

  const content = <>{children}</>;

  if (to !== undefined) {
    return (
      <Link to={to} className={`${baseClass} ${className}`}>
        <motion.span
          className="inline-flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          {content}
        </motion.span>
      </Link>
    );
  }
  if (href !== undefined) {
    return (
      <a
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className={`${baseClass} ${className}`}
      >
        <motion.span
          className="inline-flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          {content}
        </motion.span>
      </a>
    );
  }
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default ThemeButton;
