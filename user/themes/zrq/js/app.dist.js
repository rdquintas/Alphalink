$(document).ready(function() {
    // Initializes the lazy-load library
    echo.init({
        offset: 100,
        throttle: 250,
        unload: false
    });

    // Initialize Lightbox 
    $('.da-thumbs').magnificPopup({
        delegate: 'a.image', // child items selector, by clicking on it popup will open
        type: 'image',
        disableOn: function() {
            if ($(window).width() < 850) {
                return false;
            }
            return true;
        },
        gallery: {
            // options for gallery
            enabled: false
        },
        image: {
            // options for image content type
            titleSrc: 'title'
        }
        // other options
    });

    // Initialize Google Maps stuff
    var mapCanvas = document.getElementById('map');
    if (mapCanvas) {
        var mapOptions = {
            center: new google.maps.LatLng(window.zrq_map1, window.zrq_map2),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(mapCanvas, mapOptions);

        var myLatLng = {
            lat: window.zrq_map1,
            lng: window.zrq_map2
        };

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: 'Alphalink'
        });
    }
});
