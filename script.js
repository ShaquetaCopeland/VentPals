document.querySelector('.btn').addEventListener('click', function() {
  alert('VentPals is coming soon! Stay tuned.');
});body {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  padding: 0;
  background: #f9f9f9;
  color: #333;
}

nav {
  background: #fff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

.hero {
  padding: 80px 20px;
  text-align: center;
  background: #4fa1ff;
  color: white;
}

.hero h1 {
  font-size: 2.5rem;
}

.hero .btn {
  display: inline-block;
  margin-top: 20px;
  background: white;
  color: #4fa1ff;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
}

.contact {
  padding: 40px 20px;
  background: #fff;
  max-width: 600px;
  margin: 0 auto;
}

form input, form textarea, form button {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-family: 'Quicksand', sans-serif;
}

form button {
  background-color: #4fa1ff;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

form button:hover {
  background-color: #3783d8;
}

footer {
  text-align: center;
  padding: 20px;
  font-size: 0.9rem;
  background: #f1f1f1;
}

