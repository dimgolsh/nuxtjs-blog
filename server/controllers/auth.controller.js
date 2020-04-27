const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')
const keys = require('../keys/index')

const User = require('../models/user.model')
module.exports.login = async (req,res) => {
const candidate = await User.findOne({login: req.body.login})
if(candidate){

 const isPasswordCorrect =  bcrypt.compareSync(req.body.password, candidate.password)


  if(isPasswordCorrect){
    const token = jwt.sign({
      login: candidate.login,
      userId: candidate._id
      
    }, keys.JWT, {expiresIn: 60 * 60})
    res.json({token})
  } else {
    res.status(401).json({message: 'Пароль неверен'})
  }

} else {
  res.status(404).json({message: 'user not found'})
}
}


module.exports.createUser = (req,res) => {

}
