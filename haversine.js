exports.haversine = function (latitude, longitude){
function toRad(value) {
    return this * Math.PI / 180;
  }
  const lat1 = 38.898556;
  const lat2 = 38.897147;
  const long1 = -77.037852;
  const long2 = -77.043934;

  const R = 6371;

  const x1 = lat2-lat1;
  const dLat = x1.toRad();
  const x2 = long2-long1;
  const dLong = x2.toRad();
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * Math.sin(dLong/2) * Math.sin(dLong/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  const m = d/1.60934;

console.log(m)
}
