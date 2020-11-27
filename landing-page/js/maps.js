var map = {
    zoom: 11,
    scrollwheel: !1,
    center: new google.maps.LatLng(-3.7620259, -38.5189737),
    panControl: !1,
    styles: [{
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#e9e9e9"
        }, {
            lightness: 17
        }]
    }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
            color: "#f5f5f5"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 17
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 29
        }, {
            weight: .2
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 18
        }]
    }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
            color: "#ffffff"
        }, {
            lightness: 16
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#f5f5f5"
        }, {
            lightness: 21
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            color: "#dedede"
        }, {
            lightness: 21
        }]
    }, {
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "on"
        }, {
            color: "#ffffff"
        }, {
            lightness: 16
        }]
    }, {
        elementType: "labels.text.fill",
        stylers: [{
            saturation: 36
        }, {
            color: "#333333"
        }, {
            lightness: 40
        }]
    }, {
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
            color: "#f2f2f2"
        }, {
            lightness: 19
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
            color: "#fefefe"
        }, {
            lightness: 20
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#fefefe"
        }, {
            lightness: 17
        }, {
            weight: 1.2
        }]
    }]
},
t = new google.maps.Map(document.getElementById("mapa"), map),
image = "images/misc/pin.png";
$(".location__link").each(function(e, l) {
var o = $(l).data("latitude"),
    s = $(l).data("longitude"),
    a = new google.maps.LatLng(o, s);
new google.maps.Marker({
    position: a,
    map: t,
    icon: image,
    animation: google.maps.Animation.DROP
})
}), $(document).on("click", ".location__link", function(e) {
e.preventDefault();
var l = $(this).data("latitude"),
    o = $(this).data("longitude");
t.panTo(new google.maps.LatLng(l, o)), t.setZoom(18), $(".location__link").removeClass("active"), $(this).addClass("active")
})