// script.js
document.addEventListener("DOMContentLoaded", function () {
    const backgroundImages = [
        'hero-image1.jpg',
        'hero-image2.jpg',
        'hero-image3.jpg'
    ];

    let currentImageIndex = 0;

    const heroSection = document.querySelector(".hero");

    
    const changeBackgroundButton = document.getElementById("changeBackground");

    function changeHeroBackground() {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        const imageUrl = backgroundImages[currentImageIndex];
        heroSection.style.backgroundImage = `url('${imageUrl}')`;
    }


    changeBackgroundButton.addEventListener("click", changeHeroBackground);

    changeHeroBackground();
});