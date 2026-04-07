import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-[#F5ECD7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc3NDI3MzEwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Barista making coffee"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8A9E7B] rounded-full opacity-20 blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-['Inter'] text-[#2C1A0E] text-4xl md:text-5xl lg:text-6xl mb-6">
              Nossa História
            </h2>

            <p className="font-['Inter'] text-[#2C1A0E]/80 text-lg mb-6 leading-relaxed">
              A proposta da Café & Café sempre foi oferecer mais do que sabores
              marcantes. Eu queria construir uma experiência — um ambiente em
              que o aroma do café fresco, o atendimento próximo e a atmosfera
              tranquila fizessem cada cliente se sentir em casa.
            </p>

            <p className="font-['Inter'] text-[#2C1A0E]/80 text-lg mb-8 leading-relaxed">
              O nome Café & Café carrega justamente essa essência. Ele
              representa os diferentes momentos que o café acompanha: o primeiro
              gole da manhã, a conversa da tarde, a pausa entre compromissos e
              os encontros que ficam na memória.
            </p>

            {/* Pull Quote */}
            <div className="relative pl-6 border-l-4 border-[#C9A84C] my-8">
              <p className="font-['Inter'] text-[#2C1A0E] text-2xl md:text-3xl italic">
                "O café não é apenas uma bebida, mas uma experiência criada com
                amor e repleta de diferentes sensações."
              </p>
              <p className="font-['Inter'] text-[#8A9E7B] mt-2">
                — Luiz Ribeiro, Fundador
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="font-['Inter'] text-[#C9A84C] text-3xl md:text-4xl mb-2">
                  10+
                </div>
                <div className="font-['Inter'] text-[#2C1A0E]/70 text-sm">
                  Anos de Excelência
                </div>
              </div>
              <div className="text-center">
                <div className="font-['Inter'] text-[#C9A84C] text-3xl md:text-4xl mb-2">
                  50k+
                </div>
                <div className="font-['Inter'] text-[#2C1A0E]/70 text-sm">
                  Clientes Satisfeitos
                </div>
              </div>
              <div className="text-center">
                <div className="font-['Inter'] text-[#C9A84C] text-3xl md:text-4xl mb-2">
                  100%
                </div>
                <div className="font-['Inter'] text-[#2C1A0E]/70 text-sm">
                  Grãos Naturais
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
