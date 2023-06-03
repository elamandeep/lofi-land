import React from 'react';
import { Outlet ,Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
                <main>
                    <section>
                        <h1>Dashboard</h1>
                        <Link to="/login">Login</Link>
                    </section>
                    <Outlet/>
                </main>
        </>
    )
}

export default Dashboard;