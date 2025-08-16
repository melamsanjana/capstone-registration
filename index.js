document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the page from refreshing

  // Get values from form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const termsAccepted = document.getElementById('terms').checked ? "Yes" : "No";

  // Add entry into the "Entries" table
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
});