import React from "react"
import Layout from "../components/layout.js"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Contact info is supposed to be here.</p>
      <p>
        Link to{" "}
        <a href="https://github.com/MatiasCra" target="__blank">
          My Github
        </a>
        .
      </p>
    </Layout>
  )
}

export default ContactPage
