// DOM Initialization
const planSection = document.querySelector(".plan-section");
const plan = document.getElementsByClassName("plan");

const goingSection = document.querySelector(".going-section");
const faqSection = document.querySelector(".faq-section");

// PLANS
fetch("assets/json/index-plans.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        plans = data.map(function(item) {
            return `<div class="plan ${item.title}">
                        <div class="title">
                            <h3>Plan ${item.index}:</h3>
                            <h2>${item.title.toUpperCase()}</h2>
                        </div>
                    </div>`});

        plans = plans.join("");
        planSection.innerHTML = plans;

        setTimeout(function() {
            for(i = 0; i < data.length; i++) {
                Array.from(plan).forEach(function(item) {
                    if(item.classList[1] == data[i].title) {
                        var link = data[i].link;
                        item.style.backgroundImage = "url(assets/images/" + String(data[i].image) + ")";
                        
                        item.addEventListener("click", function() {
                            location.href = "assets/html/" + String(link);
                        });
                    };
                }); 
            };
        }, 250);
    });

// GOING
fetch("assets/json/index-going.json")
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
fetch("assets/json/index-faq.json")
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