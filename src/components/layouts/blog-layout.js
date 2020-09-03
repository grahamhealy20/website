import React from 'react'

import Navbar from "../misc/navbar"

const BlogLayout = ({ children }) => {
    return (
        <div className="blog container">
            <Navbar />
            {children}
        </div>
    )
}

export default BlogLayout