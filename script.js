document
    .getElementById("explore-btn")
    .addEventListener("click", () => {

        document
            .getElementById("announcements")
            .scrollIntoView({
                behavior: "smooth"
            });

    });