import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Sobre nós', href: '#about' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#location' },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2C1A0E] shadow-lg' : 'bg-[#2C1A0E]/95'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <Coffee className="w-8 h-8 text-[#C9A84C] group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-['Inter'] text-[#F5ECD7] text-2xl">
              aura cup
            </span>
          </a>

          {/* Navegação desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => scrollToSection(e, link.href)}
                className="font-['Inter'] text-[#F5ECD7] hover:text-[#C9A84C] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#C9A84C] text-[#2C1A0E] px-6 py-2.5 rounded-full font-['Inter'] hover:bg-[#d4b55c] transition-all duration-300 hover:scale-105">
              Peça agora
            </button>
          </div>

          {/* Botões Mobile */}
          <button
            className="md:hidden text-[#F5ECD7] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu cell */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#2C1A0E] border-t border-[#C9A84C]/20"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => scrollToSection(e, link.href)}
                  className="block font-['Inter'] text-[#F5ECD7] hover:text-[#C9A84C] transition-colors duration-300 py-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-[#C9A84C] text-[#2C1A0E] px-6 py-2.5 rounded-full font-['Inter'] hover:bg-[#d4b55c] transition-colors duration-300">
                Peça agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
