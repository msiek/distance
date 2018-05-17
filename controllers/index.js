const distance = require('../utils/distance');

exports.homepage = (req, res) => {
    const info = distance.array;
    const timeSave = {timesaved: distance.total.toFixed(2)}
    res.send(timeSave)
};
exports.company = (req, res) => {

}
