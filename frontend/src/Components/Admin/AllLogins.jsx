import { useState, useEffect } from "react"
import axios from "axios"
import AdminHeader from "./AdminHeader"


export default function AllLogins() {

    let [userlogin, setUserlogin] = useState([])
    const URL = 'http://localhost:5000/admin/showLogins'

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(URL)
                console.log(response.data);

                setUserlogin(response.data)
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
            const isdelete = await axios.post(`http://localhost:5000/admin/deleteUserlogin/${id}`)
            if (isdelete.data.code == 200) {
                alert("Record deleted")
                setUserlogin(userlogin.filter(items => items._id != id))
            }
        }
    }

    return (
        <>
            <AdminHeader />
            <h1 className="text-center mt-4 mb-4">All Logins</h1>
            <div>
                {
                    <table  border="2px black" className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userlogin.map((items) => {
                                    return (

                                        <tr>
                                            <td>{items.userId}</td>
                                            <td>{items.password}</td>
                                            <td>
                                                <button className="btn text-white bg-danger"
                                                    onClick={(event) => { deleteData(event, items._id) }}
                                                >Delete</button>
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