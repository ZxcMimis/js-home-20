const images = document.querySelectorAll(".gallery .image");
const fullImageContainer = document.querySelector(".full-image-container");
const fullImage = document.querySelector(".full-image");
let currentIndex = 0;

document.addEventListener("keydown", (e) => {
    if (fullImageContainer.style.display === "flex") {
        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
            openImage(currentIndex);
        } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            openImage(currentIndex);
        } else if (e.key === "Escape") {
            fullImageContainer.style.display = "none";
        }
    }
});

function createBoxes(amount) {
    const container = document.querySelector("#boxes");
    const currentBoxCount = container.children.length;
    let size = 30 + currentBoxCount * 10;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomColor();
        box.style.marginBottom = "10px";
        container.appendChild(box);

        size += 10;
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function destroyBoxes() {
    const container = document.querySelector("#boxes");
    container.innerHTML = '';
}

document.querySelector("[data-action='render']").addEventListener("click", () => {
    const amount = document.querySelector("#amount").value;
    if (amount > 0) {
        createBoxes(amount);
    }
});

document.querySelector("[data-action='destroy']").addEventListener("click", destroyBoxes);