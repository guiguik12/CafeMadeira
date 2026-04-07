import { Mail } from 'lucide-react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'motion/react';
import Plasma from './Plasma';
import { useSection } from '../context/SectionContext';

export function Footer() {
  const { setActiveSection } = useSection();

  return (
    <footer className="bg-[#141517] text-[#6E6C68] py-16 relative">
      <div className="absolute inset-0 h-full w-full">
        <Plasma
          color="#9a5351"
          speed={1}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={false}
        />
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 mb-10">
          <div className="flex flex-col justify-center items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-1">
              <span className="font-['Inter'] text-2xl text-[#F5ECD7]">
                AURA CUP
              </span>
              <span className="text-sm text-[#F5ECD7]/50">— Coffee Shop</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2 text-lg">
              <ul className="space-x-4 flex flex-wrap justify-center md:justify-start">
                <li>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setActiveSection('menu');
                    }}
                    className="font-['Inter'] text-[#F5ECD7] hover:text-[#6E6C68] transition-colors duration-300 text-sm border-none cursor-pointer"
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setActiveSection('about');
                    }}
                    className="font-['Inter'] text-[#F5ECD7] hover:text-[#6E6C68] transition-colors duration-300 text-sm border-none cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setActiveSection('gallery');
                    }}
                    className="font-['Inter'] text-[#F5ECD7] hover:text-[#6E6C68] transition-colors duration-300 text-sm border-none cursor-pointer"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setActiveSection('location');
                    }}
                    className="font-['Inter'] text-[#F5ECD7] hover:text-[#6E6C68] transition-colors duration-300 text-sm border-none cursor-pointer"
                  >
                    Contacts
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center gap-2">
              <div className="flex gap-2">
                <motion.a
                  href="mailto:contato@auracup.com"
                  className="bg-[#5B3130] p-2 rounded-full text-[#F5ECD7] transition-all duration-300 inline-block"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5B3130] p-2 rounded-full text-[#F5ECD7] transition-all duration-300 inline-block"
                >
                  <FaInstagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5B3130] p-2 rounded-full text-[#F5ECD7] transition-all duration-300 inline-block"
                >
                  <FaXTwitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/guiguik12/CafeMadeira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5B3130] p-2 rounded-full text-[#F5ECD7] transition-all duration-300 inline-block"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F5ECD7]/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-['Inter'] text-[#F5ECD7]/60 text-sm">
            © Copyright 2026 — All Rights Reserved.
          </p>
          <div className="flex gap-3 font-['Inter'] text-[#F5ECD7]/60 text-sm underline">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
