import {Swiper as SwiperJuri} from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import '../../styles/vendor/swiper.css';

const initSwiper = () => {
  document.addEventListener('DOMContentLoaded', () => {
    new SwiperJuri('.juri__swiper', {
      loop: true,
      loopSlides: 8,
      normalizeSlideIndex: false,
      spaceBetween: 0,
      resize: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.juri__button--next',
        prevEl: '.juri__button--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          allowTouchMove: true,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
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
      const prevButton = document.querySelector('.juri__button--prev');
      const nextButton = document.querySelector('.juri__button--next');

      prevButton.disabled = false;
      nextButton.disabled = false;

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
};

export { initSwiper };
