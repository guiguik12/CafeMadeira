import { motion } from 'motion/react';
import auracupHand from '@/assets/auracup_hand.png';
import BlurText from './BlurText';
import ShinyText from './ShinyText';
import { useSection } from '../context/SectionContext';
import { useLanguage } from '../../i18n/LanguageContext';

export function Home() {
  const { setActiveSection } = useSection();
  const { t } = useLanguage();
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

      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-start md:justify-center z-20 gap-2 px-4 md:px-12 lg:px-24 pt-28 md:pt-0">
        <ShinyText
          text={t('hero.brand')}
          speed={2}
          delay={0}
          color="#9A9996"
          shineColor="#E2DADD"
          spread={120}
          direction="left"
          yoyo
          pauseOnHover
          disabled={false}
          className="text-5xl md:text-7xl font-['Inter'] font-bold text-center md:text-left"
        />
        <BlurText
          text={t('hero.subtitle')}
          delay={600}
          animateBy="words"
          direction="bottom"
          className="text-md md:text-2xl font-['Inter'] text-[#E3E3E3]/80 text-center md:text-left"
        />
      </div>

      <div className="absolute bottom-4 md:bottom-6 left-1/2 md:left-auto right-auto md:right-6 -translate-x-1/2 md:-translate-x-0 z-20 text-center md:text-right">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => setActiveSection('menu')}
            className="mb-4 px-6 py-2 bg-[#5B3130] text-[#F5ECD7] rounded-full font-['Inter'] text-sm hover:bg-[#5B3130]/80 transition-colors duration-300"
          >
            {t('hero.viewMenu')}
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col gap-2"
        >
          <a
            href="https://www.behance.net/gallery/245065107/AURA-CUP-I-COFFEE-I-brand-identity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-['Inter'] text-[#E3E3E3]/50 hover:text-[#E3E3E3]/80 transition-colors duration-300 underline"
          >
            {t('hero.brandIdentity')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
