export const initMobileMenu = () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.querySelector('header');
  const body = document.body;
  
  if (!mobileMenuButton || !mobileMenu || !header) return;

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');
    body.classList.toggle('menu-open');
    mobileMenuButton.setAttribute('aria-expanded', isMenuOpen.toString());
    
    // Toggle the icons
    const iconOpen = mobileMenuButton.querySelector('.icon-open');
    const iconClose = mobileMenuButton.querySelector('.icon-close');
    if (iconOpen && iconClose) {
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    }
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  mobileMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !mobileMenu.contains(e.target as Node) && !mobileMenuButton.contains(e.target as Node)) {
      closeMenu();
    }
  });

  // Close menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      closeMenu();
    }
  });

  // Handle menu links
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
};
