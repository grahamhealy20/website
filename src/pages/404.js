import React from "react"
import FullScreenLayout from "../components/layouts/full-screen-layout"
import NotFound from '../components/misc/not-found'
import YearAccent from '../components/misc/year-accent'
import SEO from '../components/seo';

export default function Home() {
  return (
    <FullScreenLayout>
      <SEO title={"Page not found!"} />
      <YearAccent />
      <div className="container">
        <NotFound className="not-found"></NotFound>
      </div>
    </FullScreenLayout>
  )
}
