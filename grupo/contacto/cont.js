$(document).ready(function() {
  var owl = $(".my-class .owl-carousel");
  
  // Inicializa el carrusel
  owl.owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    animateOut: "slideOutUp",
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Agrega la clase "animated" y la clase de la animación a los elementos que deseas animar
  owl.on("changed.owl.carousel", function(event) {
    var currentItem = event.item.index;
    var prevItem = event.relatedTarget.normalize(event.item.index, true);

    var currentSlide = $(event.target).find(".owl-item").eq(currentItem).find(".cover .header-content .line");
    currentSlide.addClass("animated fadeInLeft");

    var prevSlide = $(event.target).find(".owl-item").eq(prevItem).find(".cover .header-content .line");
    prevSlide.removeClass("animated fadeInLeft");
  });
});


// Mapa
function iniciarMap() {
  var coord = {lat: -9.930188965382795, lng: -76.24071568488172};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: coord
  });
  
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}