const User = require('../models/User');

let login = async(req,res)=>{
    return res.render('login')
}

let index = async(req,res)=>{
    return res.redirect('/dashboard')
}

let dashboard = async(req,res)=>{
    return res.render('dashboard')
}

const register = (req,res) => {
    return res.render('register')
}

const registerUser = async(req,res) => {
    try{
        let user = await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })
        console.log("User create");
        return res.redirect('/');
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    login,dashboard,index,registerUser,register
}