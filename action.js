let welcomeSlides = document.getElementById("slideshow");

let j = 0;

function slides() {
    for (let i = 0; i < slideshow.length; i++) {
        welcomeSlides[i].style.opacity = 0;
    }

    slideshow[j].style.opacity = 1;

    if (j < slideshow.length - 1) {
        j++;
    } 
    else {
        j = 0;
    }
}

setInterval(slides, 2000);


