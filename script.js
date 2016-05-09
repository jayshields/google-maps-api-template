$(document).ready(function () {
  if ($('#map').length > 0)
  {
    if ($('html').attr('lang'))
      lang = $('html').attr('lang');
    else
      lang = 'en';

    $.getScript('https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&language=' + lang);
  }
});

var map;

function initMap() 
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

  plotMarkers();
}

var markers;
var bounds;

function plotMarkers()
{
  markers = [];
  bounds = new google.maps.LatLngBounds();
  
  $.get('markers.json', function (data) {
    $.each(data, function(){
      var position = new google.maps.LatLng(this.lat, this.lng);
      
      markers.push(
        new google.maps.Marker({
          position: position,
          map: map,
          animation: google.maps.Animation.DROP
        })        
      );
    
      bounds.extend(position);
    });
    
    map.fitBounds(bounds);
  });
}