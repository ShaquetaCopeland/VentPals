import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

function showError(msg) {
  const box = document.getElementById('errorBox');
  box.textContent = msg;
  box.classList.add('show');
}

document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('username').value.trim();
  const age = document.getElementById('age').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const parentEmail = document.getElementById('parentEmail').value.trim();

  if (password !== confirmPassword) {
    showError('Passwords do not match. Please try again.');
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = 'app-switcher.html';
  } catch (err) {
    showError(err.message);
  }
});
