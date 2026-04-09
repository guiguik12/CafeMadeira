'use client';

import confetti from 'canvas-confetti';

export function triggerCoffeeConfetti(event?: React.MouseEvent) {
  const scalar = 2;
  const coffee = confetti.shapeFromText({ text: '☕', scalar });

  const x = event ? event.clientX / window.innerWidth : 0.5;
  const y = event ? event.clientY / window.innerHeight : 0.3;

  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0.5,
    decay: 0.96,
    startVelocity: 20,
    shapes: [coffee],
    scalar,
    origin: { x, y },
  };

  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 30,
    });

    confetti({
      ...defaults,
      particleCount: 5,
    });
  };

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}
