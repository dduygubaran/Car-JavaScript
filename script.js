const carsDOM = document.querySelector("#cars-dom")
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let index = 0;

document.addEventListener("DOMContentLoaded", function () {
  function showSlide(newIndex) {
    index = (newIndex + slideCount) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  // Previous click
  document.querySelector(".previous").addEventListener("click", function () {
    showSlide(index - 1);
  });

  // Next click
  document.querySelector(".next").addEventListener("click", function () {
    showSlide(index + 1);
  });

  // First slide
  showSlide(index);
 // showModel();
});

async function getCarInfo() {
  try {
    let response = await fetch("../carModels/car.json");
    let result = await response.json();
    let cars = result;
    return cars;
  } catch (e) {
    console.log(e);
  }
}

getCarInfo().then((cars) => {
  console.log(cars);
});


