const User = require("../models/user.model");
const Character = require("../models/character.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// export an object that is full of methods
module.exports = {
    register(req, res) {
        const user = new User(req.body);

        user
            .save()
            .then(() => {
                res.json({ msg: "success!", user: user });
            })
            .catch((err) => res.status(400).json(err));
    },

    createCharacter(req, res) {
        const character = new Character(req.body);

        character
            .save()
            .then(() => {
                res.json({ msg: "success!", character: character });
            })
            .catch((err) => res.status(400).json(err));
    },

    login(req, res) {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (user === null) {
                    res.status(400).json({ msg: "invalid login attempt" });
                } else {
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((passwordIsValid) => {
                    if (passwordIsValid) {
                        res
                        .cookie(
                            "usertoken",
                            jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                            {
                            httpOnly: true,
                            }
                        )
                        .json(user);
                    } else {
                        res.status(400).json({ msg: "invalid login attempt" });
                    }
                })
                .catch((err) =>
                    res.status(400).json({ msg: "invalid login attempt" })
                );
            }
        })
        .catch((err) => res.json(err));
    },

    logout(req, res) {
        res
            .cookie("usertoken", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
                httpOnly: true,
                maxAge: 0,
            })
            .json({ msg: "ok" });
    },

    logout2(req, res) {
        res.clearCookie("usertoken");
        res.json({ msg: "usertoken cookie cleared" });
    },

    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
        if(!decodedJWT){
            return res.json(null);
        }
        User.findById(decodedJWT.payload._id)
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
    },

    getAll(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.json(err));
    },
    getAllCharacters(req, res) {
        Character.find()
            .then((character) => res.json(character))
            .catch((err) => res.json(err));
    },

    getOne(req, res) {
        User.findOne({ _id: req.params.id })
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
    },
    getCharacterDetail(req, res) {
        Character.find({ _id: req.params.id })
            .then((character) => res.json(character))
            .catch((err) => res.json(err));
    },
    getUserCharacters(req, res) {
        Character.find({ User_Id: req.params.id })
            .then((character) => res.json(character))
            .catch((err) => res.json(err));
    },
    deleteCharacter(req, res) {
        console.log("delete method executed", "url params:", req.params);

        Character.findByIdAndDelete(req.params.id)
        .then((character) => {
            res.json(character)
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },
    updateCharacter(req, res) {
        console.log("update method executed", "url params:", req.params);

        Character.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true, // Run model validations again.
            new: true, //return newly updated document.
        })
        .then((character) => {
            res.json(character);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    }
};

// //Export an object that is full of methods.
// module.exports = {
//     //long-form syntax - key: value
//     create: function (req, res) {
//         console.log("create method executed");  

//         // req.body is the form data or data sent in from postman / js requests.
//         User.create(req.body)
//         .then((user) => {
//             //newly created dest from DB with auto generate id and createdAt.
//             res.json(user);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
//     },

//     // Shorthand method in object syntax.
//     getAll(req, res) {
//         console.log("getAll method executed");

//         User.find()
//         //this sort does not work for lowercase
//         // User.find().sort({name:1})
//         .then((user) => {
//             res.json(user);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
//     },

//     getOne(req, res) {
//         console.log("getOne method executed", "url params:", req.params);

//         User.findById(req.params.id)
//         .then((user) => {
//             res.json(user);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
//     },

//     delete(req, res) {
//         console.log("delete method executed", "url params:", req.params);

//         User.findByIdAndDelete(req.params.id)
//         .then((user) => {
//             res.json(user)
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
//     },

//     update(req, res) {
//         console.log("update method executed", "url params:", req.params);

//         User.findByIdAndUpdate(req.params.id, req.body, {
//             runValidators: true, // Run model validations again.
//             new: true, //return newly updated document.
//         })
//         .then((user) => {
//             res.json(user);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
//     }
// }