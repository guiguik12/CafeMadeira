import { Coffee, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2C1A0E] text-[#F5ECD7] py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-[#C9A84C]" />
              <span className="font-['Inter'] text-2xl">
                AURA CUP

              </span>
            </div>
            <p className="font-['Inter'] text-[#F5ECD7]/70 text-sm leading-relaxed">
              AURA CUP — onde cada xícara conta uma história desde 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Inter'] text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#menu"
                  onClick={e => scrollToSection(e, '#menu')}
                  className="font-['Inter'] text-[#F5ECD7]/70 hover:text-[#C9A84C] transition-colors duration-300 text-sm"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={e => scrollToSection(e, '#about')}
                  className="font-['Inter'] text-[#F5ECD7]/70 hover:text-[#C9A84C] transition-colors duration-300 text-sm"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={e => scrollToSection(e, '#gallery')}
                  className="font-['Inter'] text-[#F5ECD7]/70 hover:text-[#C9A84C] transition-colors duration-300 text-sm"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={e => scrollToSection(e, '#location')}
                  className="font-['Inter'] text-[#F5ECD7]/70 hover:text-[#C9A84C] transition-colors duration-300 text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-['Inter'] text-xl mb-4">Hours</h3>
            <ul className="space-y-2 font-['Inter'] text-[#F5ECD7]/70 text-sm">
              <li>Seg - Sext: 7:00 - 20:00</li>
              <li>Sábado: 8:00 - 21:00</li>
              <li>Domingo: 8:00 - 7:00</li>
            </ul>
          </div>

          {/* Notícias */}
          <div>
            <h3 className="font-['Inter'] text-xl mb-4">Notícias</h3>
            <p className="font-['Inter'] text-[#F5ECD7]/70 text-sm mb-4">
              Se inscreva para receber promoções e novidades.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 rounded-full bg-[#F5ECD7]/10 border border-[#F5ECD7]/20 text-[#F5ECD7] placeholder-[#F5ECD7]/50 focus:outline-none focus:border-[#C9A84C] font-['Inter'] text-sm"
              />
              <button className="bg-[#C9A84C] text-[#2C1A0E] p-2 rounded-full hover:bg-[#d4b55c] transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-[#F5ECD7]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Inter'] text-[#F5ECD7]/60 text-sm">
            © 2026 AURA CUP. All rights reserved.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#F5ECD7]/10 p-2 rounded-full hover:bg-[#C9A84C] hover:text-[#2C1A0E] transition-all duration-300">
              <FaInstagram className="w-5 h-5" />
            </button>
            <button className="bg-[#F5ECD7]/10 p-2 rounded-full hover:bg-[#C9A84C] hover:text-[#2C1A0E] transition-all duration-300">
              <FaFacebook className="w-5 h-5" />
            </button>
            <button className="bg-[#F5ECD7]/10 p-2 rounded-full hover:bg-[#C9A84C] hover:text-[#2C1A0E] transition-all duration-300">
              <FaXTwitter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
