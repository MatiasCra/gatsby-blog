import React from "react";
import Layout from "../components/layout.js";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Mail:{" "}
        <a href = "mailto: cravchikm@gmail.com">cravchikm@gmail.com</a>
      </p>
      <p>
        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/matias-cravchik-9287991a3/"
          target="__blank"
        >
          https://www.linkedin.com/in/matias-cravchik-9287991a3/
        </a>
      </p>
      <p>
        Github:{" "}
        <a href="https://github.com/MatiasCra" target="__blank">
          https://github.com/MatiasCra
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
