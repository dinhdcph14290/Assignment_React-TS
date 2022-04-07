import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterUser from '../../components/FooterUser'
import HeaderUser from '../../components/HeaderUser'

type UserLayoutProps = {}

const UserLayout = (props: UserLayoutProps) => {
    return (
    <div>
        <header>
            <HeaderUser/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <FooterUser />
        </footer>
    </div>
    )
}

export default UserLayout