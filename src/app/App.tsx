import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { useSection } from './context/SectionContext';

function AppContent() {
  const { activeSection } = useSection();

  useEffect(() => {
    globalThis.scrollTo(0, 0);
    if (globalThis.location.hash) {
      globalThis.history.replaceState(null, '', globalThis.location.pathname);
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex-1">
        {activeSection === 'menu' && (
          <>
            <Hero />
            <MenuSection />
          </>
        )}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'gallery' && <GallerySection />}
        {activeSection === 'testimonials' && <TestimonialsSection />}
        {activeSection === 'location' && <LocationSection />}
      </main>
      <Footer />
    </div>
  );
}

export default AppContent;
