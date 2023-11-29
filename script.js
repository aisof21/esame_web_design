document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.getElementById('mobile-menu');
  const nav = document.querySelector('.nav ul');

  mobileMenuToggle.addEventListener('click', function () {
      nav.classList.toggle('show');
  });
});


document.addEventListener("DOMContentLoaded", function () {
    // Ottieni elementi del carosello
    const carousel = document.getElementById("carousel");
    const indicatorsContainer = document.getElementById("carousel-indicators");
  
    // Ottieni tutte le card nel carosello
    const cards = document.querySelectorAll(".card1");
  
    // Numero totale di card
    const totalCards = cards.length;
  
    // Calcola il numero di pagine (ogni pagina mostra 3 card)
    const totalPages = Math.ceil(totalCards / 3);
  
    // Creazione dinamica degli indicatori
    for (let i = 0; i < totalPages; i++) {
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");
      indicatorsContainer.appendChild(indicator);
  
      // Aggiungi un gestore di eventi per il clic sugli indicatori
      indicator.addEventListener("click", function () {
        goToPage(i);
      });
    }
  
    // Imposta la pagina iniziale
    let currentPage = 0;
    updateIndicators();
  
    // Funzione per navigare alle diverse pagine del carosello
    function goToPage(page) {
      currentPage = page;
      updateCarousel();
      updateIndicators();
    }
  
    // Funzione per aggiornare il carosello in base alla pagina corrente
    function updateCarousel() {
      const translateValue = -currentPage * 100; // 100% per ogni pagina
      carousel.style.transform = `translateX(${translateValue}%)`;
    }
  
    // Funzione per aggiornare gli indicatori evidenziando quello attivo
    function updateIndicators() {
      const indicators = document.querySelectorAll(".indicator");
      indicators.forEach((indicator, index) => {
        if (index === currentPage) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });
    }
  });

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += 1);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }