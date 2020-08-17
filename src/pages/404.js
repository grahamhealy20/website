import React from "react"
import Layout from "../components/layout"
import NotFound from '../components/not_found'
import YearAccent from '../components/year_accent'

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
