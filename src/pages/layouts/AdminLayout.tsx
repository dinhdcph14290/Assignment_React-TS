import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../admin/Header'
import '../../assets/css/dashboard.css'
import Sidebar from '../admin/Sidebar'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
    <div>
        <Sidebar/>
        <section className="home-section">
            < Header/>
            <div className="home-content">
            <Outlet/>
            </div>
        </section>
    </div>
    )
}

export default AdminLayout