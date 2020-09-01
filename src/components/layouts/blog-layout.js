import React from 'react'

import Navbar from "../misc/navbar"

const BlogLayout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            {children}
        </div>
    )
}

export default BlogLayout