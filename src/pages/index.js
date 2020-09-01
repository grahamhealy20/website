import React from "react"
import Layout from "../components/layout"
import Hero from '../components/hero'
import YearAccent from '../components/year_accent'
import FullStackBadge from '../components/full_stack_badge'

export default function Home() {
  return (
    <Layout>
      <YearAccent />
      <FullStackBadge />
      <div className="container">
        <Hero className="hero"></Hero>
      </div>
    </Layout>
  )
}
