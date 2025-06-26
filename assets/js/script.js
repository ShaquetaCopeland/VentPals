window.addEventListener('DOMContentLoaded', () => {
  initFlockFeatures();

  const container = document.getElementById('flock-container');
  if (container) {
    fetch('data/flock.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(bird => {
          const card = document.createElement('div');
          card.classList.add('bird-card');

          card.innerHTML = `
            <img src="assets/images/${bird.image}" alt="${bird.name}">
            <h3>${bird.name}</h3>
            <p><em>${bird.title}</em></p>
            <p>${bird.bio}</p>
          `;

          container.appendChild(card);
        });
      })
      .catch(err => {
        console.error('Error loading flock:', err);
      });
  }
});
