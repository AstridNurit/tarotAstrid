

  // Funcionalidad para abrir/cerrar los elementos del acordeón al hacer clic
  var accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
      var accordionBody = this.querySelector('.accordion-body');
      accordionBody.style.display = (accordionBody.style.display === 'block') ? 'none' : 'block';
    });
  });
