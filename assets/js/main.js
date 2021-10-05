$(function() {
  
  $(document).ready(function(){
    $('#banner').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    })
  })

  const myLatLng = { lat: 51.7104978, lng: -0.6117067000000134 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
  

})