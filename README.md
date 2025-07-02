<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Fixit - Fast, Reliable Home Repair Services in Noida, Delhi NCR">
  <title>Fixit - Home Repair Services</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }
    body {
      background: linear-gradient(to right, #f0f4f8, #d9e2ec);
      padding: 20px;
    }
    header {
      text-align: center;
      padding: 20px;
    }
    header h1 {
      font-size: 2.5rem;
      color: #2a4365;
    }
    header p {
      font-size: 1rem;
      color: #4a5568;
    }
    .search-bar {
      margin: 30px auto;
      max-width: 800px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .search-bar input {
      flex: 1 1 300px;
      padding: 10px;
      border: 2px solid #cbd5e0;
      border-radius: 8px;
    }
    .search-bar button {
      padding: 10px 20px;
      background-color: #3182ce;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    .services, .experts {
      margin: 40px auto;
      max-width: 1000px;
    }
    .services h2, .experts h2 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: #2d3748;
    }
    .service-grid, .expert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    .card {
      background: white;
      border-radius: 16px;
      padding: 15px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      text-align: center;
    }
    .card img {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 12px;
    }
    .card h3 {
      margin-top: 10px;
      font-size: 1.1rem;
      color: #2a4365;
    }
    .card p {
      font-size: 0.9rem;
      color: #4a5568;
    }
    .stars {
      color: gold;
      margin: 5px 0;
    }
    .whatsapp-btn {
      background-color: #25D366;
      color: white;
      padding: 8px 12px;
      border: none;
      border-radius: 8px;
      margin-top: 10px;
      text-decoration: none;
      display: inline-block;
    }
    footer {
      text-align: center;
      padding: 20px;
      margin-top: 50px;
      font-size: 0.9rem;
      color: #718096;
    }
  </style>
</head>
<body>

  <header>
    <h1>Fixit</h1>
    <p>Reliable Home Repair Services in Noida & Delhi NCR</p>
  </header>

  <!-- 🔍 Search Box -->
  <div class="search-bar">
    <input type="text" id="searchInput" placeholder="Search location (e.g., Noida, Delhi, Sec 62)" />
    <button onclick="filterExperts()">Search</button>
  </div>

  <!-- 💼 Services -->
  <section class="services">
    <h2>Popular Services</h2>
    <div class="service-grid">
      <div class="card"><h3>AC Repair</h3></div>
      <div class="card"><h3>Fridge Repair</h3></div>
      <div class="card"><h3>Electrician</h3></div>
      <div class="card"><h3>Plumber</h3></div>
      <div class="card"><h3>Car Mechanic</h3></div>
      <div class="card"><h3>Bike Repair</h3></div>
    </div>
  </section>

  <!-- 🧑‍🔧 Experts -->
  <section class="experts">
    <h2>Top Repair Experts</h2>
    <div class="expert-grid">
      <div class="card" data-location="Noida Sec 62">
        <img src="https://via.placeholder.com/200x120" alt="Expert 1" />
        <h3>Rahul Singh</h3>
        <p>AC Mechanic - Noida Sec 62</p>
        <div class="stars">⭐⭐⭐⭐⭐</div>
        <a href="https://wa.me/919999999999" class="whatsapp-btn">WhatsApp</a>
      </div>

      <div class="card" data-location="Greater Noida West">
        <img src="https://via.placeholder.com/200x120" alt="Expert 2" />
        <h3>Amit Kumar</h3>
        <p>Electrician - Greater Noida West</p>
        <div class="stars">⭐⭐⭐⭐</div>
        <a href="https://wa.me/918888888888" class="whatsapp-btn">WhatsApp</a>
      </div>

      <div class="card" data-location="Delhi Laxmi Nagar">
        <img src="https://via.placeholder.com/200x120" alt="Expert 3" />
        <h3>Mohit Verma</h3>
        <p>Fridge Repair - Delhi Laxmi Nagar</p>
        <div class="stars">⭐⭐⭐⭐</div>
        <a href="https://wa.me/917777777777" class="whatsapp-btn">WhatsApp</a>
      </div>

      <div class="card" data-location="Noida Sec 63">
        <img src="https://via.placeholder.com/200x120" alt="Expert 4" />
        <h3>Sachin Rana</h3>
        <p>Bike Mechanic - Noida Sec 63</p>
        <div class="stars">⭐⭐⭐⭐⭐</div>
        <a href="https://wa.me/916666666666" class="whatsapp-btn">WhatsApp</a>
      </div>
    </div>
  </section>

  <!-- 📝 Technician Join Button -->
  <section style="text-align: center; margin-top: 50px;">
    <h2>Are you a technician?</h2>
    <p>List yourself for FREE on Fixit and get more customers</p>
    <a href="https://forms.gle/xyz123" target="_blank"
       style="padding: 12px 20px; background-color: #38A169; color: white; text-decoration: none; border-radius: 8px;">
      Submit Your Details
    </a>
  </section>

  <!-- 🔻 Footer -->
  <footer>
    &copy; 2025 Fixit | Made for Noida, Delhi NCR
  </footer>

  <!-- ✅ JavaScript for Location Filtering -->
  <script>
    function filterExperts() {
      const input = document.getElementById('searchInput').value.toLowerCase();
      const cards = document.querySelectorAll('.expert-grid .card');

      cards.forEach(card => {
        const location = card.getAttribute('data-location').toLowerCase();
        if (location.includes(input)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>

</body>
</html>
