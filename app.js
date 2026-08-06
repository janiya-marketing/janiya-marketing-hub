  // =====================================
// JANIYA Customer Marketing System
// =====================================

// ----------------------------
// Navigation
// ----------------------------
const menuButtons = document.querySelectorAll(".menu-btn");
const pages = document.querySelectorAll(".page");

menuButtons.forEach(button => {
    button.addEventListener("click", () => {

        menuButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        pages.forEach(page => page.classList.remove("active-page"));

        document
            .getElementById(button.dataset.section)
            .classList.add("active-page");
    });
});


// ----------------------------
// Customer Management
// ----------------------------

let customers = JSON.parse(localStorage.getItem("janiyaCustomers")) || [];
// Update Dashboard
function updateDashboard(){

    const totalCustomers = document.getElementById("totalCustomers");

    if(totalCustomers){
        totalCustomers.textContent = customers.length;
    }

}

const addCustomerBtn = document.getElementById("addCustomerBtn");
const customerForm = document.getElementById("customerForm");
const saveCustomer = document.getElementById("saveCustomer");
const customerList = document.getElementById("customerList");
const searchCustomer = document.getElementById("searchCustomer");


// Hide form when page opens
customerForm.style.display = "none";


// Open form
addCustomerBtn.addEventListener("click", () => {
    customerForm.style.display = "block";
});


// Save customer
saveCustomer.addEventListener("click", () => {

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const email = document.getElementById("customerEmail").value;
    const group = document.getElementById("customerGroup").value;

    if (name === "" || phone === "") {
        alert("Please enter customer name and phone number.");
        return;
    }

    const customer = {
        name,
        phone,
        email,
        group,
        joined: new Date().toLocaleDateString()
    };

    customers.push(customer);

localStorage.setItem(
    "janiyaCustomers",
    JSON.stringify(customers)
);

displayCustomers();
updateDashboard();
// Update dashboard when page loads
updateDashboard();

customerForm.style.display = "none";

    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("customerGroup").selectedIndex = 0;
    document.getElementById("customerNotes").value = "";

    alert("Customer saved successfully!");
});


// Display customers
function displayCustomers(list = customers) {

    customerList.innerHTML = "";

    list.forEach(customer => {

        customerList.innerHTML += `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.group}</td>
                <td>${customer.email}</td>
                <td>${customer.joined}</td>
            </tr>
        `;
    });
}


// Search customers
searchCustomer.addEventListener("keyup", () => {

    const text = searchCustomer.value.toLowerCase();

    const filtered = customers.filter(customer =>
        customer.name.toLowerCase().includes(text) ||
        customer.phone.toLowerCase().includes(text)
    );

    displayCustomers(filtered);

});


// Load saved customers
displayCustomers();
// Update Dashboard
function updateDashboard() {

    const totalCustomers = document.getElementById("totalCustomers");

    if (totalCustomers) {
        totalCustomers.textContent = customers.length;
    }

}

updateDashboard();

// =====================================
// Communication Center
// =====================================

const messageCustomer = document.getElementById("messageCustomer");
const messageText = document.getElementById("messageText");
const sendWhatsApp = document.getElementById("sendWhatsApp");
const sendSMS = document.getElementById("sendSMS");
const sendAllSMS = document.getElementById("sendAllSMS");

// Fill customer dropdown
function loadCustomerList() {

    messageCustomer.innerHTML =
        '<option value="">Select Customer</option>';

    customers.forEach((customer, index) => {

        messageCustomer.innerHTML += `
            <option value="${index}">
                ${customer.name} (${customer.phone})
            </option>
        `;

    });

}

loadCustomerList();


// Refresh dropdown after adding a customer
const oldDisplayCustomers = displayCustomers;

displayCustomers = function(list = customers) {
    oldDisplayCustomers(list);
    loadCustomerList();
};


// Send WhatsApp message
sendWhatsApp.addEventListener("click", () => {

    if (messageCustomer.value === "") {
        alert("Please select a customer.");
        return;
    }

    if (messageText.value.trim() === "") {
        alert("Please type a message.");
        return;
    }

    const customer = customers[messageCustomer.value];

    const phone = customer.phone.replace(/\D/g, "");

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(messageText.value)}`;

    window.open(url, "_blank");

});



 
// Send SMS message

sendSMS.addEventListener("click", () => {

    if (messageCustomer.value === "") {
        alert("Please select a customer.");
        return;
    }


    if (messageText.value.trim() === "") {
        alert("Please write a message.");
        return;
    }


    const customer = customers[messageCustomer.value];


    const phone = customer.phone;


    const smsLink =
        `sms:${phone}?body=${encodeURIComponent(messageText.value)}`;


    window.open(smsLink, "_blank");

});
// Send SMS to all customers

sendAllSMS.addEventListener("click", () => {

    if (messageText.value.trim() === "") {
        alert("Please write a message.");
        return;
    }


    if (customers.length === 0) {
        alert("No customers available.");
        return;
    }


    customers.forEach(customer => {

        const phone = customer.phone;

        const smsLink =
            `sms:${phone}?body=${encodeURIComponent(messageText.value)}`;

        window.open(smsLink, "_blank");

    });

});

// Load dashboard count when opening page
updateDashboard();
