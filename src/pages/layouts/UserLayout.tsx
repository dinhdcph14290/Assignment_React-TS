import React from 'react'
import { Outlet } from 'react-router-dom'
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
        <footer>Footer User</footer>
    </div>
    )
}

export default UserLayout