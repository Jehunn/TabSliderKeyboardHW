const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

prev.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

next.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

showSlide(currentSlide);
