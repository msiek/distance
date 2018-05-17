const distance = require('google-distance-matrix');
const location = require('./api');
const apiKey = 'AIzaSyBUPf8aZCPRKL3zZAGvr-FK3MiYFQ6sEUw';
const origins = ['33.832352, -79.049429'];
const destinations = location.newObj;

distance.key = apiKey;
distance.units('imperial');

distance.matrix(origins, destinations, (err, distances) => {
    if(!err){
        module.exports.array = newArray = [];
        module.exports.timeArray = newTimeArray = [];
        for(i=0; i<distances.destination_addresses.length; i++) {

            const distance = distances.rows[0].elements[i].distance.value;
            const time = distances.rows[0].elements[i].duration.value;

            newObj = {distance: distance, time: time};
            newTimeArray.push(time);
            newArray.push(newObj);
        }
        const reducer = (acc, cur) => acc+cur;
        totalTimeArray = newTimeArray.reduce(reducer);
        module.exports.total = totalTime = (totalTimeArray/60)*2;
    }
});