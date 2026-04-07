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
        { label: 'Coffee', onClick: () => handleNavigation('menu'), ariaLabel: 'Coffee' },
      ],
    },
    {
      label: 'About',
      bgColor: '#5B3130',
      textColor: '#E3E3E3',
      links: [
        {
          label: 'History',
          onClick: () => handleNavigation('about'),
          ariaLabel: 'History',
        },
        { label: 'Mission', onClick: () => handleNavigation('about'), ariaLabel: 'Mission' },
      ],
    },
    {
      label: 'Contacts',
      bgColor: '#5B3130',
      textColor: '#E3E3E3',
      links: [
        { label: 'Gallery', onClick: () => handleNavigation('gallery'), ariaLabel: 'Gallery' },
        { label: 'Location', onClick: () => handleNavigation('location'), ariaLabel: 'Location' },
        { label: 'Feedback', onClick: () => handleNavigation('testimonials'), ariaLabel: 'Feedback' },
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
