import React from "react";
import { Link } from "gatsby";
import Head from "../components/head";
import Layout from "../components/layout.js";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        Hey, I'm Matías a software developer and I can make websites like this
        one. I'm a Computer Science student at the University of Buenos Aires
        and I'm exited to continue learning about tech and software. 
      </p>
      <p>
        Nedd a developer? <Link to="/contact" className="gradient-text">Contact me.</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
