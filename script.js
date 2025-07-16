function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let found = false;

  cards.forEach(card => {
    const service = card.getAttribute("data-service").toLowerCase();
    const location = card.getAttribute("data-location").toLowerCase();

    if (service.includes(input) || location.includes(input)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  // Show service list only if there's a match
  document.getElementById("service-list").style.display = found ? "block" : "none";
  
}
// Auto detect location on page load
window.onload = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const locationInput = document.getElementById("location");
      if (locationInput) {
        locationInput.value = "Lat: " + position.coords.latitude + ", Lon: " + position.coords.longitude;
      }
    });
  }
};

function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const location = document.getElementById("location").value;

  if (!name || !phone || !service || !location) {
    alert("Please fill all fields");
    return;
  }

  const workerNumber = "91XXXXXXXXXX"; // Replace with actual number later
  const msg = `New Fixit Job:%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ALocation: ${location}`;
  const whatsappLink = `https://wa.me/${workerNumber}?text=${msg}`;

  window.open(whatsappLink, "_blank");
}b 
