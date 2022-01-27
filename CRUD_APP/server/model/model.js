const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Yourname : {
        type : String,
        required: true
    },
    Hrname : {
        type : String,
        required: true
    },

    URL : {
        type: String,
        required: true,
        unique: true
    },
    OrganisationName : String,
    ConfirmationStatus : String,

})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;