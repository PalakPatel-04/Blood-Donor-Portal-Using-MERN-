import adminModel from "../model/admin.model.js";
import contactModel from "../model/contact.model.js"
import feedbackModel from "../model/feedback.model.js"
import userloginModel from "../model/userlogin.model.js"
import registrationModel from "../model/registration.model.js"

//admin login
export const adminLogin = async (req, res) => {
  const { adminId, pass } = req.body;

  console.log("Admin reg attempt received:");
  console.log("Admin ID:", adminId); 
  console.log("Password:", pass);      

  try {
    const admin = await adminModel.findOne({ adminId:adminId });

    if (admin) {
      if (admin.pass === pass) {
        res.send({ message: "Login Successful", code: 200, token:adminId});
      } else {
        console.log("password block"+admin.adminId);
        res.send({ message: "Invalid credentials", code: 404 });
      }
    } else {
      res.send({ message: "Admin ID not found" });
    }
  } catch (error) {
    console.error("Error during admin reg:", error);
    res.send({ message: "Server error", code: 500 });
  }
};

//show contact
export const viewContact = async (req, res) => {

  try {
      const contacts = await contactModel.find()         //it like a select*from contact

      if (contacts != null) {
          console.log("All contacts are :- " + contacts);
          res.send(contacts)                            // send back react code (UI) it fullfill api request
      }
      else {
          res.send({ code: 404, message: "No Data found" })
      }

  } catch (error) {
      console.log(error);

  }
}

//show feeback
export const viewFeedback = async (request, response) => {
  try {
      const feedback = await feedbackModel.find()
      if (feedback != null) {
          console.log("All Feedbacks are :" + feedback);
          response.send(feedback)

      }
      else {
          console.log({ code: 404, message: "No data is found" });
      }

  } catch (error) {
      console.log(error);
  }
}

//all userlogins
export const viewLogin = async (req, res) => {

  try {
      const reg = await userloginModel.find()         //it like a select*from contact

      if (reg != null) {
          console.log("All user reg are :- " + reg);
          res.send(reg)                            // send back react code (UI) it fullfill api request
      }
      else {
          res.send({ code: 404, message: "No Data found" })
      }

  } catch (error) {
      console.log(error);

  }
}

//user registration
export const viewRegistration = async (req, res) => {

  try {
      const reg = await registrationModel.find()         //it like a select*from contact

      if (reg != null) {
          console.log("All user reg are :- " + reg);
          res.send(reg)                            // send back react code (UI) it fullfill api request
      }
      else {
          res.send({ code: 404, message: "No Data found" })
      }

  } catch (error) {
      console.log(error);

  }
}

// delete contact code
export const deleteContact = async (request, response) => {
  try {
      const id = request.params.id
      console.log(`delete id : ${id}`);

      const isdelete = await contactModel.deleteOne(
          {
              _id: id
          }
      )

      if (isdelete != null) {
          response.send({ code: 200 })
      }

  } catch (error) {
      console.log(error);

  }
}

// get contact data for token data to define.
export const getContact=async(req,res)=>{
  const id = req.query.id;
  try {
    console.log(id);
    const contact = await contactModel.findOne({_id:id});         // Fetching the contact from the database
    
    if (!contact) {
      return res.send({ message: 'Contact not found' });
    }

    res.send(contact);                                            // Sending the contact data as a response
  } catch (error) {
    res.send({ message: 'Server error', error });
  }
};

//edit contact code
export const editContact=async(req,res)=>{
  try {
      
      const user_data = req.body
      const {id,userName,userEmail,userPhone,userQuery}=user_data
      console.log(id+userName+userEmail+userPhone+userQuery);
      
      const updateDoc={
        $set:{
          userName:userName,
          userEmail:userEmail,
          userPhone:userPhone,
          userQuery:userQuery
        } 
      };
      const filter={_id:id}
      const status = await contactModel.updateOne(filter,updateDoc)
      console.log(status);
      res.send(status)
    } 

  catch(err)
  {
      console.log(err);

  }
}

//delete feedback code 
export const deleteFeedback = async (request, response) => {
  try {
      const id = request.params.id
      console.log(`delete id : ${id}`);

      const isdelete = await feedbackModel.deleteOne(
          {
              _id: id
          }
      )
      if (isdelete != null) {
          response.send({ code: 200 })
      }

  } catch (error) {
      console.log(error);

  }
}

// delete userlogin code
export const deleteUserlogin = async (request, response) => {
  try {
      const id = request.params.id
      console.log(`delete id : ${id}`);

      const isdelete = await userloginModel.deleteOne(
          {
              _id: id
          }
      )

      if (isdelete != null) {
          response.send({ code: 200 })
      }

  } catch (error) {
      console.log(error);

  }
}

// delete user registration code
export const deleteRegistration = async (request, response) => {
  try {
      const id = request.params.id
      console.log(`delete id : ${id}`);

      const isdelete = await registrationModel.deleteOne(
          {
              _id: id
          }
      )

      if (isdelete != null) {
          response.send({ code: 200 })
      }

  } catch (error) {
      console.log(error);

  }
}