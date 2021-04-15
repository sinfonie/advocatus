class Slider {
  constructor(elemSelector, opts) {
    this.sliderSelector = elemSelector;
    this.currentSlide = 0;
    this.time = null;
    this.slider = null;
    this.elem = null;
    this.slides = null;
    this.prev = null;
    this.next = null;
    this.dots = [];

    const defaultOpts = {
      pauseTime: 0,
      prevText: "<",
      nextText: ">",
      generateDots: true,
      generatePrevNext: true
    };
    this.options = Object.assign({}, defaultOpts, opts);

    this.generateSlider();
    this.changeSlide(this.currentSlide);
  }

  generateSlider() {
    this.slider = document.querySelector(this.sliderSelector);
    this.slider.classList.add("slider");

    const slidesCnt = document.createElement("div");
    slidesCnt.classList.add("slider__container");

    this.slides = this.slider.children;

    while (this.slides.length) {
      this.slides[0].classList.add("slider__slide");
      slidesCnt.appendChild(this.slides[0]);
    }
    this.slides = slidesCnt.querySelectorAll(".slider__slide");
    this.slider.appendChild(slidesCnt);

    if (this.options.generatePrevNext) this.createPrevNext();
    if (this.options.generateDots) this.createPagination();
  }

  changeSlide(index) {
    this.slides.forEach(slide => {
      slide.classList.remove("slider__slide--active");
      slide.setAttribute("aria-hidden", true);
    });
    this.slides[index].classList.add("slider__slide--active");
    this.slides[index].setAttribute("aria-hidden", false);
    if (this.options.generateDots) {
      this.dots.forEach(dot => {
        dot.querySelector('button').classList.remove("slider-pagination__btn--active");
      });
      this.dots[index].querySelector('button').classList.add("slider-pagination__btn--active");
    }
    this.currentSlide = index;
    if (this.options.pauseTime !== 0) {
      clearInterval(this.time);
      this.time = setTimeout(() => this.slideNext(), this.options.pauseTime)
    }
  }

  slidePrev() {
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
    this.changeSlide(this.currentSlide);
  }

  slideNext() {
    this.currentSlide++;
    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0;
    }
    this.changeSlide(this.currentSlide);
  }

  createPrevNext() {
    this.prev = document.createElement("button");
    this.prev.type = "button";
    this.prev.innerText = this.options.prevText;
    this.prev.classList.add("slider-navigation__btn");
    this.prev.classList.add("slider-navigation__btn--prev");
    this.prev.addEventListener("click", this.slidePrev.bind(this));

    this.next = document.createElement("button");
    this.next.type = "button";
    this.next.innerText = this.options.nextText;
    this.next.classList.add("slider-navigation__btn");
    this.next.classList.add("slider-navigation__btn--next");
    this.next.addEventListener("click", this.slideNext.bind(this));

    const nav = document.createElement("div");
    nav.classList.add("slider-navigation");
    nav.setAttribute("aria-label", "Slider prev next");
    nav.appendChild(this.prev);
    nav.appendChild(this.next);
    this.slider.appendChild(nav);
  }

  createPagination() {
    const ulDots = document.createElement("ul");
    ulDots.classList.add("slider-pagination");
    ulDots.setAttribute("aria-label", "Slider pagination");

    for (let i = 0; i < this.slides.length; i++) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.classList.add("slider-pagination__btn");
      btn.type = "button";
      btn.innerText = i + 1;
      btn.setAttribute("aria-label", "Set slide " + (i + 1));

      btn.addEventListener("click", () => this.changeSlide(i));

      li.appendChild(btn);

      ulDots.appendChild(li);
      this.dots.push(li);
    }

    this.slider.appendChild(ulDots);
  }
}