const permitting = require('../PermittingInfo');

module.exports.newObj = permitting.records.map((p, i) => {
    return `${permitting.records[i].geo.lat},${permitting.records[i].geo.long}`
});
