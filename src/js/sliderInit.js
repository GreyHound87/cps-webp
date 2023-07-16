var brandsSwiper = null;
var techTypesSwiper = null;
var pricesSwiper = null;

function initSwipers() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
  if (windowWidth <= 767 && brandsSwiper === null) {
    document.querySelector('.brands__swiper-pagination').style.setProperty('--swiper-pagination-bottom', '110px');
    document.querySelector('.brands__swiper-pagination').style.setProperty('--swiper-pagination-bullet-horizontal-gap', '6px');
    brandsSwiper = new Swiper(".brands__swiper-container", {
      pagination: {
        el: ".brands__swiper-pagination",
        clickable: true,
      },
      slidesPerGroup: 1,
      slidesPerView: 1.312,
      spaceBetween: 16,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    });
  } else if (windowWidth > 767 && brandsSwiper !== null) {
    brandsSwiper.destroy();
    brandsSwiper = null;
  }

  
  if (windowWidth <= 767 && techTypesSwiper === null) {
    document.querySelector('.tech-types__swiper-pagination').style.setProperty('--swiper-pagination-bottom', '0px');
    document.querySelector('.tech-types__swiper-pagination').style.setProperty('--swiper-pagination-bullet-horizontal-gap', '6px');
    techTypesSwiper = new Swiper(".tech-types__swiper-container", {
      pagination: {
        el: ".tech-types__swiper-pagination",
        clickable: true,
      },
      slidesPerGroup: 1,
      slidesPerView: 1.312,
      spaceBetween: 16,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    });
  } else if (windowWidth > 767 && techTypesSwiper !== null) {
    techTypesSwiper.destroy();
    techTypesSwiper = null;
  }


  if (windowWidth <= 767 && pricesSwiper === null) {
    document.querySelector('.prices__swiper-pagination').style.setProperty('--swiper-pagination-bottom', '243px'); 
    document.querySelector('.prices__swiper-pagination').style.setProperty('--swiper-pagination-bullet-horizontal-gap', '6px');
    pricesSwiper = new Swiper(".prices__swiper-container", {
      pagination: {
        el: ".prices__swiper-pagination",
        clickable: true,
      },
      slidesPerGroup: 1,
      slidesPerView: 1.217,
      spaceBetween: 16,
      slidesOffsetBefore: 8,
      slidesOffsetAfter: 8,
    });
  } else if (windowWidth > 767 && pricesSwiper !== null) {
    pricesSwiper.destroy();
    pricesSwiper = null;
  }

}

window.addEventListener("load", function() {
  initSwipers();
});

window.addEventListener("resize", function() {
  initSwipers();
});
