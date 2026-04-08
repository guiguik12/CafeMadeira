import { motion } from 'motion/react';

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'characters';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  onAnimationComplete?: () => void;
  className?: string;
}

export default function BlurText({
  text,
  delay = 0,
  animateBy = 'words',
  direction = 'bottom',
  onAnimationComplete,
  className = '',
}: Readonly<BlurTextProps>) {
  const directionVariants = {
    top: { y: 20 },
    bottom: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  const variants =
    animateBy === 'words'
      ? {
          hidden: {
            opacity: 0,
            filter: 'blur(10px)',
            ...directionVariants[direction],
          },
          visible: (i: number) => ({
            opacity: 1,
            filter: 'blur(0px)',
            y: direction === 'top' || direction === 'bottom' ? 0 : undefined,
            x: direction === 'left' || direction === 'right' ? 0 : undefined,
            transition: {
              delay: i * 0.1 + delay / 1000,
              duration: 0.6,
            },
          }),
        }
      : {
          hidden: {
            opacity: 0,
            filter: 'blur(10px)',
            ...directionVariants[direction],
          },
          visible: (i: number) => ({
            opacity: 1,
            filter: 'blur(0px)',
            y: direction === 'top' || direction === 'bottom' ? 0 : undefined,
            x: direction === 'left' || direction === 'right' ? 0 : undefined,
            transition: {
              delay: i * 0.03 + delay / 1000,
              duration: 0.4,
            },
          }),
        };

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const separator = animateBy === 'words' ? ' ' : '';

  return (
    <div className={className}>
      <motion.div
        className="flex flex-wrap gap-1 w-full"
        onAnimationComplete={onAnimationComplete}
      >
        {elements.map((element, i) => (
          <motion.span
            key={`${element}-${i}`}
            initial="hidden"
            animate="visible"
            variants={variants}
            custom={i}
          >
            {element}
            {animateBy === 'words' && i < elements.length - 1 && separator}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
