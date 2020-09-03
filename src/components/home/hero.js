import React from 'react';
import profilePhoto from "./profile.jpg"

import { Link } from "gatsby"

const Hero = React.forwardRef((props, ref) => {
    return (

        <div className="columns is-vcentered">
            <div className="column is-two-thirds ">
                <section className="section about-me">
                    <h1 className="title hero-title" ref={ref['title']}>graham healy</h1>
                    <p className="body" ref={ref['textBody']}>tempus elit at, iaculis elit. Curabitur fermentum turpis efficitur nulla facilisis viverra. Quisque congue ex non dolor tincidunt, id laoreet metus euismod. Nulla nibh risus, aliquet a lacus sed, ornare ornare turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer mi sem, iaculis eu nibh non, aliquet facilisis turpis. Sed non tortor ullamcorper, feugiat diam ac, pulvinar elit. Duis et elit non quam semper porttitor. In commodo finibus fringilla. Nunc ac risus et risus viverra malesuada. Sed eget commodo tellus. Quisque a nibh cursus, efficitur tortor sed, laoreet diam.</p>
                    <section className="contact-me has-text-right" ref={ref['contact']}>
                        <a href="https://github.com/grahamhealy20" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/healygraham/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <Link to="/blog">Blog</Link>
                    </section>
                </section>

            </div>
            <div className="profile-image column">
                <div className="section">
                    <figure className="image is-3by4">
                        <img className="profile-photo" src={profilePhoto} alt="Graham Healy" ref={ref['photo']}></img>
                    </figure>
                </div>
            </div>
        </div>
    )
});

export default Hero;