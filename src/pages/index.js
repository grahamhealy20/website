import React, { createRef } from "react"
import HomeLayout from "../components/layouts/home-layout"
import Hero from '../components/home/hero'
import YearAccent from '../components/misc/year-accent'
import FullStackBadge from '../components/home/full-stack-badge'
import SEO from '../components/seo';

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
      .fromTo(heroBody.current,
        { background: 'linear-gradient(142deg, #8f57e2 50%, #8f57e2 51%, #8f57e2 51%, #8f57e2 63%)' },
        {
          background: ' linear-gradient(142deg, #8f57e2 3%, #fbcab8 31%, #fbcab8 62%, #8f57e2 98%)',
          duration: 3,
          ease: Power3.easeOut
        })
      .from(title.current, 2, { autoAlpha: 0, y: -30, ease: Power3.easeOut }, "-=1.0")
      .from(textBody.current, 1, { autoAlpha: 0, y: -30, ease: Power3.easeOut }, "-=0.5")
      .from(contact.current, 1, { autoAlpha: 0, y: -30, ease: Power3.easeOut }, "-=0.5")
      .from(photo.current, 1, { autoAlpha: 0, y: 30, ease: Power3.easeOut }, "-=1")
      .from(yearAccent.current, 1, { autoAlpha: 0, x: -30, ease: Power3.easeOut }, "-=0.5")
      .from(fullStackLogo.current, 1, { autoAlpha: 0, x: -30, ease: Power3.easeOut }, "-=0.5")

    // Logo rotation
    TweenMax.to(fullStackLogo.current, 8, { rotation: 360, ease: Linear.easeNone, }).repeat(-1)

  }
  componentDidMount() {
    this.setupAnimations();
  }
  render() {
    return (
      <HomeLayout ref={this.componentRefs.heroBody} >
        <SEO title={"Home"} />
        <YearAccent ref={this.componentRefs.yearAccent} />
        <FullStackBadge ref={this.componentRefs.fullStackLogo} />
        <Hero className="hero" ref={this.componentRefs}></Hero>
      </HomeLayout>
    )
  }
}
