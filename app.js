// DOM Initialization
const contactBtn = document.querySelector(".contact-btn");
const modal = document.querySelector(".modal");
const cover = document.querySelector(".cover");
const exitBtn = document.querySelector(".exit");
const goingSection = document.querySelector(".going-section");
const faqSection = document.querySelector(".faq-section");
const planBatangas = document.querySelector(".plan-batangas");
const planRizal = document.querySelector(".plan-rizal");
const planNCR = document.querySelector(".plan-ncr");


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

// GOING
fetch("assets/json/going.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        going = data.map(function(item) {
            return `<p>${item}</p>`});
    
    going = going.join("");
    goingSection.innerHTML = going;
    });

// FAQ
fetch("assets/json/faq.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        faq = data.map(function(item) {
            return `<div class="faq">
                        <h4>${item.title}</h4>
                        <p>${item.detail}</p>
                    </div>` });
    
    faq = faq.join("");
    faqSection.innerHTML = faq;
    });

// PLAN SECTIONS
planBatangas.addEventListener("click", function() {
    location.href = "assets/html/plan-a.html";
});

planRizal.addEventListener("click", function() {
    location.href = "assets/html/plan-b.html";
});

planNCR.addEventListener("click", function() {
    location.href = "assets/html/plan-c.html";
});