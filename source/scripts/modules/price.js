const buttons = document.querySelectorAll('.price__button');
const infoItems = document.querySelectorAll('.price__info-item');
const tabItems = document.querySelectorAll('.price__tab-item');

const switchTab = (rel) => {
  buttons.forEach((button) => {
    button.classList.remove('price__button--current');
  });
  infoItems.forEach((item) => {
    item.classList.remove('price__info-item--active');
    item.classList.add('price__info-item--hidden');
  });
  tabItems.forEach((tab) => {
    tab.classList.remove('price__tab-item--current');
  });

  const activeButton = document.querySelector(`.price__button[rel="${rel}"]`);
  const activeItem = document.querySelector(`.price__info-item[rel="${rel}"]`);
  const activeTab = document.querySelector(`.price__tab-item[rel="${rel}"]`);

  if (activeButton && activeItem && activeTab) {
    activeButton.classList.add('price__button--current');
    activeTab.classList.add('price__tab-item--current');
    activeItem.classList.remove('price__info-item--hidden');
    activeItem.classList.add('price__info-item--active');
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const rel = button.getAttribute('rel');
    switchTab(rel);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  switchTab('tab1');
});

export { switchTab };
