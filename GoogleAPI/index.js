
if (navigator.geolocation) {
  // Get the current position
  navigator.geolocation.getCurrentPosition(
    // Success callback
    function(position) {
      // Access the latitude and longitude from the position object
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      const requestOptions = {
        method: 'GET',
      };
      
      fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=API_KEY`, requestOptions)
        .then(response => response.json())
        .then((result) => {
          console.log(result['features']['0']['properties']['city'] + ',', result['features']['0']['properties']['country'])
        })
        .catch(error => console.log('error', error));
      
    },
    // Error callback
    function(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("An unknown error occurred.");
          break;
      }
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}
