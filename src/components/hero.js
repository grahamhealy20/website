import React from "react"
import profilePhoto from "./profile.jpg"

const Hero = () => (
    <div className="columns is-desktop is-vcentered">
        <div className="column is-two-thirds ">
            <section className="section">
                <h1 className="title hero-title">graham healy</h1>
                <p>tempus elit at, iaculis elit. Curabitur fermentum turpis efficitur nulla facilisis viverra. Quisque congue ex non dolor tincidunt, id laoreet metus euismod. Nulla nibh risus, aliquet a lacus sed, ornare ornare turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer mi sem, iaculis eu nibh non, aliquet facilisis turpis. Sed non tortor ullamcorper, feugiat diam ac, pulvinar elit. Duis et elit non quam semper porttitor. In commodo finibus fringilla. Nunc ac risus et risus viverra malesuada. Sed eget commodo tellus. Quisque a nibh cursus, efficitur tortor sed, laoreet diam.</p>
            </section>
        </div>
        <div className="profile-image column">
            <div className="section">
                <figure className="image is-3by4">
                    <img src={profilePhoto} alt="Graham Healy"></img>
                </figure>
            </div>
        </div>
    </div>
)

export default Hero;