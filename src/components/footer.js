import React from "react";
import * as footerStyles from "./footer.module.css";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}, © 2021</p>
    </footer>
  );
};

export default Footer;
