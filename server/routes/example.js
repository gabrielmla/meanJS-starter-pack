// General imports
var express = require('express');
var router = express.Router();
// Specific imports
var exampleController = require('../controllers/exampleController');

router.get('/', exampleController.index);

router.get('/:example_id', exampleController.show);

router.post('/', exampleController.create);

router.put('/:example_id', exampleController.update);

router.delete('/:example_id', exampleController.delete);

module.exports = router;