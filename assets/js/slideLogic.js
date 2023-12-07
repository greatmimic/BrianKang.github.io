




let slideIndex = 1;
let slideInterval;

function startSlideShow() {
    showSlides(slideIndex);
    slideInterval = setInterval(function() {
        showSlides(slideIndex += 1);
    }, 5000); // 5 seconds
}

function plusSlides(n) {
    clearInterval(slideInterval); 
    showSlides(slideIndex += n);
    startSlideShow();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startSlideShow(); 
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


startSlideShow();
