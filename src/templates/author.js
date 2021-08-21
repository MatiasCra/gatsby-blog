import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { graphql } from "gatsby";

export const query = graphql`
  query ($id: String!) {
    contentfulAuthor(id: { eq: $id }) {
      name
      about {
        internal {
          content
        }
      }
    }
  }
`;

const Author = ({ data }) => {
  return (
    <Layout>
      <Head title={data.contentfulAuthor.name + " - Author"} />
      <h1>{data.contentfulAuthor.name}</h1>
      <p>{data.contentfulAuthor.about.internal.content}</p>
    </Layout>
  );
};

export default Author;
