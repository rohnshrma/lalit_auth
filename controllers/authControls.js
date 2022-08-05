
const User = require("../models/User")


module.exports.signup_get = (req, res) => {
  res.render("signup");
};
module.exports.signup_post = async(req, res) => {

  const email = req.body.email
  const password = req.body.password 


  try{

    const user = await User.create({email,password})
    res.status(201).json({user : user._id});
  }catch(err){
    res.status(400).json(err)
  }



};


module.exports.login_get = (req, res) => {
  res.render("login");
};
module.exports.login_post = (req, res) => {};
