var map = L.map('mapid').setView([34, 89], 13);
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map);
var marker = L.marker([34, 89]).addTo(map);
var circle = L.circle([34, 80], {
    color: 'red',
    fillColor: '#005500',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(map);
var polygon = L.polygon([
    [34, 89],
    [33, 87],
    [40, 80]
],
 {color : 'red',}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([40, 80])
    .setContent("I am a standalone popup.")
    .openOn(map);
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
