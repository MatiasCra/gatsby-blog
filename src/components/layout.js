import React from "react"
import Footer from "./footer.js"
import Header from "./header.js"
import "../styles/index.css"
import * as layoutStyles from "./layout.module.css"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
        <Header />
      <div className={layoutStyles.content}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
