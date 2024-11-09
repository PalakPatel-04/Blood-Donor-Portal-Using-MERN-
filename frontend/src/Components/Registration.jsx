import axios from 'axios'
import { useState } from "react"
import NavBar from "./NavBar"
export default function Registration(){

    const [registration, setRegistration]=useState(
        {
            userId: "",
            userPass:"",
            userName: "",
            userPhone: "",
            userEmail: "",
            userAge: "",
            userBloodgroup: "",
            userAddress:""
        }
    )
    const URL="http://localhost:5000/bloodPortal/addRegistration"
    const handleChange = (e) => {
        const { id, value } = e.target;
        setRegistration({ ...registration, [id]: value });
      };

      const handleSubmit =async (e) => {
        e.preventDefault();  
        try{
            const response=await axios.post(URL, registration)
            console.log('Server response:', response);
            // console.log(registration);
            alert("Registration successful!");
            window.location.reload();                      // This will reload the page
            
        }   
        catch(err){
            console.log("error occured");
            
        }     
      };
    let image={
        backgroundImage: 'url("https://img.freepik.com/premium-photo/ai-genarative-blood-drop-blurry-background-represent-blood-donation-concept_875825-2878.jpg")',
        height: "120vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
    }
    let feedback = {
        marginTop:"15px",
        marginLeft:"350px",
        marginRight:"350px",
        border:"2px solid grey",
        borderRadius:"15px",
        backgroundColor:"white",
        boxShadow: "0 4px 8px rgba(56, 6, 36, 1.5)" 
    }
    return(
        <>
        <NavBar/>
        <div style={image}>
        <h3 style={{ textAlign: "center"}}>Register Yourself Here!</h3>
            <form style={feedback} onSubmit={handleSubmit}>
                <div style={{margin:"15px 15px 5px 15px"}}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">ID</label>
                    <input type="text" className="form-control" id="userId" placeholder="Enter your ID" value={registration.userId} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="userPass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="userPass" placeholder="Enter your Password" value={registration.userPass} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="userName" placeholder="Enter your name" value={registration.userName} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userPhone" className="form-label">Phone No.</label>
                    <input type="number" className="form-control" id="userPhone" placeholder="Enter registration number" value={registration.userPhone} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" value={registration.userEmail} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userAge" className="form-label">Age</label>
                    <input type="number" className="form-control" id="userAge" placeholder="Enter your age" value={registration.userAge} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userBloodgroup" className="form-label" placeholder="Select your BloodGroup">Blood Group</label>
                    <select className="mb-3 form-control" id="userBloodgroup" value={registration.userBloodgroup} onChange={handleChange}>
                        <option>select</option>
                        <option>A+</option>
                        <option>B+</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div> 
                <div className="mb-3">
                    <label htmlFor="userAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="userAddress" placeholder="Enter your address" value={registration.userAddress} onChange={handleChange}/>
                </div>
                <button style={{ marginLeft: "45%" }} type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}