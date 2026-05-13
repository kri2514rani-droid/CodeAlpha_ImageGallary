const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Open Lightbox */

images.forEach((img, index) => {

  img.addEventListener("click", () => {

    currentIndex = index;

    showImage();

    lightbox.style.display = "flex";

  });

});

/* Show Image */

function showImage(){

  lightboxImg.src = images[currentIndex].src;

}

/* Next Button */

nextBtn.addEventListener("click", () => {

  currentIndex = (currentIndex + 1) % images.length;

  showImage();

});

/* Previous Button */

prevBtn.addEventListener("click", () => {

  currentIndex = (currentIndex - 1 + images.length) % images.length;

  showImage();

});

/* Close Button */

closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});

/* Filter Function */

function filterImages(category){

  const items = document.querySelectorAll(".gallery-item");

  items.forEach(item => {

    if(category === "all"){

      item.style.display = "block";

    }

    else if(item.classList.contains(category)){

      item.style.display = "block";

    }

    else{

      item.style.display = "none";

    }

  });

}