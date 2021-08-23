import React from "react";
import Footer from "../components/footer.js";
import Head from "../components/head";
import Header from "../components/header.js";
import * as homeStyles from "./home.module.css";
import gatsbyLogo from "../media/gatsby-logo.svg";

/* Decided to avoid the layoyt component so I can display things where I want to without 
bothering about the global layout restrictions. This should be changed is the site is to 
be made responsive. */  

const IndexPage = () => {
  return (
    <div className={homeStyles.homeLayoutContainer}>
      <Header />
      <Head title="Home" />
      <div className={homeStyles.homeContainer}>
        <div className={homeStyles.homeInfo}>
          <h1>Hello</h1>
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
