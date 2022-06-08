// DOM Initialization
const rulesContainer = document.querySelector(".rules-container");
const individualTable = document.querySelector(".individual");
const foodTable =document.querySelector(".food");
const notesContainer = document.querySelector(".notes-container");

// RULES
fetch("../json/rizal-rules.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        rules = data.map(function(item) {
            return `<li>${item}</li>`});
        
        rules = rules.join("");
        rulesContainer.innerHTML = rules;
    });

// PRICING
fetch("../json/rizal-pricing.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        indiv = data.map(function(item) {
            return `<tr>
                        <td><p>${item.type}</p></td>
                        <td><p>${item.time}</p></td>
                        <td><p>${item.cottage}</p></td>
                        <td><p>${item.transpo}</p></td>
                        <td><p>${item.food}</p></td>
                        <td><p>${item.time + item.cottage + item.transpo + item.food}</p></td>
                    </tr>`});
        
        label = `<tr>
                    <td><h3>Option Type</h3></td>
                    <td><h3>Time (Day/Night)</h3></td>
                    <td><h3>Cottage</h3></td>
                    <td><h3>Transportation</h3></td>
                    <td><h3>Food</h3></td>
                    <td><h3>TOTAL</h3></td>
                </tr>`;
        
        indiv = indiv.join("");
        individualTable.innerHTML = label + indiv;
    });

// FOOD
fetch("../json/rizal-pricing.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        attendees = 8;
        food = data.map(function(item) {
            return `<tr>
                        <td><p>${item.type}</p></td>
                        <td><p>${attendees * item.food}</p></td>
                    </tr>`});
        
        label = `<tr>
                    <td><h3>Option Type</h3></td>
                    <td><h3>Total Food Finance</h3></td>
                </tr>`;
        
        food = food.join("");
        foodTable.innerHTML = label + food;
    });

// NOTES
fetch("../json/rizal-notes.json")
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