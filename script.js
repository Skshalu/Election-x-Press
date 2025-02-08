document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a"); // Updated selector

    // Smooth Scroll Effect
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed navbar height
                    behavior: "smooth",
                });
            }
        });
    });

    // Highlight Active Section on Scroll
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;

        sections.forEach((section) => {
            let sectionTop = section.offsetTop - 60; // Adjust based on your header height
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});
