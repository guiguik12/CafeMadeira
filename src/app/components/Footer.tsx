import { Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
                    className="font-['Inter'] text-[#F5ECD7]/80 hover:text-[#5B3130] transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
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
                    className="font-['Inter'] text-[#F5ECD7]/80 hover:text-[#5B3130] transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
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
                    className="font-['Inter'] text-[#F5ECD7]/80 hover:text-[#5B3130] transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
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
                    className="font-['Inter'] text-[#F5ECD7]/80 hover:text-[#5B3130] transition-colors duration-300 text-sm bg-transparent border-none cursor-pointer"
                  >
                    Contacts
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center gap-2">
              <div className="flex gap-2">
                <button className="bg-[#F5ECD7]/10 p-2 rounded-full hover:bg-[#5B3130] hover:text-[#F5ECD7] transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="bg-[#F5ECD7]/10 p-2 rounded-full hover:bg-[#5B3130] hover:text-[#F5ECD7] transition-all duration-300">
                  <FaInstagram className="w-5 h-5" />
                </button>
                <button className="bg-[#F5ECD7]/10 p-2 rounded-full hover:bg-[#5B3130] hover:text-[#F5ECD7] transition-all duration-300">
                  <FaXTwitter className="w-5 h-5" />
                </button>
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
