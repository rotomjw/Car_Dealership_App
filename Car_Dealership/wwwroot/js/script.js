function initMap() {
    var latlng = new google.maps.LatLng(52.82880107365463, -1.1461487195561435);
    var options = {
        zoom: 14, center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), options);
}