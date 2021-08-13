import React from "react"
import Footer from "./footer.js"
import Header from "./header.js"
import "../styles/index.css"
import * as layoutStyles from "./layout.module.css"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
