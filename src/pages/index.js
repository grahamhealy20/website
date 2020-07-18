import React from "react"
import Layout from "../components/layout"
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <Layout>
      <div className="columns">
        <section className="sidebar column">
          <Sidebar></Sidebar>
        </section>
        <section className="about column is-two-thirds">
          About
      </section>
        <section className="blog-posts column">
          Posts
      </section>
      </div>
    </Layout>
  )
}
