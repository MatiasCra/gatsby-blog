import React from "react";
import Layout from "../components/layout.js";
import Head from "../components/head";
import * as contactStyles from "./contact.module.css";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        <span>Mail: </span>
        <a
          href="mailto: cravchikm@gmail.com"
          className={contactStyles.contactLink}
        >
          cravchikm@gmail.com
        </a>
      </p>
      <p>
        <span>Linkedin: </span>
        <a
          href="https://www.linkedin.com/in/matias-cravchik-9287991a3/"
          target="__blank"
          className={contactStyles.contactLink}
        >
          https://www.linkedin.com/in/matias-cravchik-9287991a3/
        </a>
      </p>
      <p>
        <span>Github: </span>
        <a
          href="https://github.com/MatiasCra"
          target="__blank"
          className={contactStyles.contactLink}
        >
          https://github.com/MatiasCra
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
