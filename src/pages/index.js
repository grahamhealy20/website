import React from "react"
import Layout from "../components/layout"
import About from '../components/about'
import Sidebar from '../components/sidebar'
import BlogPosts from "../components/blogposts"

export default function Home() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="columns">
          <section className="sidebar column">
            <Sidebar></Sidebar>
          </section>
          <section className="about column is-two-thirds">
            <About></About>
      </section>
          <section className="blog-posts column">
            <BlogPosts></BlogPosts>
      </section>
        </div>
      </div>
    </Layout>
  )
}
