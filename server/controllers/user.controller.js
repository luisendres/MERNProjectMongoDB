const User = require("../models/user.model");

//Export an object that is full of methods.
module.exports = {
    //long-form syntax - key: value
    create: function (req, res) {
        console.log("create method executed");  

        // req.body is the form data or data sent in from postman / js requests.
        User.create(req.body)
        .then((user) => {
            //newly created dest from DB with auto generate id and createdAt.
            res.json(user);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    // Shorthand method in object syntax.
    getAll(req, res) {
        console.log("getAll method executed");

        User.find()
        //this sort does not work for lowercase
        // User.find().sort({name:1})
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params:", req.params);

        User.findById(req.params.id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    delete(req, res) {
        console.log("delete method executed", "url params:", req.params);

        User.findByIdAndDelete(req.params.id)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        User.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true, // Run model validations again.
            new: true, //return newly updated document.
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    }
}