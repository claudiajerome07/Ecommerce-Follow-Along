const ErrorHandler = require('../utilis/ErrorHandler.js')
const usermodel = require('../model/user_model.js')
const transporter = require('../utilis/sendMail.js')
const jwt=require('jsonwebtoken')

require('dotenv').config({
    path:'..config/.env'
})

async function CreateUser(req, res) {
    const { Name, email, password } = req.body;

    const checkUserpresent = await usermodel.findOne({
        email: email, //user schema
    });

    if (checkUserpresent) {
        const error= new ErrorHandler('Already Present in DB',400)

        return res.status(404).send({
            message: error.message,
            status: error.statuscode,
            success:false,
        })

    }

    const newUser = new usermodel({
        Name: Name,
        email: email,
        password: password,
    })

    const data={
        Name,
        email,
        password,
    }

    //1. we have to send mail to user for verification as http://localhost:5173/activation/{token}
    //2. we have to send the mail as link to user
    //3. when the user click the link user have to be directed to activation page
    const token=generateToken(data)
    await transporter.sendMail({
        to: 'claudiajerome07@gmail.com',
        from: 'claudiajerome9a@gmail.com',
        subject: 'verification email for signup',
        text: 'Text',
        html: `<h1>E-commerce http://localhost:5173/activation/${token}</h1>`
    })

    await newUser.save();
    return res.send('user Created Successfully')

}

const generateToken=(data)=>{
    const token=jwt.sign({name:data.name,email:data.email},process.env.SECRET_KEY)
    return token
}

async function verifyUserController(req, res){
    const { token } = req.params
    try {
        if (verifyUser(token)) {
            return res.status(200).cookie()

        }
        return res.status(403).send({ message: 'token expired' })

    } catch (err) {
        return res.status(403).send({ message: err.message })
    }
}
const verifyUser = () => {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (verify) {
        return verify;
    } else {
        return false
    }
}

module.exports = { CreateUser , verifyUserController}


//find gives list of object
//fincOne gives one object



