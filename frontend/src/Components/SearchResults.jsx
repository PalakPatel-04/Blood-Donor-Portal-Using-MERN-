import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';

export default function SearchResults() {
    const { state } = useLocation();
    const { users } = state || { users: [] };

    return (
        <>
        <NavBar/>
        <div>
            <h2 className="text-center mt-4 mb-4">Search Results</h2>
            <table border="2px black" className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Blood Group</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map(user => (
                            <tr key={user._id}>
                                <td>{user.userId}</td>
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <td>{user.userPhone}</td>
                                <td>{user.userAge}</td>
                                <td>{user.userBloodgroup}</td>
                                <td>{user.userAddress}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    );
}
