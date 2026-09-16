import { motion } from 'motion/react';

type Props = {
  accentColor?: string;
  backgroundColor?: string;
  waveCount?: number;
  waveSize?: number;
  rotationSpeed?: number;
  tiltAngle?: number;
  strokeWidth?: number;
  className?: string;
};

export default function CyclingWaveLoader({
  accentColor = '#FDE047',
  backgroundColor = '#020617',
  waveCount = 8,
  waveSize = 140,
  rotationSpeed = 4,
  tiltAngle = 45,
  strokeWidth = 2,
  className = '',
}: Props) {
  const waves = Array.from({ length: waveCount }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    scale: 1 + i * 0.12,
    opacity: 0.9 * (1 - i * 0.08),
  }));

  return (
    <div
      className={"flex items-center justify-center overflow-hidden " + className}
      style={{ width: '100%', height: '100%', position: 'relative', background: backgroundColor }}
      aria-hidden
    >
      <div
        style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle, ${accentColor}25 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />
      {waves.map((w) => (
        <motion.div
          key={w.id}
          style={{
            position: 'absolute',
            width: waveSize * w.scale,
            height: waveSize * w.scale,
            border: strokeWidth + 'px solid ' + accentColor,
            borderRadius: '50%',
            opacity: w.opacity,
          }}
          animate={{ rotateZ: [0, 360], rotateY: [0, 360], rotateX: [tiltAngle, tiltAngle + 360] }}
          transition={{ duration: rotationSpeed, repeat: Infinity, ease: 'linear', delay: w.delay }}
        />
      ))}
    </div>
  );
}
