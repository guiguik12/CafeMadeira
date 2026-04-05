import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const hours = [
    { day: 'Segunda - Sexta', time: '7:00 - 20:00' },
    { day: 'Sábado', time: '8:00 - 21:00' },
    { day: 'Domingo', time: '8:00 - 19:00' },
  ];

  return (
    <section id="location" ref={ref} className="py-20 md:py-32 bg-[#F5ECD7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Inter'] text-[#2C1A0E] text-4xl md:text-5xl lg:text-6xl mb-4">
            Nos visite
          </h2>
          <p className="font-['Inter'] text-[#2C1A0E]/70 text-lg max-w-2xl mx-auto">
            Transforme sua pausa em um encontro com a arte do café.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Map Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-[#8A9E7B] to-[#C9A84C] flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="font-['Inter'] text-xl">Mapa Interativo</p>
                <p className="font-['Inter'] text-sm opacity-80 mt-2">
                  (Google Maps Aqui)
                </p>
              </div>
            </div>
            {/* <iframe 
              src="URLgoogle"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe> */}
          </motion.div>

          {/* Contato e horario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Endereço */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-[#C9A84C] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#2C1A0E]" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-[#2C1A0E] text-2xl mb-2">
                    Endereço
                  </h3>
                  <p className="font-['Inter'] text-[#2C1A0E]/80 leading-relaxed">
                    Rua das Rosas, 123
                    <br />
                    Centro
                    <br />
                    Porto Velho, Ro 00000-00
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-start gap-4">
                <div className="bg-[#C9A84C] p-3 rounded-full">
                  <Clock className="w-6 h-6 text-[#2C1A0E]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Inter'] text-[#2C1A0E] text-2xl mb-4">
                    Horários:
                  </h3>
                  <div className="space-y-3">
                    {hours.map(schedule => (
                      <div
                        key={schedule.day}
                        className="flex justify-between items-center py-2 border-b border-[#2C1A0E]/10"
                      >
                        <span className="font-['Inter'] text-[#2C1A0E]/80">
                          {schedule.day}
                        </span>
                        <span className="font-['Inter'] text-[#2C1A0E]">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#8A9E7B] p-2 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-['Inter'] text-[#2C1A0E]/60 text-sm">
                    Numero para contato:
                  </p>
                  <p className="font-['Inter'] text-[#2C1A0E]">
                    (69) 99999-9999
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#8A9E7B] p-2 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-['Inter'] text-[#2C1A0E]/60 text-sm">
                    Email
                  </p>
                  <p className="font-['Inter'] text-[#2C1A0E]">
                    email@auracup.com
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#2C1A0E] text-[#F5ECD7] px-8 py-4 rounded-full font-['Inter'] text-lg hover:bg-[#3d2918] transition-all duration-300 hover:scale-105 shadow-xl mt-6">
              Saiba Mais
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
