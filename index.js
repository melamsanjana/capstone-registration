const form = document.getElementById('registrationForm');
const tableBody = document.getElementById('userTableBody');

window.onload = () => {
  loadUsers();
};

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptTerms = document.getElementById('acceptTerms').checked;

  const age = calculateAge(dob);
  if (age < 18 || age > 55) {
    alert('Age must be between 18 and 55.');
    return;
  }

  const user = { name, email, password, dob, acceptTerms };

  let users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  appendUserToTable(user);
  form.reset();
});

function loadUsers() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.forEach(user => appendUserToTable(user));
}

function appendUserToTable(user) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
    <td>${user.dob}</td>
    <td>${user.acceptTerms}</td>
  `;
  tableBody.appendChild(row);
}
