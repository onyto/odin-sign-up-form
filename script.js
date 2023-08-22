const form = document.querySelector("form");
const pw1 = document.getElementById("pw-1");
const pw2 = document.getElementById("pw-2");
const pwError = document.getElementById("pwError");

pw2.addEventListener("input", () => {
  if (pw1.value !== pw2.value) {
    pw1.className = "invalid";
    pw2.className = "invalid";

    pwError.textContent = "* Passwords do not match";
  } else {
    pw1.className = "valid";
    pw2.className = "valid";

    pwError.textContent = "";
  }
});

form.addEventListener("submit", (event) => {
  if (pw1.value !== pw2.value) {
    event.preventDefault();

    pw1.className = "invalid";
    pw2.className = "invalid";

    pwError.textContent = "* Passwords do not match";
  } else {
    pw1.className = "valid";
    pw2.className = "valid";

    pwError.textContent = "";
  }
});
