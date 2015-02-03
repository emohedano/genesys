module.exports = function(app) {
  var express = require('express');
  var proceedingsRouter = express.Router();

  var bodyParser = require('body-parser');

  app.use(bodyParser.json()); // for parsing application/json

  var proceedingIdCounter = 4;

  proceedingsRouter.get('/', function(req, res) {
    res.send({
      'proceedings': [
        {
          id: 1,
          name: 'Proceeding 1'
        },
        {
          id: 2,
          name: 'Proceeding 2'
        },
        {
          id: 3,
          name: 'Proceeding 3'
        }
      ]
    });
  });

  proceedingsRouter.post('/', function(req, res) {
    
    data = req.body;
    data.proceeding.id = proceedingIdCounter;
  
    proceedingIdCounter += 1;

    res.status(201).send(data);

  });

  proceedingsRouter.get('/:id', function(req, res) {
    res.send({
      'proceedings': {
        id: req.params.id
      }
    });
  });

  proceedingsRouter.put('/:id', function(req, res) {
    res.send({
      'proceedings': {
        id: req.params.id
      }
    });
  });

  proceedingsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/proceedings', proceedingsRouter);
};
