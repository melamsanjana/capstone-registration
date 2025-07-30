// ----- helpers -----
const $ = (sel) => document.querySelector(sel);
const storageKey = "wd201-users";

function toISODate(d) { return d.toISOString().split("T")[0]; }

function setDobBounds() {
  const dob = $("#dob");
  const today = new Date();
  const max = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  const min = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());
  dob.max = toISODate(max);
  dob.min = toISODate(min);
}

function calcAge(dateStr) {
  const today = new Date();
  const dob = new Date(dateStr);
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

function showError(msg) {
  const p = $("#msg");
  p.textContent = msg;
  p.hidden = !msg;
}

// ----- storage -----
function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(storageKey, JSON.stringify(users));
}

// ----- table render -----
function render(users) {
  const tbody = $("#users-tbody");
  tbody.innerHTML = "";
  users.forEach((u) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.password}</td>
      <td>${u.dob}</td>
      <td>${u.terms ? "true" : "false"}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ----- form handling -----
function onSubmit(e) {
  e.preventDefault();
  showError("");

  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const password = $("#password").value;
  const dob = $("#dob").value;
  const terms = $("#terms").checked;

  if (!name || !email || !password || !dob) {
    showError("Please fill out all fields.");
    return;
  }
  const age = calcAge(dob);
  if (age < 18 || age > 55) {
    showError("Date of Birth must be between ages 18 and 55.");
    return;
  }
  if (!terms) {
    showError("You must accept the terms and conditions.");
    return;
  }

  const users = loadUsers();
  users.push({ name, email, password, dob, terms });
  saveUsers(users);
  render(users);

  // reset form (keep bounds)
  $("#registration-form").reset();
}

function init() {
  setDobBounds();
  render(loadUsers());
  $("#registration-form").addEventListener("submit", onSubmit);
}

document.addEventListener("DOMContentLoaded", init);