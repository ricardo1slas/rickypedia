const images = [
    "assets/77C2062D-21FF-4341-B7F6-95B4A5E624CD_1_105_c.jpeg",
];

let index = 0;

function changeBackground() {
    document.querySelector(".hero").style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length; // Loop back to first image after last
}

setInterval(changeBackground, 5000); // Change image every 5 seconds

let lastScrollTop = 0;
const navbar = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Scrolling Down - Hide the menu links
        navLinks.style.display = "none";
    } else {
        // Scrolling Up - Show the menu links
        navLinks.style.display = "flex";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});