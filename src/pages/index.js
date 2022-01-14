import React from "react";
import Footer from "../components/footer.js";
import Head from "../components/head";
import Header from "../components/header.js";
import * as homeStyles from "./home.module.css";
import gatsbyLogo from "../media/gatsby-logo.svg";

const IndexPage = () => {
  return (
    <div className={homeStyles.homeLayoutContainer}>
      <Header />
      <Head title="Home" />
      <div className={homeStyles.homeContainer}>
        <div className={homeStyles.homeInfo}>
          <h1 className="gradient-text">Hello</h1>
          <h2>This is a simple <br/> blog website <br/> made with Gatsby.</h2>
        </div>
        <img
          src={gatsbyLogo}
          alt="gatsby-logo"
          className={homeStyles.homeLogo}
        />
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
