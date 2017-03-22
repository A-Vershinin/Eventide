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
    pageMap();
    function pageMap() {
      function initialize() {
        var mapOptions = {
          center: {lat: -33.872, lng: 151.088},
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: false,
          scrollwheel: true,
          zoomControl: true,
          panControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          overviewMapControl: true
        };
        var mapContainer = document.querySelector("#map");
        var map = new google.maps.Map(mapContainer, mapOptions);
        var image = new google.maps.MarkerImage('img/icons/icon-marker.svg',
         new google.maps.Size(36, 52),
         new google.maps.Point(0, 0)
        );
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-33.862, 151.180),
          map: map,
          title: 'New York',
          icon: image
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    }

    // btn Up
    scrollUp();
    function scrollUp() {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
          $(".scrollup").fadeIn();
        } else {
          $(".scrollup").fadeOut();
        }
      });
      $(".scrollup").click(function() {
        $("html, body").animate({scrollTop: 0}, 1500);
        return false;
      })
    }
    // animation
    wowAnimation();
    function wowAnimation() {
      new WOW({
        offset: 100,
        mobile: false
      }).init();
    }
  })();
});
