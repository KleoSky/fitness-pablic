const heroButton = document.querySelector('.hero__button');

const scroll = function () {
  heroButton.addEventListener('click', () => {
    const targetBlock = document.querySelector('.price');
    if (targetBlock) {
      targetBlock.scrollIntoView({ behavior: 'smooth' });
    }
  });
};

export { scroll };
