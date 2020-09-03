import React from 'react'

const FullScreenLayout = ({ children }) => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default FullScreenLayout