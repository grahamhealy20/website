import React, { createRef } from "react"
import FullScreenLayout from "../components/layouts/full-screen-layout"
import Hero from '../components/home/hero'
import YearAccent from '../components/misc/year-accent'
import FullStackBadge from '../components/home/full-stack-badge'
import { Linear, TweenMax, TimelineMax, Power3 } from "gsap";


export default class Home extends React.Component {
  constructor() {
    /*
      This constructor wires up the various refs needed to allow GSAP
      to work
     */
    super();
    this.componentRefs = {
      heroBody: createRef(null),
      fullStackLogo: createRef(null),
      yearAccent: createRef(null),
      title: createRef(null),
      textBody: createRef(null),
      contact: createRef(null),
      photo: createRef(null),
    }
  }
  setupAnimations() {
    /* This powers the animations on the home page.
       This makes heavy use of react JS forward refs to
       provide GSAP (the animation engine) the elements to animate.
    */
    let { heroBody, fullStackLogo, yearAccent, title, textBody, contact, photo } = this.componentRefs

    const tl = new TimelineMax();
    tl
      .from(heroBody.current, 3, { background: 'linear-gradient(142deg, #8f57e2 30%, #8f57e2 51%, #8f57e2 51%, #8f57e2 70%)', ease: Power3.easeOut }, "-=1.0")
      .from(title.current, 2, { opacity: 0, y: -30, ease: Power3.easeOut })
      .from(textBody.current, 1, { opacity: 0, y: -30, ease: Power3.easeOut }, "-=0.5")
      .from(contact.current, 1, { opacity: 0, y: -30, ease: Power3.easeOut }, "-=0.5")
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
      <FullScreenLayout ref={this.componentRefs.heroBody}>
        <YearAccent ref={this.componentRefs.yearAccent} />
        <FullStackBadge ref={this.componentRefs.fullStackLogo} />
        <Hero className="hero" ref={this.componentRefs}></Hero>
      </FullScreenLayout>
    )
  }
}
