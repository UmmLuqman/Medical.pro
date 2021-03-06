const UserModel = require('../models/UserModel')

const bcrypt = require("bcrypt");
const {hash} = require("bcrypt");

exports.register = async (req, res) => {
    //level 4
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        const newUser = new UserModel({
            email: req.body.username,
            //level 1 2
            //password: req.body.password
            //level 3
            //password: md5(req.body.password)
            //level 4
            password:hash
            //
        });
        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.render("secrets");
            }
        });
    })
    //
};

exports.login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    UserModel.findOne({email: username}, function(err, foundUser){
        if (err) {
            res.send("404")
        } else {
            if (foundUser) {
                bcrypt.compare(password, hash, function(err, result) {
                    if(result===true) {
                        res.render("secrets");
                    }
                });
            }
        }
    })

};