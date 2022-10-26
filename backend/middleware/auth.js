//function to make sure user is loged in and other for a user who is admin

//check user name if matches or change later
const jwt = require('jsonwebtoken')
const auth =(req,res,next) =>{
    const token = req.header("x-auth-token")
if(!token) return res.status(401).send("not authenticated")

try {
    const secretKey= process.env.JWT_SECRET_KEY
    const user = jwt.verify(token, secretKey);
    req.user = user
    next()
} catch (error) {
    res.status(400).send('access denied .invalid auth token')
}
}

const isAdmin = (req,res,next) =>{
    auth(req,res, () =>{
        if(req.user.isAdmin){
        next()
    } else{
        res.status(403).send('access denied .ur not admin')
            }
    })
}
module.exports = {auth, isAdmin}
