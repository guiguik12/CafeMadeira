import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import auracupTable from '@/assets/auracup_table.png';
import ShinyText from './ShinyText';
import { triggerCoffeeConfetti } from './ConfettiCoffee';
import { Button } from './ui/button';

export function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="location" ref={ref} className="bg-[#E3E3E3]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="w-full h-full pt-15 md:h-[970px] relative overflow-hidden"
      >
        <img
          src={auracupTable}
          alt="AuraCup Table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center pt-15 justify-center gap-4 bg-black/80">
          <ShinyText
            text="FIND US"
            speed={2}
            delay={0}
            color="#9A9996"
            shineColor="#E2DADD"
            spread={120}
            direction="left"
            yoyo
            pauseOnHover
            disabled={false}
            className="text-4xl md:text-5xl lg:text-6xl font-['Inter'] font-bold"
          />
          <span className="text-sm md:text-base font-['Inter'] text-white text-center px-6 pb-9 max-w-2xl">
            Come visit us and enjoy the best coffee experience.
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="hidden md:block text-xs md:text-sm font-['Inter'] text-white/80">
              Scroll to more details
            </span>
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </motion.div>
      <div className="bg-[#E3E3E3] py-4 md:py-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-1xl overflow-hidden shadow-2xl"
            >
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2037558347400!2d-73.99776!3d40.72316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb945e1%3A0x4ce072a4a0e1b5b!2s250%20Lafayette%20St%2C%20New%20York%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1712500000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-7 md:text-left text-center"
            >
              <div className="md:flex md:items-start md:gap-4 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <h3 className="font-['Inter'] text-[#5B3130] text-md font-bold">
                    ADDRESS
                  </h3>
                </div>
                <p className="font-['Inter'] text-[#141517]/80 text-sm leading-relaxed md:ml-0 ml-0">
                  250 Lafayette Street
                  <br />
                  Soho, New York, NY 10012
                  <br />
                  United States
                </p>
              </div>
              <div className="md:flex md:items-start md:gap-4 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <h3 className="font-['Inter'] text-[#5B3130] text-md font-bold">
                    HOURS
                  </h3>
                </div>
                <div className="space-y-2 font-['Inter'] text-sm text-[#141517] md:ml-0 ml-0">
                  <div className="flex justify-center md:justify-start gap-2">
                    <span>Monday - Friday:</span>
                    <span className="font-bold">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-center md:justify-start gap-2">
                    <span>Saturday:</span>
                    <span className="font-bold">8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-center md:justify-start gap-2">
                    <span>Sunday:</span>
                    <span className="font-bold">8:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="md:flex md:items-start md:gap-4 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <h3 className="font-['Inter'] text-[#5B3130] text-md font-bold">
                    PHONE
                  </h3>
                </div>
                <div className="md:ml-0 ml-0">
                  <a
                    href="tel:+12124315830"
                    className="font-['Inter'] text-[#141517] text-sm font-bold hover:text-[#141517]/80 transition-colors"
                  >
                    (212) 431-5830
                  </a>
                  <p className="font-['Inter'] text-[#141517]/60 text-sm mt-1">
                    Available 24/7
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between gap-4 pb-4">
                <div className="md:flex md:items-start md:gap-4 flex flex-col items-center">
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <h3 className="font-['Inter'] text-[#5B3130] text-md font-bold">
                      EMAIL
                    </h3>
                  </div>
                  <div className="md:ml-0 ml-0">
                    <a
                      href="mailto:hello@auracup.com"
                      className="font-['Inter'] text-[#141517] text-sm font-bold hover:text-[#141517]/80 transition-colors"
                    >
                      hello@auracup.com
                    </a>
                    <p className="font-['Inter'] text-[#141517]/60 text-sm mt-1">
                      Response within 24h
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  onClick={triggerCoffeeConfetti}
                  className="w-25 h-10 bg-[#5B3130] text-[#E3E3E3] rounded-3xl font-['Inter'] text-sm font-bold hover:bg-[#3d2918] transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
                >
                  <a href="mailto:hello@auracup.com?subject=Inquiry%20about%20AuraCup&body=Hello%20AuraCup%20team,%0A%0AI%20would%20like%20to%20inquire%20about...">
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
