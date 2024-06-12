let express = require("express")
const { login, dashboard, index, register, registerUser } = require("../controllers/AuthControllers")

let routes = express.Router()

let passport = require("passport")

routes.get('/',login)
routes.post('/index',passport.authenticate('local',{failureRedirect:'/'}),index)
routes.get('/dashboard',passport.checkAuth,dashboard)
routes.get('/register',register);
routes.post('/registerUser',registerUser);

module.exports = routes