import React from "react";
import Layout from "../components/layout.js";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as blogStyles from "./blog.module.css";
import Head from "../components/head";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            image {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            author{
              name
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li key={edge.node.slug} className={blogStyles.post}>
              <Link
                to={`/blog/${edge.node.slug}`}
              >
                <div className={blogStyles.bannerPreviewContainer}>
                  <img
                    src={edge.node.image.gatsbyImageData.images.fallback.src}
                    alt="banerPreview"
                  />
                </div>
                <div className={blogStyles.blogInfo}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </div>
                <div className={blogStyles.blogAuthor}>
                  <p>{edge.node.author.name}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
