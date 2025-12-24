import {Swiper as SwiperReviews} from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const initSwiperReviews = () => {
  document.addEventListener('DOMContentLoaded', () => {
    new SwiperReviews('.reviews__swiper', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 0,
      allowTouchMove: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
      breakpoints: {
        768: {
          allowTouchMove: false,
        },
      },
      on: {
        init: function () {
          updateButtonStates(this);
        },
        slideChange: function () {
          updateButtonStates(this);
        },
      },
    });

    function updateButtonStates(swiperInstance) {
      const prevButton = document.querySelector('.reviews__button--prev');
      const nextButton = document.querySelector('.reviews__button--next');

      if (swiperInstance.isBeginning && !swiperInstance.params.loop) {
        prevButton.classList.add('disabled');
      } else {
        prevButton.classList.remove('disabled');
      }

      if (swiperInstance.isEnd && !swiperInstance.params.loop) {
        nextButton.classList.add('disabled');
      } else {
        nextButton.classList.remove('disabled');
      }
    }
  });

  return () => {
    if (SwiperReviews) {
      SwiperReviews.destroy();
    }

  };
};

export { initSwiperReviews };
