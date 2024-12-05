const {ErrorHandler}=require('../utilis/ErrorHandler')
const usermodel = require('../model/user_model')

export async function CreateUser(req, res) {
    const { Name, email, password } = req.body;
    const checkUserpresent = await usermodel.findOne({
        email: email, //user schema
    });

    if (checkUserpresent) {
        return res.send('User already exists')
       
    }

    const newUser=new usermodel({
        Name: Name,
        email: email,
        password: password,
    })

    await newUser.save();
    return res.send('user Created Successfully')
}


//find gives list of object
//fincOne gives one object
