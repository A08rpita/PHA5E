document.addEventListener("DOMContentLoaded", () => {
    // Smooth appearance animation for text
    gsap.to(".hero-text", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
    });

    // Smooth fade-in for images
    gsap.from(".hover-image", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
    });

    // Mouse-follow effect for images
    document.querySelectorAll(".hover-image").forEach((image) => {
        image.addEventListener("mousemove", (e) => {
            const { offsetX, offsetY } = e;
            const { offsetWidth, offsetHeight } = image;
            const moveX = (offsetX / offsetWidth - 0.5) * 15;
            const moveY = (offsetY / offsetHeight - 0.5) * 15;

            gsap.to(image, {
                x: moveX,
                y: moveY,
                duration: 0.3,
                ease: "power2.out",
            });
        });

        image.addEventListener("mouseleave", () => {
            gsap.to(image, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        });
    });

    // Hover effect: One image becomes fully visible, others fade
    document.querySelectorAll(".image-wrapper").forEach((wrapper) => {
        wrapper.addEventListener("mouseenter", () => {
            gsap.to(".hover-image", { filter: "grayscale(100%)", duration: 0.5 });
            gsap.to(wrapper.querySelector(".hover-image"), { filter: "grayscale(0%)", duration: 0.5 });
        });

        wrapper.addEventListener("mouseleave", () => {
            gsap.to(".hover-image", { filter: "grayscale(100%)", duration: 0.5 });
        });
    });
});
