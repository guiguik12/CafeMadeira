import { motion , useInView } from 'motion/react';
import { useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1631869404868-2ae8de2e7264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBjb3p5JTIwYXRtb3NwaGVyZXxlbnwxfHx8fDE3NzQyNzMxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Atmosfera Relaxante',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1549804795-05e3d7ec4d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwYW1iaWVuY2UlMjB3b29kZW4lMjB0YWJsZXN8ZW58MXx8fHwxNzc0MjczMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Ambiente aconchegante',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzc0MjI5OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Arte de Latte',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1573840357491-06851c72e0d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0MjM3NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Interior Moderno',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1539021897569-06e9fa3c6bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc3NDI3MzEwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Nosso funcionário',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzc0MjI4NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Grãos de Café',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1771956649576-647bbaaffa4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cCUyMGhhbmRzfGVufDF8fHx8MTc3NDI3MzEwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Espresso close-up',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1675125530909-15213f01a9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjcm9pc3NhbnQlMjBjb2ZmZWV8ZW58MXx8fHwxNzc0MjczMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Salgados fresquinhos',
  },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-32 bg-[#F5ECD7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-[#2C1A0E] text-4xl md:text-5xl lg:text-6xl mb-4">
            Nosso Ambiente
          </h2>
          <p className="font-['DM_Sans'] text-[#2C1A0E]/70 text-lg max-w-2xl mx-auto">
            Mergulhe em um mundo onde conforto e tradição se encontram em cada
            xícara.
          </p>
        </motion.div>

        {/* Galeria */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              375: 1,
              768: 2,
              1024: 4,
            }}
          >
            <Masonry gutter="1rem">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group cursor-pointer overflow-hidden rounded-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto block group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#2C1A0E]/0 group-hover:bg-[#2C1A0E]/40 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </div>
    </section>
  );
}
