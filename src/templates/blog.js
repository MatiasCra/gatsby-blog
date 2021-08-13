import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Head from "../components/head";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      image {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return (
          <img src={node.data.target.fixed.src} alt={node.data.target.title} />
        );
      },
    },
  };

  const bannerImgSrc = data.contentfulBlogPost.image.gatsbyImageData.images.fallback.src;

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      <img src={bannerImgSrc} alt="postBanner"/>
      {renderRichText(data.contentfulBlogPost.body, options)}
    </Layout>
  );
};

export default Blog;
