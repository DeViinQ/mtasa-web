export const initFaq = () => {
  const faqItems = document.querySelectorAll('.faq-item');

  const closeAllAnswers = () => {
    faqItems.forEach((item) => {
      const answer = item.querySelector('.faq-answer') as HTMLElement;
      const button = item.querySelector('button') as HTMLButtonElement;
      const icon = button.querySelector('.plus-icon') as HTMLElement;
      
      if (answer && button) {
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        answer.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
        icon.classList.remove('rotate-45');
      }
    });
  };

  const toggleAnswer = (item: Element) => {
    const answer = item.querySelector('.faq-answer') as HTMLElement;
    const button = item.querySelector('button') as HTMLButtonElement;
    const icon = button.querySelector('.plus-icon') as HTMLElement;

    if (answer && button) {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      if (!isExpanded) {
        closeAllAnswers();
        answer.classList.remove('hidden');
        // Trigger reflow
        void answer.offsetWidth;
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        answer.style.opacity = '1';
        button.setAttribute('aria-expanded', 'true');
        icon.classList.add('rotate-45');
      } else {
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        button.setAttribute('aria-expanded', 'false');
        icon.classList.remove('rotate-45');
        setTimeout(() => {
          if (button.getAttribute('aria-expanded') === 'false') {
            answer.classList.add('hidden');
          }
        }, 300);
      }
    }
  };

  faqItems.forEach((item) => {
    const button = item.querySelector('button');
    if (button) {
      button.addEventListener('click', () => toggleAnswer(item));
    }
  });
};
