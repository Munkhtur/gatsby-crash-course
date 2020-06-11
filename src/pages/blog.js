import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog List</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <Link to={post.node.fields.slug}>
          {" "}
          <h3>{post.node.frontmatter.title}</h3>
        </Link>
        <small>Posted on {post.node.frontmatter.date}</small>
        <br />
        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
        <br />
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          html
        }
      }
    }
  }
`

export default BlogPage
