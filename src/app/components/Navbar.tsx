import CardNav from './CardNav';
import { useSection } from '../context/SectionContext';

export function Navbar() {
  const { setActiveSection } = useSection();

  const handleNavigation = (section: string) => {
    setActiveSection(section as 'menu' | 'about' | 'gallery' | 'testimonials' | 'location');
  };

  const navItems = [
    {
      label: 'Menu',
      bgColor: '#5B3130',
      textColor: '#E3E3E3',
      links: [
        { label: 'Cafés', onClick: () => handleNavigation('menu'), ariaLabel: 'Cafés' },
      ],
    },
    {
      label: 'Sobre',
      bgColor: '#5B3130',
      textColor: '#E3E3E3',
      links: [
        {
          label: 'Nossa história',
          onClick: () => handleNavigation('about'),
          ariaLabel: 'Nossa história',
        },
        { label: 'Valores', onClick: () => handleNavigation('about'), ariaLabel: 'Valores' },
      ],
    },
    {
      label: 'Contato',
      bgColor: '#5B3130',
      textColor: '#E3E3E3',
      links: [
        { label: 'Galeria', onClick: () => handleNavigation('gallery'), ariaLabel: 'Galeria' },
        { label: 'Localização', onClick: () => handleNavigation('location'), ariaLabel: 'Localização' },
        { label: 'Depoimentos', onClick: () => handleNavigation('testimonials'), ariaLabel: 'Depoimentos' },
      ],
    },
  ];

  return (
    <CardNav
      logo="aura cup"
      items={navItems}
      baseColor="#E3E3E3"
      menuColor="#5B3130"
      buttonTextColor="#5B3130"
      ease="circ.out"
      className="fixed top-0 left-0 right-0 w-full max-w-none z-50"
    />
  );
}
