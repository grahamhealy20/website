import React from 'react'

import Navbar from "../misc/navbar"

const BlogLayout = ({ children }) => {
    return (
        <div className="blog">
            <div className="container">
                <Navbar />
                <div className="section">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BlogLayout