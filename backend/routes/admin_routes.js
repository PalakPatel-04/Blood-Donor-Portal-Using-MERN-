import express from 'express'

import {adminLogin, viewContact, viewFeedback, viewLogin, viewRegistration,deleteContact, editContact, deleteFeedback,deleteUserlogin, deleteRegistration,getContact} from '../controller/admin_controller.js'

const adminRoutes = express.Router()

adminRoutes.post("/adminlogin", adminLogin)
adminRoutes.get("/showContacts", viewContact)
adminRoutes.get("/showFeedbacks", viewFeedback)
adminRoutes.get("/showLogins", viewLogin)
adminRoutes.get("/showRegistrations", viewRegistration)
adminRoutes.post("/deleteContact/:id", deleteContact)
adminRoutes.post("/editContact",editContact)   
adminRoutes.post("/deleteFeedback/:id", deleteFeedback)
adminRoutes.post("/deleteUserlogin/:id", deleteUserlogin)
adminRoutes.post("/deleteRegistration/:id", deleteRegistration)
adminRoutes.get("/getContact",getContact)

export default adminRoutes


