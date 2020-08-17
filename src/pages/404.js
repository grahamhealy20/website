import React from "react"
import Layout from "../components/layout"
import About from '../components/about'
import NotFound from '../components/not_found'
import YearAccent from '../components/year_accent'
import Sidebar from '../components/sidebar'
import BlogPosts from "../components/blogposts"
import FullStackBadge from '../components/full_stack_badge.inline.svg'

export default function Home() {
  return (
    <Layout>
      <YearAccent />
      <div className="container">
        <NotFound className="not-found"></NotFound>
      </div>
    </Layout>
  )
}
