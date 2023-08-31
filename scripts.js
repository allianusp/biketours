document.addEventListener("DOMContentLoaded", function () {
    var map1 = L.map("map1").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
    }).addTo(map1);
});
