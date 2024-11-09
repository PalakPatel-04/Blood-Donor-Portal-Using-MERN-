import { useState } from "react"
import axios from 'axios'
import NavBar from "./NavBar"
export default function ContactUs(){
   
    const [contact, setContact] = useState(
        {
            userName: "",
            userEmail: "",
            userPhone: "",
            userQuery: ""
        }
    )
    const handleChange = (e) => {
        const { id, value } = e.target;
        setContact({ ...contact, [id]: value });
      };

      const URL="http://localhost:5000/bloodPortal/addContact"
      const handleSubmit =async (e) => {
        e.preventDefault();  
        try {
            const response = await axios.post(URL, contact);
            console.log('Server response:', response);
            // console.log(contact);
            window.location.reload();                     // This will reload the page
           
        } 
        catch (error) {
            console.log(error);
        }
    }
     
    let image={
        backgroundImage: 'url("https://www.shutterstock.com/image-photo/blur-blood-donation-transfusion-hospital-260nw-1650510418.jpg")',
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
    }
    
    let conBox = {
        marginTop:"15px",
        marginLeft:"400px",
        marginRight:"400px",
        border:"2px solid grey",
        borderRadius:"15px",
        backgroundColor:"white",
        boxShadow: "0 4px 8px rgba(56, 6, 36, 1.5)" 
    }

    return(
        <>
        <NavBar/>
        <div style={image}> 
        <h3 style={{ textAlign: "center"}}>Contact Us</h3>
         <form style={conBox} onSubmit={handleSubmit}>
                <div style={{margin:"15px 15px 5px 15px"}}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="userName" placeholder="Enter your name" value={contact.userName} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" value={contact.userEmail} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userPhone" className="form-label">Phone No.</label>
                    <input type="number" className="form-control" id="userPhone" placeholder="123..." value={contact.userPhone} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userQuery" className="form-label">Query ?</label>
                    <input type="textarea" className="form-control" id="userQuery" placeholder="Type your query here!!" value={contact.userQuery} onChange={handleChange}/>
                </div> 
                    <button style={{ marginLeft: "45%", marginTop: "20px" }} type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
            </div>
        </>
    )
}