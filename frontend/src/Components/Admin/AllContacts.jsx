import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import AdminHeader from "./AdminHeader"
import { Link } from "react-router-dom"

export default function AllContacts() {

    const [contact, setContact] = useState([])
    const URL = "http://localhost:5000/admin/showContacts"


    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(URL)
                console.log(response.data);
                setContact(response.data)

            } catch (error) {
                console.log(error);

            }
        }
        fetchData()
    }, [])

    const deleteData = async (e, id) => {
        e.preventDefault()
        alert(id)
        if (window.confirm("Do you want to delete the record")) {
            const isdelete = await axios.post(`http://localhost:5000/admin/deleteContact/${id}`)
            if(isdelete.data.code==200){
                setContact(contact.filter(items=>items._id !==id))
                alert("Record deleted successfully")
            }
        }
    }

    return (
        <>
            <AdminHeader />
            <h2 className="text-center mt-4 mb-4">All Contacts</h2>
            <div>
                {
                    <table  border="2px black" className="table table-bordered table-hover">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Query</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contact.map((items) => {
                                    return (

                                        <tr>
                                            <td>{items.userName}</td>
                                            <td>{items.userEmail}</td>
                                            <td>{items.userPhone}</td>
                                            <td>{items.userQuery}</td>

                                            <td>
                                                <button className="btn text-white bg-danger" onClick={(event) => { deleteData(event, items._id) }}>Delete</button>
                                            </td>
                                            <th>
                                                 <Link to={`/editContact?id=${items._id}`}>Edit</Link>
                                            </th>
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