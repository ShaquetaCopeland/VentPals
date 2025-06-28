// ========= VentPals Core Script =========

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Toast notification example
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'vent-toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, duration);
}

// Welcome message test
window.addEventListener('DOMContentLoaded', () => {
  console.log("VentPals Flock initialized.");
  loadFlockCards();
});

// Load flock data from JSON (if applicable)
function loadFlockCards() {
  const container = document.getElementById('flock-container');
  if (!container) return;

  fetch('data/flock.json')
    .then(response => response.json())
    .then(data => {
      container.innerHTML = ""; // Clear existing
      data.forEach(bird => {
        const card = document.createElement('div');
        card.classList.add('bird-card');
        card.innerHTML = `
          <img src="assets/images/${bird.image}" alt="${bird.name}" class="bird-image">
          <h3>${bird.name}</h3>
          <p class="bird-role">Flies for: ${bird.title}</p>
          <p class="bird-bio">${bird.bio}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Error loading flock:', err);
    });
}