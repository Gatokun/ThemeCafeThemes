document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
      const targetUrl = card.getAttribute('url');
      window.location.href = targetUrl;
    });
  });

function filterCards() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const cards = document.querySelectorAll(".grid.cards .card");

    cards.forEach(card => {
        const title = card.querySelector("b").innerText.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
    });
}

function sortCards() {
    const grid = document.querySelector('.grid.cards');
    const cards = Array.from(grid.children).filter(e => e.classList.contains("card"));
    const mode = document.getElementById("sortMode").value;

    cards.sort((a, b) => {
        const nameA = a.querySelector("b").innerText.toLowerCase();
        const nameB = b.querySelector("b").innerText.toLowerCase();

        if (mode === "az") return nameA.localeCompare(nameB);
        if (mode === "za") return nameB.localeCompare(nameA);
        if (mode === "newest") return new Date(b.getAttribute("data-timestamp")) - new Date(a.getAttribute("data-timestamp"));
    });

    cards.forEach(card => grid.appendChild(card));
}