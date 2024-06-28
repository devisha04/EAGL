const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const beneficiarySchema = new mongoose.Schema({
    
    name : String,
    contact : String,
    gender : String,
    age : String,
    location : String,
    status : [String],
    goats : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Goats'
    }],
    profit : {type : Number , default : 0},
    address : String 
})

const goatsSchema = new mongoose.Schema({
    gender : String,
    vaccination : [{type : Object}],
    breed : String,
    price : String,
    kids : Number
})

const volunteerSchema = new mongoose.Schema({
    username : String,
    password : String,
    name : String,
    contact : String,
    Age : String,
    gender : String,
    yoj : Number,
    location : String,
    email : String,

})

const vendorSchema = new mongoose.Schema({
    username : String,
    password : String,
    name : String,
    age : String,
    contact : String,
    cart : [{
        type : Object
    }],
    address : String,

})

const vetSchema = new mongoose.Schema({
    username : String,
    password : String,
    name : String,
    name : String,
    gender : String,
    contact : String,
    doj : Number,
    location : String,
    schedule : [{
        type : Object
    }]
})

const beneficiary = mongoose.model("Beneficiary",beneficiarySchema);

const goats = mongoose.model("Goats",goatsSchema);

const volunteer = mongoose.model("Volunteer",volunteerSchema);

const vendor = mongoose.model("Vendor",vendorSchema);

const vet = mongoose.model("Vet",vetSchema);

module.exports={
    beneficiary,
    goats,
    volunteer,
    vendor,
    vet
}
