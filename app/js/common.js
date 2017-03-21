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

    //event-shedule__tabs acco
    chengeIconAcco();
    function chengeIconAcco() {
      $('.collapse').on('show.bs.collapse', function() {
        $(this).prev().find(".fa").removeClass("fa-plus-circle").addClass("fa-minus-circle");
      });
      $('.collapse').on('hide.bs.collapse', function() {
        $(this).prev().find(".fa").removeClass("fa-minus-circle").addClass("fa-plus-circle");
      });
    }

    //validate event-launch-form
    checkForm();
    function checkForm() {
      $("#event-launch-form").validator({
        feedback: {
          success: 'fa-check-circle',
          error: 'fa-times-circle'
        }
      });
    }

    // Select
    changeSelect();
    function changeSelect() {
      $(".form-control-select").select2({
        minimumResultsForSearch: Infinity
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
