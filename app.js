const budgetBreakdown = document.querySelector(".budget-breakdown");
const minutesPDF = document.querySelector(".minutes-pdf");
const going = document.querySelector(".going");
const namesList = document.querySelector(".names-list");
const time = document.querySelector(".time");
const budgetBox = document.querySelector(".budget-box");

const modalNotes = document.querySelector(".modal-notes");
const modalMinutes = document.querySelector(".modal-minutes");
const notesBtn = document.querySelector(".notes-button");
const minutesBtn = document.querySelector(".minutes-button");
const closeBtn1 = document.querySelector(".close-button1");
const closeBtn2 = document.querySelector(".close-button2");

// Budget Breakdown
fetch("json/attendees.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        contribute = data.map(function(item) {
            return `<tr>
                        <td>${item.name}</td>
                        <td>${item.budget}</td>
                    </tr>`
        });

    header = `<tr>
                    <td><h4>Name</h4></td>
                    <td><h4>Contribution</h4></td>
              </tr>`;
    contribute = contribute.join("");
    budgetBreakdown.innerHTML = header + contribute;
    });

// Download Minutes
fetch("json/link.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        link = data.map(function(item) {
            return `<tr>
                        <td>${item.name}</td>
                        <td><a href="${item.link}" download="${item.download}">Download</a></td>
                    </tr>`
        });
    
    header = `<tr>
                <td><h4>Meeting</h4></td>
                <td><h4>Link</h4></td>
              </tr>`;
    link = link.join("");
    minutesPDF.innerHTML = header + link;
    });

// Modal
notesBtn.addEventListener("click", function() {
    modalNotes.classList.toggle("hidden");
});

closeBtn1.addEventListener("click", function() {
    modalNotes.classList.toggle("hidden");
});

minutesBtn.addEventListener("click", function() {
    modalMinutes.classList.toggle("hidden");
});

closeBtn2.addEventListener("click", function() {
    modalMinutes.classList.toggle("hidden");
});

// Going
fetch("json/attendees.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var num = 0;
        data.map(function(item) {
            num++;
        });
    
    text = `<h1>${num}</h1>
            <h2>PEOPLE ARE GOING</h2>`;
    going.innerHTML = text;
    })

// Attendees
fetch("json/attendees.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        attend = data.map(function(item) {
            return `<li>${item.name}</li>`;
        });
    
    attend = attend.join("");
    namesList.innerHTML = attend;
    });

// Details
fetch("json/time.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        details = data.map(function(item) {
            return `<div class="time-box">
                        <p>${item.title}</p>
                        <h1>${item.details}</h1>
                    </div>`
        });
    
    details = details.join("");
    time.innerHTML = details;
    });

// Food Budget
fetch("json/attendees.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var num = 0;
        price = data.map(function(item) {
            num += item.budget;
        });
    
    price = `<h1>${num}</h1>
             <h2>PESOS*</h2>`;
    budgetBox.innerHTML = price;
    
    })