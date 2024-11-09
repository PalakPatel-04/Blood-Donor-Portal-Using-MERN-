import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './Components/AboutUs.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Home from './Components/Home.jsx'
import Feedback from './Components/Feedback.jsx'
import AdminLogin from './Components/AdminLogin.jsx'
import Registration from './Components/Registration.jsx'
import UserLogin from './Components/UserLogin.jsx'
import AdminHome from './Components/Admin/AdminHome.jsx'
import AllContacts from './Components/Admin/AllContacts.jsx'
import AllFeedbacks from './Components/Admin/AllFeedbacks.jsx'
import AllLogins from './Components/Admin/AllLogins.jsx'
import AllRegistration from './Components/Admin/AllRegistration.jsx'
import SearchResults from './Components/SearchResults.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
    {
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/userlogin" element={<UserLogin/>}></Route>

        <Route path="/adminHome" element={<AdminHome />} ></Route>
        <Route path="/allcontacts" element={<AllContacts />} ></Route>
        <Route path="/allfeedbacks" element={<AllFeedbacks />} ></Route>
        <Route path="/alllogins" element={<AllLogins />} ></Route>
        <Route path="/allregistrations" element={<AllRegistration />} ></Route>

        <Route path="/search-results" element={<SearchResults />} ></Route>
        
      </Routes>
    }
    </BrowserRouter>
    </>
  )
}

export default App
