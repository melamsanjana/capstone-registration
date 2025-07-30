
 document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from refreshing

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const termsAccepted = document.getElementById("terms").checked;

  console.log("Form submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("DOB:", dob);
  console.log("Accepted Terms:", termsAccepted);
});