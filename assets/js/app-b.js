// DOM Initialization
const contactBtn = document.querySelector(".contact-btn");
const modal = document.querySelector(".modal");
const cover = document.querySelector(".cover");
const exitBtn = document.querySelector(".exit");
const notesContainer = document.querySelector(".notes-container");

// CONTACT
contactBtn.addEventListener("click", function() {
    if(modal.classList.contains("hide")) {
        modal.classList.remove("hide");
        cover.classList.remove("hide");
    };
});

exitBtn.addEventListener("click", function() {
    if(!modal.classList.contains("hide")) {
        modal.classList.add("hide");
        cover.classList.add("hide");
    };
});

// PLAN B NOTES
fetch("../json/b-notes.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        notes = data.map(function(item) {
            return `<div class="note">
                        <h4>${item.title}</h4>
                        <p>${item.details}</p>
                    </div>`});
        
    notes = notes.join("");
    notesContainer.innerHTML = notes;
    });