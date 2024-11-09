import { Link, useNavigate } from "react-router-dom"

export default function AdminHeader() {

    const navigate = useNavigate();
    const Token_data = localStorage.getItem("Token_key")

    const logout = (e) => {
        e.preventDefault();
        console.log("HEllo function");

        if (window.confirm("Do you want to logout")) {
            console.log("HEllo if");

            if (!Token_data) {
                navigate("/adminlogin")
                console.log("HEllo token_dtaa");

            }
            else {
                localStorage.removeItem("Token_key")
                navigate("/adminlogin")
            }
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#D7D2CB"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/adminHome">Admin Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Donor
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/allregistrations">All Registrations</Link></li>
                                    <li><Link className="dropdown-item" to="/alllogins">All Logins</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/allContacts">All Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allFeedbacks">All Feedbacks</Link>
                            </li>
                            <li className="nav-item" style={{ position: "absolute", right: "0",fontWeight: "bold" }}>
                                <Link className="nav-link text-success" to="#" onClick={logout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
