
 const form = document.getElementById("regForm");
const table = document.getElementById("dataTable");
const tbody = table.querySelector("tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("terms").checked;

  const row = tbody.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = email;
  row.insertCell(2).innerText = password;
  row.insertCell(3).innerText = dob;
  row.insertCell(4).innerText = terms ? "Yes" : "No";

  table.style.display = "table"; // Show the table only after submission

  form.reset(); // Optional: Reset form after submission
});