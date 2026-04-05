import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import auracupHand from '@/assets/auracup_hand.png';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${auracupHand})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-7 h-7 text-[#CFCACD]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
