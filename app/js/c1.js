const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
    const sliderImages = slider.querySelector(".slider-images");
    const prevBtn = slider.querySelector(".slider-prev");
    const nextBtn = slider.querySelector(".slider-next");

let counter = 0;
const size = sliderImages.children[0].clientWidth;

  sliderImages.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener("click", () => {
    if (counter >= sliderImages.children.length - 1) {
        sliderImages.style.transition = "none";
        counter = -1;
    }
    counter++;
    sliderImages.style.transition = "transform 0.5s ease-in-out";
    sliderImages.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
    if (counter <= 0) {
        sliderImages.style.transition = "none";
        counter = sliderImages.children.length;
    }
    counter--;
    sliderImages.style.transition = "transform 0.5s ease-in-out";
    sliderImages.style.transform = `translateX(${-size * counter}px)`;
});

if (window.innerWidth < 500) {
    sliderImages.style.transform = `translateX(-${size / 0.5}px)`;
}
});
