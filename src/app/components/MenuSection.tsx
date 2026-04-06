import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Espresso Artesanal',
    description: 'yadayadayada',
    price: '$4.50',
    image:
      'https://images.unsplash.com/photo-1771956649576-647bbaaffa4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cCUyMGhhbmRzfGVufDF8fHx8MTc3NDI3MzEwNXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Cappuccino Clássico',
    description: 'yadayadayada',
    price: '$5.50',
    image:
      'https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzc0MjI5OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Croissant Amanteigado',
    description: 'yadayadayada',
    price: '$3.50',
    image:
      'https://images.unsplash.com/photo-1675125530909-15213f01a9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjcm9pc3NhbnQlMjBjb2ZmZWV8ZW58MXx8fHwxNzc0MjczMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Latte Macchiato',
    description: 'yadayadayada',
    price: '$5.00',
    image:
      'https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzc0MjI5OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Cold Brew Especial',
    description: 'yadayadayada',
    price: '$6.00',
    image:
      'https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzc0MjI4NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Pão de Queijo',
    description: 'yadayadayada',
    price: '$4.00',
    image:
      'https://images.unsplash.com/photo-1675125530909-15213f01a9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjcm9pc3NhbnQlMjBjb2ZmZWV8ZW58MXx8fHwxNzc0MjczMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="menu" ref={ref} className="py-20 md:py-32 bg-[#E3E3E3]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Inter'] text-[#2C1A0E] text-4xl md:text-5xl lg:text-6xl mb-4">
            Nosso Cardápio
          </h2>
          <p className="font-['Inter'] text-[#2C1A0E]/70 text-lg max-w-2xl mx-auto">
            Conheça nossa seleção de bebidas artesanais e acompanhamentos
            cuidadosamente escolhidos.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#F5ECD7] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/50 to-transparent" />
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#2C1A0E] px-4 py-2 rounded-full font-['Inter'] shadow-lg">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-['Inter'] text-[#2C1A0E] text-2xl mb-2">
                    {item.name}
                  </h3>
                  <p className="font-['Inter'] text-[#2C1A0E]/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-[#2C1A0E] text-[#F5ECD7] px-8 py-4 rounded-full font-['Inter'] text-lg hover:bg-[#3d2918] transition-all duration-300 hover:scale-105 shadow-xl">
            Ver mais
          </button>
        </motion.div>
      </div>
    </section>
  );
}
