type Lang = 'en' | 'pt';

export type TranslationKeys = typeof translations['en'];

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    'nav.logo': 'aura cup',
    'nav.menu': 'Menu',
    'nav.coffee': 'Coffee',
    'nav.about': 'About',
    'nav.history': 'History',
    'nav.mission': 'Mission',
    'nav.contacts': 'Contacts',
    'nav.gallery': 'Gallery',
    'nav.location': 'Location',
    'nav.feedback': 'Feedback',
    'nav.cart': 'Shopping cart',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',

    // Hero / Home
    'hero.brand': 'AURA CUP',
    'hero.subtitle': 'Coffee Shop',
    'hero.viewMenu': 'View Menu',
    'hero.brandIdentity': 'Brand Identity by Богдана Собко',

    // About
    'about.title': 'Our Story',
    'about.p1':
      "AuraCup's mission has always been to offer more than just great flavors. We wanted to build an experience — an environment where the aroma of fresh coffee, warm service, and a tranquil atmosphere make every customer feel at home.",
    'about.p2':
      'The name AuraCup carries exactly that essence. It represents the different moments that coffee accompanies: the first sip of the morning, the afternoon conversation, the break between commitments, and the encounters that stay in memory.',
    'about.quote':
      '"Coffee is not just a drink, but an experience created with love and filled with different sensations."',
    'about.founder': 'Luiz Ribeiro, Founder',
    'about.stats.experience': 'Years of Excellence',
    'about.stats.customers': 'Happy Customers',
    'about.stats.beans': 'Natural Beans',

    // Menu
    'menu.title': 'MENU',
    'menu.viewMore': 'View More',
    'menu.item1': 'Artisan Espresso',
    'menu.item2': 'Classic Cappuccino',
    'menu.item3': 'Butter Croissant',
    'menu.item4': 'Latte Macchiato',
    'menu.item5': 'Special Cold Brew',
    'menu.item6': 'Cheese Bread',
    'menu.description': 'yadayadayada',

    // Gallery
    'gallery.title': 'GALLERY',
    'gallery.subtitle': "Where coffee meets the perfect atmosphere.",

    // Feedback / Testimonials
    'feedback.title': 'What Our Customers Say',
    'feedback.subtitle':
      "Don't just take our word for it — read what some of our loyal customers have said:",
    'feedback.person1': 'Ana Silva',
    'feedback.role1': 'Coffee Lover',
    'feedback.text1':
      "The best coffee experience in town! The atmosphere is cozy, the baristas are knowledgeable, and every cup is perfect.",
    'feedback.person2': 'Carlos Mendes',
    'feedback.role2': 'Regular Customer',
    'feedback.text2':
      "I come here every morning. The cappuccino is consistently excellent, and the staff always greets me with a warm smile.",
    'feedback.person3': 'Julia Santos',
    'feedback.role3': 'Food Blogger',
    'feedback.text3':
      'A wonderful caf\u00e9! Every detail in the coffees and desserts is worthy of praise. The latte art is definitely worth the wait.',
    'feedback.person4': 'Roberto Lima',
    'feedback.role4': 'Businessman',
    'feedback.text4':
      'Perfect place for meetings. Great coffee, comfortable seating, and a productive atmosphere. Highly recommended!',

    // Location
    'location.title': 'Visit Us',
    'location.subtitle':
      'Transform your break into an encounter with the art of coffee.',
    'location.address': 'Address',
    'location.street': '123 Rose Street',
    'location.district': 'Downtown',
    'location.city': 'Porto Velho, RO 00000-00',
    'location.hours': 'Hours',
    'location.weekdays': 'Monday - Friday',
    'location.saturday': 'Saturday',
    'location.sunday': 'Sunday',
    'location.phoneLabel': 'Contact Number',
    'location.email': 'Email',
    'location.learnMore': 'Learn More',
    'location.mapLabel': 'Interactive Map',
    'location.mapSublabel': '(Google Maps Here)',

    // Footer
    'footer.coffeeShop': '— Coffee Shop',
    'footer.home': 'Home',
    'footer.menu': 'Menu',
    'footer.about': 'About',
    'footer.gallery': 'Gallery',
    'footer.contacts': 'Contacts',
    'footer.copyright':
      '\u00a9 Copyright 2026 \u2014 All Rights Reserved.',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Privacy Policy',

    // Language toggle
    'lang.en': 'EN',
    'lang.pt': 'PT',
  },
  pt: {
    // Navbar
    'nav.logo': 'aura cup',
    'nav.menu': 'Menu',
    'nav.coffee': 'Caf\u00e9',
    'nav.about': 'Sobre',
    'nav.history': 'Hist\u00f3ria',
    'nav.mission': 'Miss\u00e3o',
    'nav.contacts': 'Contatos',
    'nav.gallery': 'Galeria',
    'nav.location': 'Localiza\u00e7\u00e3o',
    'nav.feedback': 'Depoimentos',
    'nav.cart': 'Carrinho de compras',
    'nav.openMenu': 'Abrir menu',
    'nav.closeMenu': 'Fechar menu',

    // Hero / Home
    'hero.brand': 'AURA CUP',
    'hero.subtitle': 'Coffee Shop',
    'hero.viewMenu': 'Ver Menu',
    'hero.brandIdentity': 'Identidade Visual por Богдана Собко',

    // About
    'about.title': 'Nossa Hist\u00f3ria',
    'about.p1':
      'A proposta da AuraCup sempre foi oferecer mais do que sabores marcantes. Quer\u00edamos construir uma experi\u00eancia — um ambiente em que o aroma do caf\u00e9 fresco, o atendimento pr\u00f3ximo e a atmosfera tranquila fizessem cada cliente se sentir em casa.',
    'about.p2':
      'O nome AuraCup carrega justamente essa ess\u00eancia. Ele representa os diferentes momentos que o caf\u00e9 acompanha: o primeiro gole da manh\u00e3, a conversa da tarde, a pausa entre compromissos e os encontros que ficam na mem\u00f3ria.',
    'about.quote':
      '"O caf\u00e9 n\u00e3o \u00e9 apenas uma bebida, mas uma experi\u00eancia criada com amor e repleta de diferentes sensa\u00e7\u00f5es."',
    'about.founder': 'Luiz Ribeiro, Fundador',
    'about.stats.experience': 'Anos de Excel\u00eancia',
    'about.stats.customers': 'Clientes Satisfeitos',
    'about.stats.beans': 'Gr\u00e3os Naturais',

    // Menu
    'menu.title': 'MENU',
    'menu.viewMore': 'Ver mais',
    'menu.item1': 'Espresso Artesanal',
    'menu.item2': 'Cappuccino Cl\u00e1ssico',
    'menu.item3': 'Croissant Amanteigado',
    'menu.item4': 'Latte Macchiato',
    'menu.item5': 'Cold Brew Especial',
    'menu.item6': 'P\u00e3o de Queijo',
    'menu.description': 'yadayadayada',

    // Gallery
    'gallery.title': 'GALERIA',
    'gallery.subtitle': 'Onde o caf\u00e9 encontra a atmosfera perfeita.',

    // Feedback / Testimonials
    'feedback.title': 'O que nossos clientes dizem?',
    'feedback.subtitle':
      'N\u00e3o leve em conta apenas o que falamos, leia o que alguns de nossos maiores clientes j\u00e1 falaram:',
    'feedback.person1': 'Ana Silva',
    'feedback.role1': 'Apaixonada por Caf\u00e9',
    'feedback.text1':
      'A melhor experi\u00eancia de caf\u00e9 da cidade! O ambiente \u00e9 aconchegante, os baristas s\u00e3o conhecedores, e cada x\u00edcara \u00e9 perfeita.',
    'feedback.person2': 'Carlos Mendes',
    'feedback.role2': 'Cliente Frequente',
    'feedback.text2':
      'Eu venho aqui toda manh\u00e3. O cappuccino \u00e9 consistentemente excelente, e a equipe sempre me recebe com um sorriso caloroso.',
    'feedback.person3': 'Julia Santos',
    'feedback.role3': 'Blogueira de Comida',
    'feedback.text3':
      'Um \u00f3timo caf\u00e9! Todos os detalhes nos caf\u00e9s e doces s\u00e3o dignos de parab\u00e9ns. A arte nos caf\u00e9s com certeza vale a espera.',
    'feedback.person4': 'Roberto Lima',
    'feedback.role4': 'Empres\u00e1rio',
    'feedback.text4':
      'Local perfeito para reuni\u00f5es. \u00d3timo caf\u00e9, assentos confort\u00e1veis e um ambiente produtivo. Altamente recomendado!',

    // Location
    'location.title': 'Nos visite',
    'location.subtitle':
      'Transforme sua pausa em um encontro com a arte do caf\u00e9.',
    'location.address': 'Endere\u00e7o',
    'location.street': 'Rua das Rosas, 123',
    'location.district': 'Centro',
    'location.city': 'Porto Velho, RO 00000-00',
    'location.hours': 'Hor\u00e1rios',
    'location.weekdays': 'Segunda - Sexta',
    'location.saturday': 'S\u00e1bado',
    'location.sunday': 'Domingo',
    'location.phoneLabel': 'N\u00famero para contato',
    'location.email': 'Email',
    'location.learnMore': 'Saiba Mais',
    'location.mapLabel': 'Mapa Interativo',
    'location.mapSublabel': '(Google Maps Aqui)',

    // Footer
    'footer.coffeeShop': '— Coffee Shop',
    'footer.home': 'In\u00edcio',
    'footer.menu': 'Menu',
    'footer.about': 'Sobre',
    'footer.gallery': 'Galeria',
    'footer.contacts': 'Contatos',
    'footer.copyright':
      '\u00a9 Copyright 2026 \u2014 Todos os Direitos Reservados.',
    'footer.terms': 'Termos de Uso',
    'footer.privacy': 'Pol\u00edtica de Privacidade',

    // Language toggle
    'lang.en': 'EN',
    'lang.pt': 'PT',
  },
};

export function getTranslation(lang: Lang, key: string): string {
  return translations[lang]?.[key] ?? translations['en'][key] ?? key;
}

export type Language = Lang;
