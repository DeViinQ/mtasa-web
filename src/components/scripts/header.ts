export const initMobileMenu = () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.querySelector('header');
  
  if (!mobileMenuButton || !mobileMenu || !header) return;

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');
    mobileMenuButton.setAttribute('aria-expanded', isMenuOpen.toString());
    
    // Toggle the icon
    const iconOpen = mobileMenuButton.querySelector('.icon-open');
    const iconClose = mobileMenuButton.querySelector('.icon-close');
    if (iconOpen && iconClose) {
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    }
  };

  mobileMenuButton.addEventListener('click', toggleMenu);

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !header.contains(e.target as Node)) {
      toggleMenu();
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      toggleMenu();
    }
  });
};
