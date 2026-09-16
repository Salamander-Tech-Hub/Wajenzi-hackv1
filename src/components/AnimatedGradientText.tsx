interface AnimatedGradientTextProps {
  children: string;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3';
}

export default function AnimatedGradientText({ children, className = '', as: Tag = 'span' }: AnimatedGradientTextProps) {
  return (
    <Tag className={className}>
      <span className="animated-gradient-text inline-block bg-clip-text text-transparent bg-[length:200%_100%] bg-gradient-to-r from-primary via-[#fef08a] to-primary">
        <style>{`
          .animated-gradient-text {
            background-image: linear-gradient(90deg, #FDE047, #fef08a, #FDE047, #eab308);
            animation: gradient-shift 4s ease-in-out infinite;
          }
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 0%; }
            50% { background-position: 100% 0%; }
          }
        `}</style>
        {children}
      </span>
    </Tag>
  );
}
