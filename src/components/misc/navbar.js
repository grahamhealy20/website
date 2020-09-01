import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">Graham Healy</Link>
        </div>
    </nav>
)

export default Navbar;