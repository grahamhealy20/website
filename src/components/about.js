import React from "react"
import { Link } from "gatsby"

const About = () => (
    <div className="columns is-desktop is-vcentered">
        <div className="column is-two-thirds ">
            
            <section className="section">
            <h1 className="hero-title">Graham Healy</h1>    
                <h2 className="title is-2">About me</h2>
                <p>tempus elit at, iaculis elit. Curabitur fermentum turpis efficitur nulla facilisis viverra. Quisque congue ex non dolor tincidunt, id laoreet metus euismod. Nulla nibh risus, aliquet a lacus sed, ornare ornare turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer mi sem, iaculis eu nibh non, aliquet facilisis turpis. Sed non tortor ullamcorper, feugiat diam ac, pulvinar elit. Duis et elit non quam semper porttitor. In commodo finibus fringilla. Nunc ac risus et risus viverra malesuada. Sed eget commodo tellus. Quisque a nibh cursus, efficitur tortor sed, laoreet diam.</p>
            
            </section>
            <section className="section">
                <h2 className="title is-2">Where to find me</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend mollis dolor sit amet facilisis. Sed facilisis vulputate urna ut pharetra. Integer eu tortor lectus. Nullam volutpat consectetur est ut molestie. Praesent congue augue risus, sit amet laoreet magna consequat sed. Aliquam quis dignissim nibh.</p>
            </section>
        </div>
        <div className="profile-image column">
            <section className="section">
                <figure className="image is-3by4">
                    <img src={'/test.jpg'} alt="Picture of Graham"></img>
                </figure>
            </section>
        </div>
    </div>
)

export default About;