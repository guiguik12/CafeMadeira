import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import auracupHand from '@/assets/auracup_hand.gif';
import auracupCups from '@/assets/auracup_cups.png';
import auracupLogo from '@/assets/auracup_logo.png';
import auracupMenu from '@/assets/auracup_menu.gif';
import auracupShirt from '@/assets/auracup_shirt.png';
import auracupCafé from '@/assets/auracup_café.gif';
import auracupLocation from '@/assets/auracup_location.png';
import auracupReserve from '@/assets/auracup_reserve.png';
import ShinyText from './ShinyText';
import CircularGallery from './CircularGallery';

const items = [
  {
    image: auracupLogo,
    text: '',
  },
  {
    image: auracupCups,
    text: '',
  },
  {
    image: auracupShirt,
    text: '',
  },
  {
    image: auracupMenu,
    text: '',
  },
  {
    image: auracupLocation,
    text: '',
  },
  {
    image: auracupCafé,
    text: '',
  },
  {
    image: auracupHand,
    text: '',
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const heroRef = useRef(null);
  const heroIsInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <section id="gallery" className="bg-[#E3E3E3]">
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroIsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="w-full h-full pt-15 md:h-[970px] relative overflow-hidden"
      >
        <img
          src={auracupReserve}
          alt="AuraCupauracupReserve Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/80">
          <ShinyText
            text="GALLERY"
            speed={2}
            delay={0}
            color="#9A9996"
            shineColor="#E2DADD"
            spread={120}
            direction="left"
            yoyo
            pauseOnHover
            disabled={false}
            className="text-5xl mt-15 font-['Inter'] font-bold"
          />
          <span className="text-sm md:text-base font-['Inter'] text-white text-center px-6 pb-9 max-w-2xl">
            More than images, it invites users to explore flavors, atmosphere,
            and the brand's identity in a simple and engaging way.
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="hidden md:block text-xs md:text-sm font-['Inter'] text-white/80">
              Scroll to view images
            </span>
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </motion.div>
      <div ref={ref} className="bg-[#E3E3E3]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full h-[600px] relative"
        >
          <CircularGallery
            items={items}
            bend={0}
            textColor="#141517"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </motion.div>
        <div className="flex items-center justify-center gap-4 py-8">
          <button className="p-1 rounded-full border bg-[#5B3130]">
            <ChevronLeft className="w-4 h-4 text-[#E3E3E3]" />
          </button>
          <span className="text-sm text-[#141517]/60 font-['Inter']">
            Slide to explore
          </span>
          <button className="p-1 rounded-full border bg-[#5B3130]">
            <ChevronRight className="w-4 h-4 text-[#E3E3E3]" />
          </button>
        </div>
      </div>
    </section>
  );
}
