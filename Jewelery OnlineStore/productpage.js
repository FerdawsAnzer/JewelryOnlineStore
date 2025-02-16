

function copyCont(id) {
    var content = document.getElementById(id).innerHTML;
    
    var existingContent = localStorage.getItem("copiedContent") || "";
    
    // Append new content to existing content
    var updatedContent = existingContent + content;
    
    // Store updated content in localStorage
    localStorage.setItem("copiedContent", updatedContent);
}
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
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
  
    if (expiryDate < currentDate) {
      alert('The expiry date is invalid.');
    }
  });