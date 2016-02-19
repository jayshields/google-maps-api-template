$(document).ready(function(){
  if($('#map').length > 0)
  {
    if($('html').attr('lang'))
      lang = $('html').attr('lang');
    else
      lang = 'en';
    
    $.getScript('https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&language='+lang);
  }
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}