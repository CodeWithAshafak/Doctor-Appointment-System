const mongoose = require("mongoose")
const doctorSchema = new mongoose.Schema({ 
    name:String,
    contact: Number,
    email: String,
    address: String,
    specialization: String,
    city: String,
    password: String
})

module.exports = mongoose.model("doctor"  , doctorSchema)