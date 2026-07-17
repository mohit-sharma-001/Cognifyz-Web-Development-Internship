// ==========================
// Image List
// ==========================

const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg"
];

// ==========================
// Elements
// ==========================

const slideImage = document.getElementById("slideImage");
const previewImage = document.getElementById("previewImage");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// ==========================
// Current Image Index
// ==========================

let currentIndex = 0;

// ==========================
// Update Slideshow
// ==========================

function updateSlide() {

    slideImage.src = images[currentIndex];

}

// ==========================
// Next Image
// ==========================

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    updateSlide();

}

// ==========================
// Previous Image
// ==========================

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    updateSlide();

}

// ==========================
// Button Events
// ==========================

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", previousImage);

// ==========================
// Auto Slideshow
// ==========================

setInterval(nextImage, 3000);

// ==========================
// Gallery Preview
// ==========================

function changeImage(imageSrc) {

    previewImage.src = imageSrc;

}