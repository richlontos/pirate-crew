const Pirate = require("../models/pirates.model");

function createPirate(req, res) {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json(err));
}

function getAllPirates(req, res) {
    Pirate.find().collation({locale: "en" }).sort('name')
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json(err));
}

function getSinglePirate(req, res) {
    Pirate.findById(req.params.id)
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err));
}

function updatePirate(req, res) {
    Pirate.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    )
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));
}

function deletePirate(req, res) {
    Pirate.findByIdAndDelete(req.params.id)
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err));
}

module.exports = {
    createPirate,
    getAllPirates,
    getSinglePirate,
    updatePirate,
    deletePirate
};