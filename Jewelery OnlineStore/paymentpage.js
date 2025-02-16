// Retrieve copied content from localStorage
var copiedContent = localStorage.getItem("copiedContent");

if (copiedContent) {
   
    document.getElementById("contentocopy").innerHTML = copiedContent;
    
}


window.onload = function () {
    let savedItemCount = parseInt(localStorage.getItem('itemCount')) || 0;
    let savedTotalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0.00;
    let deliveryCost = savedTotalPrice > 1000 ? 0 : savedTotalPrice * 0.10;
    let finalPrice = savedTotalPrice + deliveryCost;

    document.getElementById('item-count').innerText = `x${savedItemCount}`;
    document.getElementById('total-price').innerText = `$${savedTotalPrice.toFixed(2)}`;
    document.getElementById('delivery-cost').innerText = `$${deliveryCost.toFixed(2)}`; 
    document.getElementById('final-price').innerText = `$${finalPrice.toFixed(2)}`;
};

function restrictCVV(input) {
    // Remove non-digit characters
    input.value = input.value.replace(/\D/g, '');
}


function confirmSubmission(event) {
    event.preventDefault(); // Prevents the form from submitting immediately

    var form = document.getElementById('paymentForm');

    const monthSelect = document.querySelector('[name="month"]');
    const yearSelect = document.querySelector('[name="year"]');

    const selectedMonth = monthSelect.value;
    const selectedYear = yearSelect.value;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = months.indexOf(selectedMonth);
    if (monthIndex === -1) {
        alert('Please select a valid month.');
        return;
    }

    const currentYear = new Date().getFullYear();
    const minYear = currentYear;
    const maxYear = currentYear + 10;
    if (selectedYear === "" || isNaN(selectedYear) || selectedYear < minYear || selectedYear > maxYear) {
        alert(`Please select a year between ${minYear} and ${maxYear}.`);
        return;
    }

    const currentDate = new Date();
    const expiryDate = new Date(selectedYear, monthIndex);

    // Check expiry date validity
    if (expiryDate < currentDate) {
        alert('The expiry date is invalid.');
        return;
    }

    if (form.checkValidity()) { // Checks if the form is valid
        let finalPrice = document.getElementById("final-price").innerHTML;
        if (confirm("Your total is " + finalPrice + ". Do you want to proceed?")) {
            alert("Thank you for your submission!");
            form.submit(); 
        } else {
            alert("Application withdrawn.");
        }
    } else {
        alert("Please fill out all required fields.");
    }
}



