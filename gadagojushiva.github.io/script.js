let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    nav.classList.toggle("nav-scroll", window.scrollY > 0)
});
let AllNavLinkA = document.querySelectorAll(".nav-links li a");
AllNavLinkA.forEach(e => {
    e.addEventListener("click", () => {
        removeActive(), e.classList.add("acitive")
    })
});
const removeActive = () => AllNavLinkA.forEach(e => {
    e.classList.remove("acitive")
});
let menuBars = document.querySelector("nav button"),
    navlinks = document.querySelector(".nav-links");
menuBars.addEventListener("click", () => {
    navlinks.classList.toggle("nav-link-block")
}), document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    var l = document.getElementById("custom-message");
    l.style.display = "block", document.body.addEventListener("click", function() {
        l.style.display = "none"
    }, {
        once: !0
    })
});

function redirectToMaintenance() {
    alert("Website is currently under maintenance. Please try again later.");
  }