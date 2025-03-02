
document.addEventListener("DOMContentLoaded", () => {
    // Image Slider Functionality
    let slider = document.querySelector(".slider");
    let slides = document.querySelectorAll(".slide");
    let index = 0;
    let totalSlides = slides.length;
    let firstSlideShown = false;
    let marquee = document.getElementById("marquee");

    function nextSlide() {
        index = (index + 1) % totalSlides;
        slider.style.transform = `translateX(-${index * 100}%)`;

        // Show marquee after first slide transition
        if (index === 1 && !firstSlideShown) {
            marquee.style.display = "block";
            firstSlideShown = true;
        }
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds


    
});
