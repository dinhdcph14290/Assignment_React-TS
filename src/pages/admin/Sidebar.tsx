import React from 'react'

type SidebarProps = {}

const Sidebar = (props: SidebarProps) => {
return (
        <div className="sidebar">
    <div className="logo-details">
        <i className="bx bxl-c-plus-plus" />
        <span className="logo_name">CongDinh</span>
    </div>
    <ul className="nav-links">
        <li>
        <a href="http://localhost:3000/admin/dashboard" className="active">
        <i className='bx bx-grid-alt' ></i>
            <span className="links_name">Dashboard</span>
        </a>
        </li>
        <li>
        <a href="http://localhost:3000/admin/products">
            <i className="bx bx-box" />
            <span className="links_name">Product</span>
        </a>
        </li>
        <li>
        <a href="#">
            <i className="bx bx-list-ul" />
            <span className="links_name">Order list</span>
        </a>
        </li>
        <li>
        <a href="#">
            <i className="bx bx-pie-chart-alt-2" />
            <span className="links_name">Analytics</span>
        </a>
        </li>
        <li>
        <a href="#">
            <i className="bx bx-coin-stack" />
            <span className="links_name">Stock</span>
        </a>
        </li>
        <li>
        <a href="#">
            <i className="bx bx-book-alt" />
            <span className="links_name">Total order</span>
        </a>
        </li>
        <li>
        <a href="#">
            <i className="bx bx-user" />
            <span className="links_name">Team</span>
        </a>
        </li>
        <li>
        <a href="#">
            <i className="bx bx-message" />
            <span className="links_name">Messages</span>
        </a>
        </li>
        <li>
        <a href="#">
            <i className="bx bx-heart" />
            <span className="links_name">Favrorites</span>
        </a>
        </li>
        <li>
        <a href="#">
            <i className="bx bx-cog" />
            <span className="links_name">Setting</span>
        </a>
        </li>
        <li className="log_out">
        <a href="#">
            <i className="bx bx-log-out" />
            <span className="links_name">Log out</span>
        </a>
        </li>
    </ul>
    </div>

)
}

export default Sidebar