import React from "react"
import Layout from "../components/layout"
import About from '../components/about'
import Hero from '../components/hero'
import YearAccent from '../components/year_accent'
import Sidebar from '../components/sidebar'
import BlogPosts from "../components/blogposts"
import FullStackBadge from '../components/full_stack_badge.inline.svg'

export default function Home() {
  return (
    <Layout>
      <YearAccent />
      <FullStackBadge className="full-stack-badge" />
      <div className="container">
        <Hero className="hero"></Hero>
      </div>
    </Layout>
  )
}
