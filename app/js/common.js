"use strict"; // ES5

document.addEventListener("DOMContentLoaded", function() {
  (function() { //область видимости

    //js-status
    nojsreplace();
    function nojsreplace() {
      if (document.body.className == "no-js") {
        document.body.classList.remove("no-js");
      }
    }

    //menu-toggle
    // mobileMenu();
    function mobileMenu() {
      var menuMain = document.querySelector(".menu"),
          menuToggle = document.querySelector(".menu__toggle");
      menuMain.classList.remove("menu--nojs");

      menuToggle.addEventListener("click", function() {
        if (menuMain.classList.contains("menu--closed")) {
          menuMain.classList.remove("menu--closed");
          menuMain.classList.add("menu--opened");
        } else {
          menuMain.classList.add("menu--closed");
          menuMain.classList.remove("menu--opened");
        }
      });
    }


    //page map
    // pageMap();
    function pageMap() {
      function initialize() {
        var mapOptions = {
          center: {lat: 40.71, lng: -74},
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.TERRAIN,
          disableDefaultUI: false,
          scrollwheel: true,
          zoomControl: true,
          panControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          overviewMapControl: true
        };
        var mapContainer = document.querySelector("#google-map");
        var map = new google.maps.Map(mapContainer, mapOptions);
        var image = new google.maps.MarkerImage('img/icons/icon-map-pin.svg',
         new google.maps.Size(36, 52),
         new google.maps.Point(0, 0)
        );
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng('40.711', '-74.007'),
          map: map,
          title: 'New York',
          icon: image
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    }


    console.log("JS active");


  })();
});
