function initMap(){
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 3,
        center:{
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var locations = [
        { lat: 40.785091, lng: -73.968285},
        { lat: 41.084045, lng: -73.874245},
        { lat: 40.754932, lng: -73.984016}
    ];

    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

/*
Now, we need to iterate through that array and create a new marker that has the label from our string.
So to do that, we'll do var markers = locations.map.
Now just at this point, we should mention that this map method here is a built-in JavaScript method.
Don't get it confused with the Google Map that we're working with.
The map method in JavaScript works similar to a forEach() function.
The difference is that this returns an array with the results of looping through each item in our locations array.
The map method can take up to three arguments.
We're going to use two in our example here.
The first argument that we're going to pass into our function is location, which is the current value of where we are in the array as we're looping through.
The second one is i, which is the index number of where we currently are in the array.    
-->

<!--
So now we need to do our return.
We're going to return a new google.maps.marker object.
So this is going to have a position value, which is going to be set to the current location, and a label which is going to be set to i % labels.length.
Now the reason that we're doing this is that we want to get one of our labels out of the string that we've created.
And remember that certain methods that work with arrays in JavaScript also work with strings.
The reason for using the %operator is so that if we have more than 26 locations, then it will loop around to the start of our string again and go from Z back to A, instead of throwing an error.
Now that that's done, we can go back to the Google tutorial and grab the sample code to add a marker image to our map.    
*/