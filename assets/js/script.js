
// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetID);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Toast alert system
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'vent-toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, duration);
}

// Future-proof interaction handlers
function initVentPalsSite() {
  console.log("VentPals Core JS loaded.");
}

// Ready
document.addEventListener('DOMContentLoaded', initVentPalsSite);
