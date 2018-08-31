
var mymap = L.map('map').setView([36.904716,30.647495], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZmt1Y3VrIiwiYSI6ImNqbGh6emNpODFpd3Azd3F1bGNxbzd0MHEifQ.wxhLbzJpQFFGWzWvq_dHdQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
}).addTo(mymap);
var marker = L.marker([36.904716,30.647495]).addTo(mymap);
marker.bindPopup("<b>Nihan Aksu OSGB</b><br>Ofisimiz.").openPopup();
