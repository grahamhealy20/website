import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <h1 className="title is-4"><Link to="/blog" className="navbar-item">Graham Healy</Link></h1>
        </div>
    </nav>
)

export default Navbar;