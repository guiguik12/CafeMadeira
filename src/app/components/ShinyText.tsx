import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ShinyTextProps {
  text?: string | ReactNode;
  speed?: number;
  delay?: number;
  color?: string;
  shineColor?: string;
  spread?: number;
  direction?: 'left' | 'right';
  yoyo?: boolean;
  pauseOnHover?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function ShinyText({
  text,
  speed = 3,
  delay = 0,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  direction = 'left',
  yoyo = false,
  pauseOnHover = false,
  disabled = false,
  className = '',
}: Readonly<ShinyTextProps>) {
  const isRTL = direction === 'right';
  const spreadPercent = spread;

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: disabled ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <style>{`
        @keyframes shiny-${direction} {
          0% {
            background-position: ${isRTL ? '100%' : '-100%'} 0;
          }
          100% {
            background-position: ${isRTL ? '-100%' : '100%'} 0;
          }
        }
        
        .shiny-text-${direction} {
          background: linear-gradient(
            90deg,
            ${color} 0%,
            ${color} ${Math.max(0, 50 - spreadPercent / 2)}%,
            ${shineColor} 50%,
            ${color} ${Math.min(100, 50 + spreadPercent / 2)}%,
            ${color} 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shiny-${direction} ${speed}s ease-in-out ${yoyo ? 'alternate' : 'normal'} infinite;
          ${
            pauseOnHover
              ? `
            &:hover {
              animation-play-state: paused;
            }
          `
              : ''
          }
        }
      `}</style>

      <div className={`shiny-text-${direction}`}>{text}</div>
    </motion.div>
  );
}
