$(document).ready(function(){

  const map = document.getElementById("map")
  const navTrigger = document.getElementById('navToggle')
  const navClose = document.getElementById('navClose')

  $('#banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    dots: true,
    arrows: false,
  })

  if (map) {
    const myLatLng = { lat: 51.7104978, lng: -0.6117067000000134 };

    const mapElem = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    })

    new google.maps.Marker({
      position: myLatLng,
      mapElem,
      title: "Hello World!",
    })
  }

  navTrigger.addEventListener('click', function() {
    const mobileNav = document.getElementById('mobileNav')
    mobileNav.classList.add('active')
  })

  navClose.addEventListener('click', function() {
    const mobileNav = document.getElementById('mobileNav')
    mobileNav.classList.remove('active')
  })

});
