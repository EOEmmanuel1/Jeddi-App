const infoModel = require('../models/infoModel');

// Controller to handle request and response
const getInfo = async (req, res) => {
    try {
        const info = await infoModel.getInformation();
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve information.' });
    }
};

module.exports = {
    getInfo
};