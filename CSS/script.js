document.getElementById('ventForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const vent = document.getElementById('ventInput').value.trim();
  const responseBox = document.getElementById('responseMessage');

  if (!vent) {
    responseBox.textContent = "Please write something before submitting.";
    responseBox.style.color = "#d9534f";
    responseBox.classList.remove('hidden');
    return;
  }

  responseBox.textContent = "Thank you for sharing. You’re not alone in this.";
  responseBox.style.color = "#3c763d";
  responseBox.classList.remove('hidden');

  document.getElementById('ventForm').reset();
});
