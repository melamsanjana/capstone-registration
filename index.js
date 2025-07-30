
 document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the page from refreshing

  // Get values from form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const termsAccepted = document.getElementById('terms').checked;

  // Output the form data to the console
  console.log("Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Date of Birth:", dob);
  console.log("Accepted Terms & Conditions:", termsAccepted);

  // Optional: show an alert
  alert("Form submitted successfully!");
});