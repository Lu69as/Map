function initMap() {


    const uluru = { lat: 59.231535, lng: 10.995442 };

    const uluru3 = { lat: 59.2189, lng: 10.9418 };

    const map = new google.maps.Map(document.getElementById("map"), {

        zoom: 10,

        center: uluru,

    });

    var marker = new google.maps.Marker({
        position: uluru,
        title:"Heisann",
        map: map
    });

    var marker2 = new google.maps.Marker({
        position: uluru3,
        map: map
    });

}
window.initMap = initMap;