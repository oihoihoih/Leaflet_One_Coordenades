let pzaCatalunya = [41.3870154, 2.1700471];
let myMap = L.map('bcnmap').setView(pzaCatalunya, 16);
const mapProvider = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';


L.tileLayer(mapProvider, {
    maxZoom: 18,
    attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
}).addTo(myMap);

let marker = L.marker(pzaCatalunya).addTo(myMap);

marker.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurante mediterráneo <br> Carrer de Balmes, 16, 08007 Barcelona");
