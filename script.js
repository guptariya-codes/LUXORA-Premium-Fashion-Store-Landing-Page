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
// menu btn
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
const links = document.querySelectorAll("#nav-links a");

links.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Add to Cart Notification

const cartButtons = document.querySelectorAll(".product-card button");
const notification = document.querySelector("#cart-notification");

cartButtons.forEach(button => {

    button.addEventListener("click", function () {

        const productName =
            this.parentElement.querySelector("h3").textContent;

        notification.textContent = `✅ ${productName} added to cart!`;

        notification.classList.add("show");

        setTimeout(function () {
            notification.classList.remove("show");
        }, 2000);

    });

});
