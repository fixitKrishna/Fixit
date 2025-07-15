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
