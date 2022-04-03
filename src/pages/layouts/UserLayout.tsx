import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterUser from '../../components/FooterUser'
import HeaderUser from '../../components/HeaderUser'

type Props = {}

const UserLayout = (props: Props) => {
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