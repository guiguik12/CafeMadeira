import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagem do Fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1631869404868-2ae8de2e7264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBjb3p5JTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzQyNzMxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1A0E]/70 via-[#2C1A0E]/50 to-[#2C1A0E]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Playfair_Display'] text-[#F5ECD7] text-5xl md:text-6xl lg:text-7xl mb-6"
        >
          Onde cada copo tem uma história
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['DM_Sans'] text-[#F5ECD7]/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Tenha a experiência verdadeira de tomar um café artesanal em um local
          aconchegante
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={scrollToMenu}
          className="bg-[#C9A84C] text-[#2C1A0E] px-8 py-4 rounded-full font-['DM_Sans'] text-lg hover:bg-[#d4b55c] transition-all duration-300 hover:scale-105 shadow-xl"
        >
          Veja nosso menu
        </motion.button>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#F5ECD7]/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
