/*scroll button*/
const scrollTopBtn = document.querySelector("#scrollTopBtn");
window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    }
    else {
    scrollTopBtn.style.display = "none";
    }
});
scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});