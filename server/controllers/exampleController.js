var Example = require('../models/Example');

// All examples
exports.index = function(req, res) {
    Example.find({})
    .catch((err) => {
        res.status(400).send(err);
    })
    .then((result) => {
        res.status(200).json(result);
    });

    /* Or...
    Example.find({}, function (err, result) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(result);
        }
    });
    */
};

// One example
exports.show = function(req, res) {
    Example.findById(req.params.example_id)
    .catch((err) => {
        res.status(400).send(err);
    })
    .then((result) => {
        res.status(200).json(result);
    });
};

// Create example
exports.create = function(req, res) {
    var example = new Example(req.body);

    example.save()
    .catch((err) => {
        res.status(400).send(err);
    })
    .then((createdExample) => {
        res.status(200).send('Examplo criado.');
    });
};

// Edit example
exports.update = function(req, res) {
    Example.findById(req.params.example_id)
    .catch((err) => {
        res.status(400).send(err);
    })
    .then((example) => {
        example.name = req.body.name;
        
        example.save()
        .catch((err) => {
            res.status(400).send(err);
        })
        .then((updateExample) => {
            res.status(200).json(updateExample);
        });
    });
};

// Delete example
exports.delete = function(req, res) {
    Example.remove({ _id: req.params.example_id})
    .catch((err) => {
        res.status(400).send(err);
    })
    .then(() => {
        res.status(200).send('Example deleted.');
    });
};