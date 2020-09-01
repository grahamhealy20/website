import React, { createRef } from "react"
import Layout from "../components/layout"
import Hero from '../components/hero'
import YearAccent from '../components/year_accent'
import FullStackBadge from '../components/full_stack_badge'
import { Linear, TweenMax, TimelineMax, Power3 } from "gsap";

export default class Home extends React.Component {
  constructor() {
    /*
      This constructor wires up the various refs needed to allow GSAP
      to work
     */
    super();
    this.componentRefs = {
      fullStackLogo: createRef(null),
      yearAccent: createRef(null),
      title: createRef(null),
      body: createRef(null),
      contact: createRef(null),
      photo: createRef(null),
    }
  }
  setupAnimations() {
    /* This powers the animations on the home page.
       This makes heavy use of react JS forward refs to
       provide GSAP (the animation engine) the elements to animate.
    */
    let { fullStackLogo, yearAccent, title, body, contact, photo } = this.componentRefs
    const tl = new TimelineMax();
    tl
      .from(title.current, 2, { opacity: 0, y: -30, ease: Power3.easeOut })
      .from(body.current, 1, { opacity: 0, y: -30, ease: Power3.easeOut }, "-=0.5")
      .from(contact.current, 1, { opacity: 0, y: -30, ease: Power3.easeOut }, "-=1")
      .from(photo.current, 1, { opacity: 0, y: 30, ease: Power3.easeOut }, "-=1")
      .from(yearAccent.current, 1, { opacity: 0, x: -30, ease: Power3.easeOut }, "-=0.5")
      .from(fullStackLogo.current, 1, { opacity: 0, x: -30, ease: Power3.easeOut }, "-=0.5")

    // Logo rotation
    TweenMax.to(fullStackLogo.current, 8, { rotation: 360, ease: Linear.easeNone }).repeat(-1)

  }
  componentDidMount() {
    this.setupAnimations();
  }
  render() {
    return (
      <Layout>
        <YearAccent ref={this.componentRefs.yearAccent} />
        <FullStackBadge ref={this.componentRefs.fullStackLogo} />
        <div className="container">
          <Hero className="hero" ref={this.componentRefs}></Hero>
        </div>
      </Layout>
    )
  }
}
