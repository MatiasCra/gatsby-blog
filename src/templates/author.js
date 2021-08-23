import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { graphql } from "gatsby";
import * as authorStyles from "./author.module.css";

export const query = graphql`
  query ($id: String!) {
    contentfulAuthor(id: { eq: $id }) {
      name
      about {
        internal {
          content
        }
      }
      photo {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

const Author = ({ data }) => {
  return (
    <Layout>
      <Head title={data.contentfulAuthor.name + " - Author"} />
      <h1>{data.contentfulAuthor.name}</h1>
      <div className={authorStyles.authorContent}>
        <img
          alt="author"
          src={data.contentfulAuthor.photo.gatsbyImageData.images.fallback.src}
        />
        <p>{data.contentfulAuthor.about.internal.content}</p>
      </div>
    </Layout>
  );
};

export default Author;
