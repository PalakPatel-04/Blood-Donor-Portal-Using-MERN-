import React, { useEffect } from "react"
import {useNavigate } from "react-router-dom"
import AdminHeader from "./AdminHeader";

export default function AdminHome() {

    const navigate = useNavigate();
    const Token_data = localStorage.getItem("Token_key")
    useEffect(() => {
        console.log(`Token data is ${Token_data}`);
        if (!Token_data)                   
        {
            navigate('/adminlogin')
        }
    }, [])

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
        },
        header: {
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 20px',
            textAlign: 'center',
        },
        link: {
            textDecoration: 'none',
            color: '#333',
        },
        main: {
            flex: 1,
            padding: '20px',
        },
    }

    return (
        <>
            <div style={styles.container}>
            <header style={styles.header}>
                <h1>Admin Dashboard</h1>
            </header>
            <AdminHeader />
            <main style={styles.main}>
                <h2>Welcome, Admin!</h2>
                <p>This is the admin home page where you can manage your platform.</p>
            </main>
            </div>
        </>
    )
}