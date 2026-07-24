document
    .getElementById("explore-btn")
    .addEventListener("click", () => {

        document
            .getElementById("announcements")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


const resourceCards = document.querySelectorAll(".resource-card");

const modal = document.getElementById("modal");

const modalTitle = document.getElementById("modal-title");

const modalDescription = document.getElementById("modal-description");

const closeModal = document.getElementById("close-modal");

resourceCards.forEach(card => {

    card.addEventListener("click", () => {

        modalTitle.textContent = card.dataset.title;

        modalDescription.textContent = card.dataset.description;

        modal.style.display = "flex";

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.style.display = "none";

    }

});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});


const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme","dark");

    }

    else{

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme","light");

    }

});