import CardNav from './CardNav';

export function Navbar() {
  const navItems = [
    {
      label: 'Menu',
      bgColor: '#5B3130',
      textColor: '#E3E3E3',
      links: [
        { label: 'Cafés', href: '#menu', ariaLabel: 'Cafés' },
      ],
    },
    {
      label: 'Sobre',
      bgColor: '#5B3130',
      textColor: '#E3E3E3',
      links: [
        {
          label: 'Nossa história',
          href: '#about',
          ariaLabel: 'Nossa história',
        },
        { label: 'Valores', href: '#about', ariaLabel: 'Valores' },
      ],
    },
    {
      label: 'Contato',
      bgColor: '#5B3130',
      textColor: '#E3E3E3',
      links: [
        { label: 'Galeria', href: '#gallery', ariaLabel: 'Galeria' },
        { label: 'Localização', href: '#location', ariaLabel: 'Localização' },
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
      className="fixed top-0 left-0 right-0 w-full max-w-none"
    />
  );
}
