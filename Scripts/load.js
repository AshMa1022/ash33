const navBar = document.querySelector('nav');
    const isDesktopView = window.matchMedia("(min-width: 768px)").matches;
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home.html';
function loadNav(){
    
    console.log(isDesktopView);
    // Only toggle the navigation bar if we're not in desktop view
    if (!isHomePage || !isDesktopView) {
        if (navBar.style.top === '50vh'||(navBar.style.top === '70vh')){
            navBar.style.top = '100vh'; // Move out
        } else {
            if(isDesktopView){
                navBar.style.top = '70vh';
            }
            else{
                navBar.style.top = '50vh'; // Move in
            }
        }
    }
    

}
function startAutoScroll() {
    const gallery = document.getElementById('scroll');
    let scrollAmount = 0;
    const step = 1; // Number of pixels to scroll each step
    const interval = 20; // Milliseconds between each scroll step

    function scrollStep() {
        if(gallery.scrollLeft >= (gallery.scrollWidth - gallery.clientWidth)) {
            // Reset scroll to start
            gallery.scrollLeft = 0;
            scrollAmount = 0;
        } else {
            gallery.scrollLeft += step;
            scrollAmount += step;
            console.log(gallery.clientWidth);
            console.log(gallery.scrollWidth);
        }
    }

    setInterval(scrollStep, interval);
}


if(isHomePage && isDesktopView){
    navBar.style.top = '70vh'; 
    window.onload = function() {
        // startAutoScroll();
    };

}


let currentIndex = 0; // To keep track of the current image

function openModal(clickedImage) {
    console.log("click");
    const modal = document.getElementById('imageModal');
    const enlargedImg = document.getElementById('enlargedImage');
    enlargedImg.src = clickedImage.src;
    modal.style.display = "block";

    // Find index of clicked image
    const images = document.querySelector('.imagery').getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        if (images[i].src === clickedImage.src) {
            currentIndex = i;
            break;
        }
    }
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

function changeImage(step) {
    const images = document.querySelector('.imagery').getElementsByTagName('img');
    currentIndex += step;

    // Loop back if out of range
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.getElementById('enlargedImage').src = images[currentIndex].src;
}