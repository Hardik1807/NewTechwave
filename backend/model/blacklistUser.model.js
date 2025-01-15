const mongoose = require('mongoose');


const blacklistUserSchema = mongoose.Schema({
    logoutToken : String
},{
    versionKey:false
})

const BlacklistUserModel = mongoose.model("blacklistUserToken", blacklistUserSchema);

module.exports = {BlacklistUserModel};