let welcomeSlides = document.querySelectorAll(".welcome-slides");

let j = 0;

function slides() {
    for (let i = 0; i < welcomeSlides.length; i++) {
        welcomeSlides[i].style.opacity = 0;
    }

    welcomeSlides[j].style.opacity = 1;

    if (j < welcomeSlides.length - 1) {
        j++;
    } 
    else {
        j = 0;
    }
}

setInterval(slides, 2000);