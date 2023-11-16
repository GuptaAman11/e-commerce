const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    const { email, name, password ,typeOfUser , phoneNumber , address } = req.body;
    try {
        if (!email || !name || !password ) {
             return res.json({ mssg: "all fields are required" })
        }

        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
             return res.json({ mssg: "user already exists" })
        }

       const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User(
            {
                name: name,
                email: email,
                password: hashedpassword ,
                typeOfUser:typeOfUser,
                phoneNumber :phoneNumber ,
                address : address
            }

        )
        await newUser.save();

        return res.json({ mssg: "user created succesfully" , newUser})
       

    } catch (error) {
        console.log(error)
        res.json({ error: error })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password ) {
            return res.json({ mssg: "all fileds are required" })
        }

        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json({msg:"user not found"})
        }
        const comparepassword = await bcrypt.compare(password, user.password)
        if (comparepassword) {
            const token = jwt.sign({ user : user }, 'secret_key', { expiresIn: '1h' })
            return res.json({ mssg: "user logged in succesfully", user: user, token: token })
        }

    } catch (error) {
        return res.json(error);
        console.log(error)
    }
}


module.exports = {
    register,
    login,

}