import React from "react";
import Layout from "../components/layout.js";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Head from "../components/head";
import { makeSlug } from "../functions/makeSlug";
import * as postStyles from "./post.module.css";

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
      author {
        name
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

  const bannerImgSrc =
    data.contentfulBlogPost.image.gatsbyImageData.images.fallback.src;

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <div className={postStyles.postInfo}>
        <p className={postStyles.postDate}>
          {data.contentfulBlogPost.publishedDate}
        </p>
        <Link
          to={`/author/${makeSlug(data.contentfulBlogPost.author.name)}`}
          className={postStyles.authorLink}
        >
          by {data.contentfulBlogPost.author.name}
        </Link>
      </div>
      <img src={bannerImgSrc} alt="postBanner" />
      {renderRichText(data.contentfulBlogPost.body, options)}
    </Layout>
  );
};

export default Blog;
