import { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  mass: number;
  id: number;
  glowMultiplier?: number;
  glowVelocity?: number;
}

export interface FloatingParticlesBackgroundProps {
  /** Background color (default: theme background-dark) */
  backgroundColor?: string;
  /** Particle and glow color (default: theme primary) */
  particleColor?: string;
  particleCount?: number;
  particleSize?: number;
  particleOpacity?: number;
  glowIntensity?: number;
  movementSpeed?: number;
  mouseInfluence?: number;
  mouseGravity?: 'none' | 'attract' | 'repel';
  gravityStrength?: number;
  glowAnimation?: 'instant' | 'ease' | 'spring';
  className?: string;
}

const DEFAULT_BG = '#020617';
const DEFAULT_PARTICLE = '#FDE047';

export default function FloatingParticlesBackground({
  backgroundColor = DEFAULT_BG,
  particleColor = DEFAULT_PARTICLE,
  particleCount = 50,
  particleSize = 2,
  particleOpacity = 0.5,
  glowIntensity = 12,
  movementSpeed = 0.4,
  mouseInfluence = 120,
  mouseGravity = 'attract',
  gravityStrength = 50,
  glowAnimation = 'ease',
  className = '',
}: FloatingParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const initializeParticles = useCallback(
    (width: number, height: number): Particle[] => {
      return Array.from({ length: particleCount }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * movementSpeed,
        vy: (Math.random() - 0.5) * movementSpeed,
        size: Math.random() * particleSize + 1,
        opacity: particleOpacity,
        baseOpacity: particleOpacity,
        mass: Math.random() * 0.5 + 0.5,
        id: index,
      }));
    },
    [particleCount, particleSize, particleOpacity, movementSpeed]
  );

  const redistributeParticles = useCallback((width: number, height: number) => {
    particlesRef.current.forEach((p) => {
      p.x = Math.random() * width;
      p.y = Math.random() * height;
    });
  }, []);

  const updateParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      const rect = canvas.getBoundingClientRect();
      const mouse = mouseRef.current;

      particlesRef.current.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseInfluence && distance > 0) {
          const force = (mouseInfluence - distance) / mouseInfluence;
          const normDx = dx / distance;
          const normDy = dy / distance;
          const gravityForce = force * (gravityStrength * 0.001);

          if (mouseGravity === 'attract') {
            particle.vx += normDx * gravityForce;
            particle.vy += normDy * gravityForce;
          } else if (mouseGravity === 'repel') {
            particle.vx -= normDx * gravityForce;
            particle.vy -= normDy * gravityForce;
          }

          particle.opacity = Math.min(1, particle.baseOpacity + force * 0.4);

          const targetGlow = 1 + force * 2;
          const currentGlow = particle.glowMultiplier ?? 1;
          if (glowAnimation === 'instant') {
            particle.glowMultiplier = targetGlow;
          } else if (glowAnimation === 'ease') {
            const easeSpeed = 0.15;
            particle.glowMultiplier = currentGlow + (targetGlow - currentGlow) * easeSpeed;
          } else if (glowAnimation === 'spring') {
            const springForce = (targetGlow - currentGlow) * 0.2;
            const damping = 0.85;
            particle.glowVelocity = (particle.glowVelocity ?? 0) * damping + springForce;
            particle.glowMultiplier = currentGlow + (particle.glowVelocity ?? 0);
          }
        } else {
          particle.opacity = Math.max(particle.baseOpacity * 0.3, particle.opacity - 0.02);
          const targetGlow = 1;
          const currentGlow = particle.glowMultiplier ?? 1;
          if (glowAnimation === 'instant') {
            particle.glowMultiplier = targetGlow;
          } else if (glowAnimation === 'ease') {
            const easeSpeed = 0.08;
            particle.glowMultiplier = Math.max(1, currentGlow + (targetGlow - currentGlow) * easeSpeed);
          } else if (glowAnimation === 'spring') {
            const springForce = (targetGlow - currentGlow) * 0.15;
            const damping = 0.9;
            particle.glowVelocity = (particle.glowVelocity ?? 0) * damping + springForce;
            particle.glowMultiplier = Math.max(1, currentGlow + (particle.glowVelocity ?? 0));
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx += (Math.random() - 0.5) * 0.001;
        particle.vy += (Math.random() - 0.5) * 0.001;
        particle.vx *= 0.999;
        particle.vy *= 0.999;

        if (particle.x < 0) particle.x = rect.width;
        if (particle.x > rect.width) particle.x = 0;
        if (particle.y < 0) particle.y = rect.height;
        if (particle.y > rect.height) particle.y = 0;
      });
    },
    [mouseInfluence, mouseGravity, gravityStrength, glowAnimation]
  );

  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const w = ctx.canvas.width;
      const h = ctx.canvas.height;
      ctx.clearRect(0, 0, w, h);

      particlesRef.current.forEach((particle) => {
        ctx.save();
        const glowMult = particle.glowMultiplier ?? 1;
        ctx.shadowColor = particleColor;
        ctx.shadowBlur = glowIntensity * glowMult * 2;
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    },
    [particleColor, glowIntensity]
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    updateParticles(canvas);
    drawParticles(ctx);
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const newWidth = Math.max(rect.width, 1);
    const newHeight = Math.max(rect.height, 1);
    canvas.width = newWidth;
    canvas.height = newHeight;
    if (particlesRef.current.length > 0) {
      redistributeParticles(newWidth, newHeight);
    } else {
      particlesRef.current = initializeParticles(newWidth, newHeight);
    }
  }, [redistributeParticles, initializeParticles]);

  useEffect(() => {
    const runResize = () => resizeCanvas();
    runResize();
    const id = requestAnimationFrame(runResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', runResize);
    const container = containerRef.current;
    if (container && typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(runResize);
      ro.observe(container);
      return () => {
        cancelAnimationFrame(id);
        ro.disconnect();
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', runResize);
      };
    }
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', runResize);
    };
  }, [handleMouseMove, resizeCanvas]);

  useEffect(() => {
    animate();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ backgroundColor }}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
