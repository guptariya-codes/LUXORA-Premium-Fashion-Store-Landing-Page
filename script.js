/* ================= SCROLL TO TOP ================= */

const scrollTopBtn = document.querySelector("#scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

const links = document.querySelectorAll("#nav-links a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================= CART NOTIFICATION ================= */

const notification = document.querySelector("#cart-notification");

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const productName =
            this.parentElement.querySelector("h3").textContent;

        notification.textContent =
            `✅ ${productName} added to cart!`;

        notification.classList.add("show");

        setTimeout(() => {

            notification.classList.remove("show");

        }, 2000);

    });

});


/* ================= PRODUCTS ================= */

const products = [

    {
        id: "1",
        name: "Premium Beige Blazer",
        price: 3999
    },

    {
        id: "2",
        name: "Luxury Handbag",
        price: 2499
    },

    {
        id: "3",
        name: "Leather Oxford Shoes",
        price: 5299
    },

    {
        id: "4",
        name: "Classic Wrist Watch",
        price: 4499
    }

];


/* ================= CART ================= */

const buttons = document.querySelectorAll(".add-cart");
const cartCounter = document.querySelector("#cart-count");

const cartBtn = document.querySelector("#cart-btn");
const cartUI = document.querySelector(".cartUI");
const closeCart = document.querySelector(".close-cart");

let cart = [];
let cartCount = 0;

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const productId = button.dataset.id;

        const selectedProduct = products.find((item) => {

            return item.id === productId;

        });

        const index = cart.findIndex((item) => {

            return item.id === productId;

        });

        if (index === -1) {

            cart.push({

                ...selectedProduct,
                quantity: 1

            });

        } else {

            cart[index].quantity++;

        }

        console.log(cart);

        cartCount++;

        cartCounter.textContent = cartCount;

        updateCartUI();

    });

});


/* ================= OPEN CART ================= */

cartBtn.addEventListener("click", () => {

    cartUI.classList.add("active");

});
document.querySelector(".checkout-btn").addEventListener("click", () => {

    alert("Checkout feature coming soon!");

});

/* ================= CLOSE CART ================= */

closeCart.addEventListener("click", () => {

    cartUI.classList.remove("active");

});
// cart products
const cartItems = document.querySelector(".cart-items");

function updateCartUI() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product) => {

        const cartCard = document.createElement("div");

        cartCard.classList.add("cart-item");

        cartCard.innerHTML = `
            <h4>${product.name}</h4>

            <p>₹${product.price}</p>

            <div class="quantity-box">

                <button class="minus-btn">−</button>

                <span>${product.quantity}</span>

                <button class="plus-btn">+</button>

            </div>

            <button class="remove-btn">Remove</button>
        `;

        cartItems.appendChild(cartCard);

        /* ---------- Remove Button ---------- */

        const removeBtn = cartCard.querySelector(".remove-btn");

        removeBtn.addEventListener("click", () => {

            cart = cart.filter((item) => {
                return item.id !== product.id;
            });

            cartCount -= product.quantity;
            cartCounter.textContent = cartCount;

            updateCartUI();

        });

        /* ---------- Plus Button ---------- */

        const plusBtn = cartCard.querySelector(".plus-btn");

        plusBtn.addEventListener("click", () => {

            product.quantity++;

            cartCount++;

            cartCounter.textContent = cartCount;

            updateCartUI();

        });

        /* ---------- Minus Button ---------- */

        const minusBtn = cartCard.querySelector(".minus-btn");

        minusBtn.addEventListener("click", () => {

            product.quantity--;

            cartCount--;

            if (product.quantity === 0) {

                cart = cart.filter((item) => {
                    return item.id !== product.id;
                });

            }

            cartCounter.textContent = cartCount;

            updateCartUI();

        });

        total += product.price * product.quantity;

    });

    document.querySelector(".cart-footer h3").textContent =
        `Total: ₹${total}`;

}
