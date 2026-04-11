document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.getElementById('banner-carousel');
  var track = carousel.querySelector('.carousel-track');
  var slides = Array.from(track.children);
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  var dotsContainer = document.getElementById('carousel-dots');
  
  var currentIndex = 0;
  var autoSlideInterval;
  var totalSlides = slides.length;
  
  // Создаём точки
  slides.forEach(function(_, index) {
    var dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', function() {
      currentIndex = index;
      track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
      updateClasses();
    });
    dotsContainer.appendChild(dot);
  });
  var dots = Array.from(dotsContainer.children);
  
  function updateClasses() {
    slides.forEach(function(slide, i) {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    });
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }
  
  function nextSlide() {
    if (currentIndex >= totalSlides - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    updateClasses();
  }
  
  function prevSlide() {
    if (currentIndex <= 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex--;
    }
    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    updateClasses();
  }
  
  // Кнопка вперёд
  nextBtn.addEventListener('click', function() {
    nextSlide();
  });
  
  // Кнопка назад
  prevBtn.addEventListener('click', function() {
    prevSlide();
  });
  
  // Автопереключение
  autoSlideInterval = setInterval(function() {
    nextSlide();
  }, 3000);
});