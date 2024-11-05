// Display a welcome message on page load
document.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to the Ikigugu Group Portfolio!");
});

// Form validation for Contact Form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
  } else {
    alert("Please fill out all fields.");
  }
});
