const brandsMoreBtn = document.getElementById('brandsMoreBtn');
const brandsMoreBtnTxt = document.getElementById('brandsMoreBtnTxt');
const brandsSwiperContainer = document.getElementById('brandsSwiperContainer');

brandsMoreBtn.addEventListener('click', function() {
  brandsSwiperContainer.classList.toggle('brands__swiper-container--expanded');
  brandsMoreBtn.classList.toggle('brands__more-btn--active');
  brandsMoreBtnTxt.textContent = brandsMoreBtn.classList.contains('brands__more-btn--active') ? 'Скрыть' : 'Показать все';

  const brandsSwiperSlides = document.querySelectorAll('.brands__swiper-slide');
  for (let i = 0; i < brandsSwiperSlides.length; i++) {
    brandsSwiperSlides[i].classList.toggle('brands__swiper-slide--visible');
  }
});

const techTypesMoreBtn = document.getElementById('techTypesMoreBtn');
const techTypesMoreBtnTxt = document.getElementById('techTypesMoreBtnTxt');
const techTypesSwiperContainer = document.getElementById('techTypesSwiperContainer');

techTypesMoreBtn.addEventListener('click', function() {
  techTypesSwiperContainer.classList.toggle('tech-types__swiper-container--expanded');
  techTypesMoreBtn.classList.toggle('tech-types__more-btn--active');
  techTypesMoreBtnTxt.textContent = techTypesMoreBtn.classList.contains('tech-types__more-btn--active') ? 'Скрыть' : 'Показать все';

  const techTypesSwiperSlides = document.querySelectorAll('.tech-types__swiper-slide');
  for (let i = 0; i < techTypesSwiperSlides.length; i++) {
    techTypesSwiperSlides[i].classList.toggle('tech-types__swiper-slide--visible');
  }
});