// Library imports
var express = require('express');
var router = express.Router();

// Import all controller
const mainController = require('../controllers/mainController');

router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  );

  next();
});

// APIs start
router.post('/api/create', mainController.addPID);
router.get('/api/getall', mainController.getAll);
router.get('/api/getbyid', mainController.getbyPid);
router.delete('/api/deletebyid', mainController.deleteByID);

router.use(function (err, req, res, next) {
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function (errors, key) {
        errors[key] = err.errors[key].message;

        return errors;
      }, {}),
    });
  }

  return next(err);
});

module.exports = router;
