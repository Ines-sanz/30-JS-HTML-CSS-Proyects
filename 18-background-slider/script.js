const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let indexActive = 0;

setBgBody();

function setBgBody() {
  body.style.backgroundImage = slides[indexActive].style.backgroundImage;
}

setImage();

function setImage() {
  slides.forEach((e) => e.classList.remove("active"));
  slides[indexActive].classList.add("active");
}

rightBtn.addEventListener("click", () => {
  indexActive++;

  if (indexActive > slides.length - 1) {
    indexActive = 0;
  }
  setImage();
  setBgBody();
});

leftBtn.addEventListener("click", () => {
  indexActive--;

  if (indexActive < 0) {
    indexActive = slides.length - 1;
  }
  setImage();
  setBgBody();
});

/*function prevSlide () => ( (), {
    indexActive--
    slides.forEach( s => s.classList.remove('active'))
    slides[index].classList.add('active')
   
})*/
