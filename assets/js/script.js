.flock-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.bird-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
}

.bird-card:hover {
  transform: scale(1.05);
}

.bird-image {
  max-width: 100%;
  border-radius: 10px;
}

.bird-role {
  font-style: italic;
  color: #4a7c59;
  margin-top: 0.5rem;
}

.bird-bio {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}
