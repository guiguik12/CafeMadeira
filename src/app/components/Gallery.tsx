import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import auracupHand from '@/assets/auracup_hand.gif';
import auracupCups from '@/assets/auracup_cups.png';
import auracupLogo from '@/assets/auracup_logo.png';
import auracupMenu from '@/assets/auracup_menu.gif';
import auracupShirt from '@/assets/auracup_shirt.png';
import FlyingPosters from './FlyingPosters';

const items = [
  auracupHand,
  auracupCups,
  auracupLogo,
  auracupMenu,
  auracupShirt,
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" ref={ref} className="py-10 md:py-16 bg-[#E3E3E3]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-['Inter'] text-[#2C1A0E] text-4xl md:text-4xl lg:text-4xl mb-2">
            GALERIA
          </h2>
          <p className="font-['Inter'] text-[#2C1A0E]/70 text-lg max-w-2xl mx-auto">
            Onde o café encontra a atmosfera perfeita.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full h-[545px]"
      >
        <FlyingPosters
          items={items}
          planeWidth={320}
          planeHeight={350}
          distortion={2}
          scrollEase={0.009}
          cameraFov={15}
          cameraZ={10}
        />
      </motion.div>
    </section>
  );
}
