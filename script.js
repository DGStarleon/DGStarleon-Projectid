setTimeout(function () {
    alert("Selamat Datang di Toko Online Kami");
}, 3000);

const heroText = document.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57", "#3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
    heroText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeHeroTextColor, 2000);
let currentImageIndex = 0;
const images = ["https://scontent.fcgk32-1.fna.fbcdn.net/v/t39.30808-6/455424988_122171239292195955_3156477280960972887_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGHm_pv1KBaJytsQm8rDg9iAHpo_0FG7VwAemj_QUbtXGsPVc0pIwWsUSNm82NkH0T69iro3_4uJ0nSmkhgorMt&_nc_ohc=ryZPwMFUciMQ7kNvgH_U0h7&_nc_ht=scontent.fcgk32-1.fna&oh=00_AYC8gDgF9Zku0UsgzLOkl7Gd_zUGHLJ0Vh1Yq78BUH0T6A&oe=66DE2BB5", "https://scontent.fcgk32-1.fna.fbcdn.net/v/t39.30808-6/455746074_122171239376195955_7549034585695606824_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFpoYlWsphDECMzPzWz3lAy3iCPDxRrU8XeII8PFGtTxTlNHj2DEpUlR2ex5bGzIY71aqYpzoU3rdroP9AWk9gL&_nc_ohc=rFoKqzDcjjcQ7kNvgG2nV8l&_nc_ht=scontent.fcgk32-1.fna&oh=00_AYBJy5K0QVaTEp8lhaQc_hz2NmoLqb69APboSHujvU4zFA&oe=66DE3555https://scontent.fcgk32-1.fna.fbcdn.net/v/t39.30808-6/455746074_122171239376195955_7549034585695606824_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFpoYlWsphDECMzPzWz3lAy3iCPDxRrU8XeII8PFGtTxTlNHj2DEpUlR2ex5bGzIY71aqYpzoU3rdroP9AWk9gL&_nc_ohc=rFoKqzDcjjcQ7kNvgG2nV8l&_nc_ht=scontent.fcgk32-1.fna&oh=00_AYBJy5K0QVaTEp8lhaQc_hz2NmoLqb69APboSHujvU4zFA&oe=66DE3555"];

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector(
        "#hero"
    ).style.backgroundImage = `url('${images[currentImageIndex]}')`;
}
setInterval(changeHeroImage, 2000);

const productImages = document.querySelectorAll(".product-card img");

productImages.forEach((image)=>{
    image.addEventListener("click", () =>{
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.5s";
    });
    image.addEventListener("mouseleave", ()=> {
        image.style.transform = "scale(1)";
    });
    });

    document.querySelectorAll(".cta").forEach(function (button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Terima kasih telah membeli produk ini ^_^!");
        });
    });

const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "^";
scrollToTopBtnd.id= "scrollTotopBtn";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll",() => {
   if (window.scrollY > 100) {
     scrollToTopBtn.style.display = "block";
} else {
    scrollToTopBtn.style.display = "none";
}
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
