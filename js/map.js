/*function initMap(){
    // The location of Uluru
    var uluru = {lat: 19.423144000000004, lng: -99.1756422};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  };

 function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  };

 const showPosition = (data) => {
     console.log(data)
     const lat = data.coords.latitude;
     const lon = data.coords.longitude;
 } 

 getLocation()*/
 
 var map, infoWindow;
 function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: -34.397, lng: 150.644},
     zoom: 17
   });
   infoWindow = new google.maps.InfoWindow;

   // Try HTML5 geolocation.
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       var pos = {
         lat: position.coords.latitude,
         lng: position.coords.longitude
       };
       var image = {
        url: 'https://user-images.githubusercontent.com/39383220/53687475-8efdd080-3cfa-11e9-9fe7-0958df9d3c18.png'
      };

    var marker = new google.maps.Marker({
        position: pos, 
        map: map,
        icon: image
    });   
    
    var request = {
        location: pos,
        radius: '500',
        type: ['comida']
      };
    
      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    
    
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place) {
        console.log(place.name)
        console.log(place)
        let placeLoc = place.geometry.location;
        let marker = new google.maps.Marker({
          map: map,
          position: placeLoc,
          title: place.name
        });
      }

    //    infoWindow.setPosition(pos);
    //    infoWindow.setContent('Aquí estás carnal');
       infoWindow.open(map);
       map.setCenter(pos);
       
     }, function() {
       handleLocationError(true, infoWindow, map.getCenter());
     });
   } else {
     // Browser doesn't support Geolocation
     handleLocationError(false, infoWindow, map.getCenter());
   }
 }

 function handleLocationError(browserHasGeolocation, infoWindow, pos) {
   infoWindow.setPosition(pos);
   infoWindow.setContent(browserHasGeolocation ?
                         'Error: The Geolocation service failed.' :
                         'Error: Your browser doesn\'t support geolocation.');
   infoWindow.open(map);
 }

 initMap()
 /*
 navigator.geolocation.getCurrentPosition(initMap, error);
 function initMap(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let center = new google.maps.LatLng(lat, lng);
    map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 15
    });
    createMarkerUser(center);
    let request = {
      location: center,
      radius: 500,
      type: ['restaurant']
    };
    
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }
    
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      resultInfo = results;
      console.log(resultInfo);
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
        renderInfo(results[i]);
      }
    }
  }
    
  function createMarker(place) {
    let placeLoc = place.geometry.location;
    // let marker = new google.maps.Marker({
    //   map: map,
    //   position: placeLoc,
    //   title: place.name
    // });
  }
  
  function createMarkerUser(user) {
    new google.maps.Marker({
      map: map,
      position: user,
      title: 'Aquí estas'
    });
  }
  
  function error(err) {
    console.log('No logramos encontrar tu ubicación');
  };
  
*/