import React from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Head from "../components/head";
import gatsbyLogo from "../media/gatsby-logo.svg";
import * as homeStyles from "./home.module.css";

const IndexPage = () => {
  return (
    <div className={homeStyles.homeLayoutContainer}>
      <Header />
      <Head title="Home" />
      <div className={homeStyles.homeContainer}>
        <div className={homeStyles.homeInfo}>
          <h1>Hello</h1>
          <h2>This is a simple <br/> blog website <br/> made ith Gatsby.</h2>
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
