import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout.js"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>Hey, I'm learning Gatsby.</p>
      <p>
        Nedd a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
