import React from 'react'

const HomeLayout = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} className="home hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    {props.children}
                </div>
            </div>
        </section>
    )
})

export default HomeLayout