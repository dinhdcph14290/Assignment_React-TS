import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
            <nav>
    <div className="sidebar-button">
        <i className="bx bx-menu sidebarBtn" />
        <span className="dashboard">Dashboard</span>
    </div>
    <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search" />
    </div>
    <div className="profile-details">
        {/* <img src="images/profile.jpg" alt=""> */}
        <span className="admin_name">CiDii</span>
        <i className="bx bx-chevron-down" />
    </div>
    </nav>

)
}

export default Header