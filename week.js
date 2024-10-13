document.addEventListener("DOMContentLoaded", function () {
    const bgImages = [
        "url('../images/bg1.jpg')",
        "url('../images/bg2.jpg')",
        "url('../images/bg3.jpg')",
        "url('../images/bg4.jpg')",
        "url('../images/bg5.jpg')",
        "url('../images/bg6.jpg')",
        "url('../images/bg7.jpg')",
    ];

    const bgImageElement = document.createElement("div");
    bgImageElement.className = "bg-image";
    document.body.appendChild(bgImageElement);

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const bgIndex = Math.floor((scrollPosition / totalHeight) * bgImages.length);

        bgImageElement.style.backgroundImage = bgImages[bgIndex];
    });
});
