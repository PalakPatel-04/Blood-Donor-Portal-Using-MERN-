import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import NavBar from "./NavBar";

export default function UserLogin() {
    const [userlogin, setUserlogin] = useState({
        userId: "", 
        password: "",
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserlogin({ ...userlogin, [id]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const URL = "http://localhost:5000/bloodPortal/userlogin"; 

        try {
            const response = await axios.post(URL, userlogin);
            
            if (response.data.success) {
                alert("Login successful!");
                navigate("/"); 
            } else {
                alert(response.data.message || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong");
        }
    };

    let image = {
        backgroundImage: 'url("https://img.freepik.com/premium-photo/ai-genarative-blood-drop-blurry-background-represent-blood-donation-concept_875825-2878.jpg")',
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
    };
    
    let login = {
        marginTop: "15px",
        marginLeft: "400px",
        marginRight: "400px",
        border: "2px solid grey",
        borderRadius: "15px",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(56, 6, 36, 1.5)",
    };

    return (
        <div>
            <NavBar />
            <div style={image}>
                <h2 style={{ textAlign: "center" }}>Donor Login</h2>
                <form className="card-body" style={login} onSubmit={handleLogin}>
                    <div style={{ margin: "15px 15px 5px 15px" }}>
                        <div className="mb-3">
                            <label htmlFor="userId" className="form-label">User ID</label>
                            <input type="text" className="form-control" id="userId" placeholder="Enter your email or ID" onChange={handleChange} value={userlogin.userId} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={handleChange} value={userlogin.password} required/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginLeft: "40%", marginTop: "16px" }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
