import axios from 'axios'
import { useState } from 'react';
import NavBar from "./NavBar"
export default function Feedback(){

    const [feedback, setFeedback] = useState(
        {
            userName: "",
            userEmail: "",
            userRating: "",
            userRemark: ""
        }
    )
    const URL="http://localhost:5000/bloodPortal/addFeedback"
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFeedback({ ...feedback, [id]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();  
        try{
            const response=await axios.post(URL, feedback)
            console.log('Server response:', response);
            // console.log(feedback);
            alert("Feedback given successfully!");
            window.location.reload();                      // This will reload the page
            
        }   
        catch(err){
            console.log("error occured");
            
        }     
      };
      let image={
        backgroundImage: 'url("https://www.shutterstock.com/image-photo/blur-blood-donation-transfusion-hospital-260nw-1650510418.jpg")',
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
    }
    
    let feedback1 = {
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
        <h3 style={{ textAlign: "center"}}>Feedback Form</h3>
            <form style={feedback1} onSubmit={handleSubmit}>
                <div style={{margin:"15px 15px 5px 15px"}}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="userName" placeholder="Enter your name" onChange={handleChange} value={feedback.userName}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" onChange={handleChange} value={feedback.userEmail}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="userRating" className="form-label" placeholder="Select your Rating">Rating</label>
                    <select className="mb-3 form-control" id="userRating" onChange={handleChange} value={feedback.userRating}>
                        <option>select</option>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>

                </div>
                <div className="mb-3">
                    <label htmlFor="userRemark" className="form-label">Remark</label>
                    <input type="textarea" className="form-control" id="userRemark" placeholder="Give your feedback!!" onChange={handleChange} value={feedback.userRemark}/>
                </div> 

                <button style={{ marginLeft: "45%" }} type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        </>
    )
}