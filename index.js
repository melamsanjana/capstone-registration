const form = document.getElementById("registrationForm");
const tableBody = document.querySelector("#entriesTable tbody");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload

  // get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("terms").checked ? "Yes" : "No";

  // create new row
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${terms}</td>
  `;

  // append row to table
  tableBody.appendChild(newRow);

  // reset form
  form.reset();
});