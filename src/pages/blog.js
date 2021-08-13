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
          console.log(edge);
          return (
            <li key={edge.node.slug} className={blogStyles.post}>
              <Link
                to={`/blog/${edge.node.slug}`}
                style={{ display: "grid", gridTemplateRows: 1 }}
              >
                <img
                  src={edge.node.image.gatsbyImageData.images.fallback.src}
                  alt="banerPreview"
                  style={{ maxWidth: "20%", gridColumn: "1 / 4" }}
                />
                <div style={{ gridColumn: "2 / span 3", maxWidth: "80%" }}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
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
