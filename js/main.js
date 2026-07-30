// ============================================
// FILTRO DE PROYECTOS POR CATEGORIA
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const categoria = button.dataset.filter;

      // Quita "active" de todos los botones, se lo pone solo al que se hizo clic
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      // Muestra u oculta cada tarjeta segun su categoria
      projectCards.forEach(function (card) {
        const coincide = categoria === "all" || card.dataset.category === categoria;
        card.style.display = coincide ? "" : "none";
      });
    });
  });
});


// ============================================
// SCROLL REVEAL DE TARJETAS
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // ya se revelo, dejamos de observarla
        }
      });
    },
    { threshold: 0.15 } // se activa cuando el 15% de la tarjeta es visible
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
});