const lego = document.querySelector('#lego');
const imgAbout = document.querySelectorAll('.imgAbout');

if (lego) {
  // quan es cliqui l'img lego, s'inclourà o es treurà les clases d'avall al element amb toggle
  lego.addEventListener('click', function () {

    lego.classList.toggle('clicked1');
    lego.classList.toggle("active");

  });
}