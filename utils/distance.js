const distance = require('google-distance-matrix');
const location = require('./api');
const apiKey = 'AIzaSyBUPf8aZCPRKL3zZAGvr-FK3MiYFQ6sEUw';
const origins = ['33.832352, -79.049429'];
const destinations = location.newObj;

distance.key = apiKey;
distance.units('imperial');

distance.matrix(origins, destinations, (err, distances) => {
    if(!err){

        newTimeArray = [];
        newDistanceArray = [];

        for(i=0; i<distances.destination_addresses.length; i++){

            const distance = distances.rows[0].elements[i].distance.value;
            const time = distances.rows[0].elements[i].duration.value;

            newTimeArray.push(time);
            newDistanceArray.push(distance);

        }
        const reducer = (acc, cur) => acc+cur;

        module.exports.timeArray = totalTimeArray = newTimeArray.reduce(reducer);
        module.exports.distanceArray = totalDistanceArray = newDistanceArray.reduce(reducer);

    }
});