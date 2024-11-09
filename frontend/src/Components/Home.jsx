import NavBar from "./NavBar.jsx"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
export default function Home(){
  
    let heroContainerStyle = {
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",              // Ensure no overflow from the blurred background
      };
    
      // Style for the blurred background image
      let heroStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundImage: 'url("https://img.etimg.com/photo/msid-76340127,quality-100/blood-donation_istock.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(8px)",                   
        zIndex: "-1",                          
      };
    
      // Style for the overlay to enhance text readability
      let overlayStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)", 
        zIndex: "0",                           
      };
    
      // Style for the text content
      let contentStyle = {
        position: "relative",
        zIndex: "1",                           // Ensure content stays on top of overlay
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      };
    
      // Button Style
      let buttonStyle = {
        padding: "15px 30px",
        margin: "10px",
        backgroundColor: "#e74c3c",
        color: "white",
        border: "none",
        borderRadius: "30px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        textDecoration: "none",
      };
    
      // Section Style
      let sectionStyle = {
        padding: "50px 20px",
        textAlign: "center",
      };
    
      // Card Style
      let cardStyle = {
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "center",
        margin: "20px",
      };
    return(
        <>
        <div>
        <NavBar/>
        <header style={heroContainerStyle}>
          <div style={heroStyle}></div>
          <div style={overlayStyle}></div>
          <div style={contentStyle}>
            <h1>Welcome to Blood Donor Connect</h1>
            <p>Join hands to save lives. Find a donor or donate blood to help those in need.</p>
            <div>
              <Link to="/registration" style={buttonStyle}>Donate Blood</Link>
            </div>
          </div>
        </header>

        <section style={sectionStyle}>
          <h2>Why Donate Blood?</h2>
          <div className="row">
            <div className="col-md-4">
              <div style={cardStyle}>
                <h3>Save Lives</h3>
                <p>Each blood donation can save up to three lives. Be the hero someone needs today.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div style={cardStyle}>
                <h3>It's Safe & Simple</h3>
                <p>The donation process is quick, easy, and safe. Join our community of donors.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div style={cardStyle}>
                <h3>Connect with People</h3>
                <p>Our platform helps you connect with people in urgent need, making a real difference.</p>
              </div>
            </div>
          </div>
        </section>

        <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#333", color: "white" }}>
          <p>Blood Donor Connect © 2024. All rights reserved.</p>
          <Link to="/aboutus" style={{ color: "#e74c3c", textDecoration: "none" }}>Learn more about us</Link>
        </footer>
      </div>
        </>
    )
}