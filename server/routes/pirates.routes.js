const PirateController = require('../controllers/pirates.controller');

module.exports = app => {
    app.get('/api/pirates', PirateController.getAllPirates);
    app.post('/api/pirates', PirateController.createPirate);
    app.get('/api/pirates/:id', PirateController.getSinglePirate);
    app.put('/api/pirates/:id', PirateController.updatePirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate)
};