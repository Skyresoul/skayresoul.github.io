var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  //mousewheel: true,
  keyboard: true,
  autoHeight: true,
  initialSlide: 2,

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   hide: true,
  // },
});

