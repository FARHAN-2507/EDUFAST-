function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15
    });

    // Add marker for EduFast
    var edufast = { lat: 28.5447, lng: 77.2845 };
    var edufastMarker = new google.maps.Marker({
        position: edufast,
        map: map,
        title: 'EduFast'
    });

    // Add marker for Jamia Hamdard
    var jamiaHamdard = { lat: 28.5464, lng: 77.2734 };
    var jamiaHamdardMarker = new google.maps.Marker({
        position: jamiaHamdard,
        map: map,
        title: 'Jamia Hamdard'
    });

    // Set center of map to EduFast location
    map.setCenter(edufast);
}
