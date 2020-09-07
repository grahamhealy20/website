import React from 'react'

const FullScreenLayout = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    {props.children}
                </div>
            </div>
        </section>
    )
})

export default FullScreenLayout