import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>

            {children}

        </div>
    )
}

export default Layout