import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Props = { words: string[]; intervalMs?: number; className?: string; as?: 'span' | 'h1' | 'h2'; };

export default function TextSwap({ words, intervalMs = 2000, className = '', as: Tag = 'span' }: Props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <Tag className={className + ' inline-block relative min-w-[2ch]'}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </Tag>
  );
}
