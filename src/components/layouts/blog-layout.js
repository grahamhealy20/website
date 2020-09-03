import React from 'react'

import Navbar from "../misc/navbar"

const BlogLayout = ({ children }) => {
    return (
        <div className="blog">
            <div className="container">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default BlogLayout