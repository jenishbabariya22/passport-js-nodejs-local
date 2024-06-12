const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/passportauth");

const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`DB start`); 
})

module.exports = db;


