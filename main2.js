let pzaCatalunya = [41.3870154, 2.1700471];
let myMap = L.map('bcnmap').setView(pzaCatalunya, 16);
const mapProvider = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';


L.tileLayer(mapProvider, {
    maxZoom: 18,
    attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
}).addTo(myMap);



var popup = L.popup();


var markerArray = [];
var marker;

myMap.on('click', e => {
    if (markerArray.length > 0) {
        myMap.removeLayer(marker);
    }

    let latLng = myMap.mouseEventToLatLng(e.originalEvent);
    marker = L.marker([latLng.lat, latLng.lng]);
    myMap.addLayer(marker);
    markerArray.push(marker);
    marker.bindPopup('Tus coordenadas son:<br>' + latLng.lat.toString()+', ' + latLng.lng.toString()).openPopup();
    myMap.setView([latLng.lat, latLng.lng], 18);
});
