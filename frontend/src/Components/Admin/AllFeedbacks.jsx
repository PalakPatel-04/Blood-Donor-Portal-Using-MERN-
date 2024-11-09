import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import AdminHeader from "./AdminHeader"

export default function AllFeedbacks() {

    const [feedback, setfeedback] = useState([])
    const URL = "http://localhost:5000/admin/showFeedbacks"


    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(URL)
                console.log(response.data);
                setfeedback(response.data)

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
            const isdelete = await axios.post(`http://localhost:5000/admin/deleteFeedback/${id}`)
            if (isdelete.data.code == 200) {
                setfeedback(feedback.filter(items => items._id !== id))
                alert("Record deleted successfully")
            }
        }
    }

    return (
        <>
            <AdminHeader/>
            <h2 className="text-center mt-4 mb-4">All Feedbacks</h2>
            <div>
                {
                    <table border="2px black" className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Rating</th>
                                <th>Remark</th>
                                <th>Delete Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                feedback.map((items) => {
                                    return (
                                        <tr>
                                            <td>{items.userName}</td>
                                            <td>{items.userEmail}</td>
                                            <td>{items.userRating}</td>
                                            <td>{items.userRemark}</td>

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