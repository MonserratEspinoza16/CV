
document.addEventListener("DOMContentLoaded", function() {
    const skillsTable = document.querySelector(".skills");
    skillsTable.classList.add("animate__animated", "animate__fadeIn");
});


//API
var map = L.map('map').setView([26.05009, -98.26064], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([26.05009, -98.26064]).addTo(map);

marker.bindPopup("<b>Universidad Tecnologica De Tamaulipas Norte.</b>").openPopup();


var popup = L.popup()
    .setLatLng([26.05009, -98.26064])
    .setContent("Universidad Tecnologica De Tamaulipas Norte.")
    .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
