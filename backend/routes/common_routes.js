import express from 'express';
import {contactus, feedback, userlogin, registration, addContact, addFeedback, addUserlogin,  addRegistration,searchUsersByBloodGroup} from '../controller/common_controller.js'

const routes = express.Router()                               //it will return routes to make to various to path(endpoint/routes)

routes.post("/contactus",contactus)
routes.post("/feedback",feedback)
routes.post("/userlogin", userlogin)
routes.post("/registration", registration)

routes.post("/addContact", addContact)                       //to send contact data to mongodb
routes.post("/addFeedback", addFeedback)
routes.post("/addUserlogin", addUserlogin)
routes.post("/addRegistration", addRegistration)

routes.post("/searchUsersByBloodGroup", searchUsersByBloodGroup);

export default routes
