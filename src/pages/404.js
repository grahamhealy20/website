import React from "react"
import Layout from "../components/layouts/layout"
import NotFound from '../components/misc/not-found'
import YearAccent from '../components/misc/year-accent'

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
