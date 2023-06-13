const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Przewiń do góry';
scrollToTopButton.classList.add('scroll-to-top-button');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.body.appendChild(scrollToTopButton);
