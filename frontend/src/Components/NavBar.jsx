import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function NavBar(){

  const [bloodGroup, setBloodGroup] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post("http://localhost:5000/bloodPortal/searchUsersByBloodGroup", { bloodGroup });
          navigate('/search-results', { state: { users: response.data } });
      } catch (error) {
          console.error(error);
      }
  };

    return(
        <>
        <h2 style={{textAlign:"center", backgroundColor:"#cd5c5c",marginBottom:"0px"}}>Blood Donor Connect Portal</h2>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#D7D2CB"}}>
   <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/aboutus">AboutUs</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Donors
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="registration">Registration</a></li>
            <li><a className="dropdown-item" href="userlogin">Login</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactus">ContactUs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/feedback">Feedback</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="adminlogin">Admin</a>
        </li>
      </ul>
      <form onSubmit={handleSearch} className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Donor (in CAPS)" aria-label="Search" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}