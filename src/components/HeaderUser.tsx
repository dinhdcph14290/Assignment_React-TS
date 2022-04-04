import { RobotOutlined } from '@ant-design/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const HeaderUser = (props: Props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active fs-5" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active fs-5" to="/products">Product</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active fs-5" to="/admin/products">ManagerProduct</NavLink>
            </li>
            </ul>
            <form className="d-flex">
            <NavLink className="nav-link active" to="/admin">Admin</NavLink>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>

        
        
    )
}

export default HeaderUser