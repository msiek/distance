const distance = require('../utils/distance');

exports.homepage = (req, res) => {
    const info = distance.array;
    res.send(info);
};
exports.company = (req, res) => {

}
