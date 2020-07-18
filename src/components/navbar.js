import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
    <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">Graham Healy</Link>
            </div>
        </nav>
    </div>
)

export default Navbar;