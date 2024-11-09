import { request, response } from 'express'
import contactModel from '../model/contact.model.js';
import feedbackModel from '../model/feedback.model.js'
import userloginModel from '../model/userlogin.model.js';
import registrationModel from '../model/registration.model.js';

export const contactus = (request, response) => {
    response.send("<h1>This is contact us page return by controller</h1>")
    console.log(request.body);          // This will log the incoming data from ContactUs.jsx form
}

export const feedback=(request,response)=>{
    response.send("<h1>This is feedback page return by controller</h1>")
    console.log(request.body);
}

export const registration=(request, response)=>{
    response.send("<h1>This is registration page return by controller</h1>")
    console.log(request.body);
}

//add contact
export const addContact = async (req, res) => {
    const contact = req.body
    const { userName, userEmail, userPhone, userQuery } = contact
    try {
        const contactDoc = contactModel(
            {
                userName: userName,  //left schema (coloum name) variable right to store in database
                userEmail: userEmail,
                userPhone: userPhone,
                userQuery: userQuery,
            }
        )
        await contactDoc.save()
    } catch (error) {
        console.log(error);
    }
    res.send("Data is received")
}

//add feedback
export const addFeedback = async (request, response) => {
    const feedBack = request.body
    const { userName, userEmail, userRating, userRemark } = feedBack
    try {
        const feedbackDoc = feedbackModel(
            {
                userName: userName,
                userEmail: userEmail,
                userRating: userRating,
                userRemark: userRemark,
            }
        )
        await feedbackDoc.save()

    } catch (error) {
        console.log(error);

    }
    response.send(":::: Data is Recevied ::::")
}

// add userlogin to DB
export const addUserlogin = async (request, response) => {
    const userLogin = request.body
    const { userId, password} = userLogin
    try {
        const userloginDoc = userloginModel(
            {
                userId: userId,
                password: password
            }
        )
        await userloginDoc.save()

    } catch (error) {
        console.log(error);

    }
    response.send("Data is Recevied")
}

//user login using registration credentials
export const userlogin = async (req, res) => {
    const { userId, password } = req.body;

    try {
        const user = await registrationModel.findOne({ userEmail: userId });
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }
        if (user.userPass !== password) {
            return res.json({ success: false, message: 'Incorrect password' });
        }
        return res.json({ success: true, message: 'Login successful' });

    } catch (error) {
        console.error('Login error:', error);
    }
};

//add registration
export const addRegistration = async (request, response) => {
    const Reg = request.body
    const { userId, userPass, userName, userPhone, userEmail, userAge, userBloodgroup, userAddress } = Reg
    try {
        const regDoc = registrationModel(
            {
                userId: userId,
                userPass: userPass,
                userName: userName,
                userPhone: userPhone,
                userEmail: userEmail,
                userAge: userAge,
                userBloodgroup: userBloodgroup,
                userRemark: userAddress
            }
        )
        await regDoc.save()

    } catch (error) {
        console.log(error);

    }
    response.send(":::: Data is Recevied ::::")
}

//search user
export const searchUsersByBloodGroup = async (req, res) => {
    const { bloodGroup } = req.body;
    try {
        const users = await registrationModel.find({ userBloodgroup: bloodGroup });
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};
