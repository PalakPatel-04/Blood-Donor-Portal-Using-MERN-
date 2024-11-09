import axios from 'axios'
import { useState } from 'react';
import NavBar from "./NavBar"
import {useNavigate} from "react-router-dom"
export default function AdminLogin(){

    const URL="http://localhost:5000/admin/adminlogin"
    const [adminlogin, setAdminlogin] = useState(
        {
            adminId: "",
            pass: ""
        }
    )
    const navigate= useNavigate();
    const fetchData = (e) => {
        setAdminlogin({ ...adminlogin, [e.target.name]: e.target.value  });
        console.log("userID and Pass " + adminlogin);
      };
    
      const handleSubmit =async (e) => {
        e.preventDefault();  
        try{
            let response = await axios.post(URL, adminlogin)
            console.log("reponse is : " + response.data);
            // console.log(adminlogin);
            if (response.data.code == 200) {
                alert(response.data.message)
                localStorage.setItem("Token_key", response.data.token);        //to store data on brower locally
                navigate("/adminHome")
                console.log(response.data.token)
            }
            else if (response.data.code == 404) {
                alert(" password wrong")

            }
            else {
                alert("email id not matched...")
            }
            
        }   
        catch(err){
            console.log("error occured");
            
        }     
      };
    let login = {
        marginTop:"15px",
        marginLeft:"400px",
        marginRight:"400px",
        border:"2px solid grey",
        borderRadius:"15px",
        boxShadow: "0 4px 8px rgba(56, 6, 36, 1.5)" 
    }

    return(
        <>
        <NavBar/>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>Admin Login</h2>
                <form className="card-body" style={login} onSubmit={handleSubmit}>
                    <div  style={{margin:"15px 15px 5px 15px"}}>
                    <div className="mb-3">
                    <label htmlFor="adminId" className="form-label">Admin Id</label>
                    <input type="text" className="form-control" id="adminId" placeholder="Enter your Id" name="adminId" onChange={fetchData} value={adminlogin.adminId}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="text" className="form-control" id="pass" placeholder="Enter the password" name="pass"onChange={fetchData} value={adminlogin.pass}/>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginLeft: "40%", marginTop: "16px" }}>Submit</button>
                    </div>
                </form>
        </>
    )
}