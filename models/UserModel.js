let mongoose = require('mongoose');
const encrypt = require("mongoose-encryption");
let schema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    firstName:{
        type:String,
        default: ''
    },
    lastName: {
        type:String,
        required: true
    },
    phone:String,
    disease:String
});
let userModel = new mongoose.model('User', schema);
module.exports = userModel;

