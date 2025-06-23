// Fetch and render the flock
fetch('data/flock.json')
  .then(response => response.json())
  .then(flock => {
    const container = document.getElementById('flock-container');

    flock.forEach(bird => {
      // Pick a random image
      const image = bird.images[Math.floor(Math.random() * bird.images.length)];

      // Create bird card
      const birdDiv = document.createElement('div');
      birdDiv.className = 'bird-card';
      birdDiv.innerHTML = `
        <img src="${image}" alt="${bird.name}" class="bird-img">
        <h3>${bird.name}</h3>
        <p>“Flies for: ${bird.fliesFor}”</p>
      `;
      container.appendChild(birdDiv);
    });
  })
  .catch(error => console.error('Error loading flock:', error));