const User = require(
    "../models/User"
)

/*
@desc: create new user 
@route? /api/auth/singup
@access: puplic
*/
const singupUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({email:email})
        console.log("pass")
        if (user) return res.status(400).json("User Already Registered")
        user = await new User({ name, email, password })
        res.status(201).json(user)
     } catch (error) {
        console.log(error)
    }
     
}

/*
@desc: log in user
@route? /api/auth/login
@access: puplic
*/
const longinUser =  async (req, res) => {
    // const { email, password } = req.body

    // try {
    //   const user = await User.findOne({ email })
    //     if (user && (user.validatePassword(password))) {
            
    //     } else {
            
    //         return res.status(401).json("Invalid Credentails")
    //     }
    // } catch (error) {
    //   console.log(error)
    // }
     
     
}


module.exports = {
  singupUser,
  longinUser,
}