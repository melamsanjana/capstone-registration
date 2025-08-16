
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the page from refreshing

  // Get values from form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const termsAccepted = document.getElementById('terms').checked ? "Yes" : "No";

  // Output the form data to the console
  console.log("Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Date of Birth:", dob);
  console.log("Accepted Terms & Conditions:", termsAccepted);

  // Add entry into the table
  const tableBody = document.querySelector('#entriesTable tbody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${termsAccepted}</td>
  `;

  tableBody.appendChild(newRow);

  // Reset the form
  document.getElementById('registrationForm').reset();

  // Optional alert
  alert("Form submitted successfully!");
});