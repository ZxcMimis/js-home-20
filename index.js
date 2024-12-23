const galleryList = document.querySelector(".gallery");
const photoEl = document.querySelectorAll(".photo");
let numberOfPicture = 0;
window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight" && numberOfPicture < photoEl.length - 1) {
        photoEl[numberOfPicture].classList.remove("active");
        numberOfPicture++;
        photoEl[numberOfPicture].classList.add("active");

    };
    if (e.code === "ArrowLeft" && numberOfPicture > 0) {
        photoEl[numberOfPicture].classList.remove("active");
        numberOfPicture--;
        photoEl[numberOfPicture].classList.add("active");

    };
})

