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

// Placeholder: VentPals toast alerts (example use)
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

// Example usage:
// showToast("Welcome back to the flock!");

// Future-proof for flock behaviors
function initFlockFeatures() {
  console.log("VentPals Flock initialized.");
  // Future interactivity like unlocking badges, chat toggles, avatar animations
}

// Load all startup functions
window.addEventListener('DOMContentLoaded', () => {
  initFlockFeatures();
});