import React from 'react';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"

const Hero = React.forwardRef((props, ref) => {

    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    `)
    return (
        <div className="columns is-vcentered">
            <div className="column is-two-thirds ">
                <section className="section about-me">
                    <h1 className="title hero-title" ref={ref['title']}>graham healy</h1>
                    <p className="hero-text body" ref={ref['textBody']}>tempus elit at, iaculis elit. Curabitur fermentum turpis efficitur nulla facilisis viverra. Quisque congue ex non dolor tincidunt, id laoreet metus euismod. Nulla nibh risus, aliquet a lacus sed, ornare ornare turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer mi sem, iaculis eu nibh non, aliquet facilisis turpis. Sed non tortor ullamcorper, feugiat diam ac, pulvinar elit. Duis et elit non quam semper porttitor. In commodo finibus fringilla. Nunc ac risus et risus viverra malesuada. Sed eget commodo tellus. Quisque a nibh cursus, efficitur tortor sed, laoreet diam.</p>
                    <section className="contact-me has-text-centered" ref={ref['contact']}>
                        <nav class="level">
                            <div className="level-item has-text-centered">
                                <a href="https://github.com/grahamhealy20" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                            <div className="level-item has-text-centered">
                                <a href="https://www.linkedin.com/in/healygraham/" target="_blank" rel="noreferrer">LinkedIn</a>
                            </div>
                            <div className="level-item has-text-centered">
                                <Link to="/blog">Blog</Link>
                            </div>
                        </nav>
                    </section>
                </section>

            </div>
            <div className="profile-image column">
                <div className="section">
                    <figure className="profile-photo" ref={ref['photo']}>
                        <Img fluid={data.file.childImageSharp.fluid} alt="Graham Healy" />
                    </figure>
                </div>
            </div>
        </div>
    )
});

export default Hero;