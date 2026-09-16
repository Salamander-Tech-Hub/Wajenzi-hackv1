import { motion } from 'motion/react';

interface KineticTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  delay?: number;
}

export default function KineticText({ children, className = '', as: Tag = 'span', delay = 0 }: KineticTextProps) {
  const chars = Array.from(children);

  return (
    <Tag className={className + ' inline-flex flex-wrap'}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: delay + i * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Tag>
  );
}
