import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const UserLayout = (props: Props) => {
    return (
    <div>
        <header>Header User</header>
        <main>
            <Outlet/>
        </main>
        <footer>Footer User</footer>
    </div>
    )
}

export default UserLayout