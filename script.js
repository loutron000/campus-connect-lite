document
    .getElementById("explore-btn")
    .addEventListener("click", () => {

        document
            .getElementById("announcements")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeToggle.textContent = "☀️";

    }

    else{

        themeToggle.textContent = "🌙";

    }

});