import { useState, useEffect } from "react"
import axios from "axios"
import AdminHeader from "./AdminHeader"


export default function AllRegistration() {

    let [registration, setRegistration] = useState([])
    const URL = 'http://localhost:5000/admin/showRegistrations'

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(URL)
                console.log(response.data);

                setRegistration(response.data)
            } catch (error) {
                console.log(error);

            }

        }
        fetchData()
    }, [])

    const deleteData = async (e, id) => {
        e.preventDefault()
        alert(id)
        if (window.confirm("Really want to delete ???")) {
            const isdelete = await axios.post(`http://localhost:5000/admin/deleteRegistration/${id}`)
            if (isdelete.data.code == 200) {
                alert("Record deleted")
                setRegistration(registration.filter(items => items._id != id))
            }
        }
    }

    return (
        <>
            <AdminHeader />
            <h1 className="text-center mt-4 mb-4">All Registrations</h1>
            <div>
                {
                    <table  border="2px black" className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Password</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Blood Group</th>
                                <th>Address</th>
                                <th>Delete Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registration.map((items) => {
                                    return (
                                        <tr>
                                            <td>{items.userId}</td>
                                            <td>{items.userPass}</td>
                                            <td>{items.userName}</td>
                                            <td>{items.userPhone}</td>
                                            <td>{items.userEmail}</td>
                                            <td>{items.userAge}</td>
                                            <td>{items.userBloodgroup}</td>
                                            <td>{items.userAddress}</td>
                                            <td>
                                                <button className="btn text-white bg-danger" onClick={(event) => { deleteData(event, items._id) }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
}