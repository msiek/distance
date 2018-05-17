const save = require('../utils/distance');

exports.homepage = (req, res) => {
    res.send('<h1> Please search for a company</h1>')
};
exports.company = (req, res) => {
    res.send(save.totalSaved);
};
