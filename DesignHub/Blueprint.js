document.addEventListener("DOMContentLoaded", function () {
    const blogSection = document.querySelector(".blog-section");
    const blogImages = document.querySelectorAll(".blog-img");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    blogImages.forEach((img) => {
                        img.classList.add("in-view");
                    });
                } else {
                    blogImages.forEach((img) => {
                        img.classList.remove("in-view");
                    });
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(blogSection);
});