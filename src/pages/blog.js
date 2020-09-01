import React from "react"
import BlogLayout from "../components/layouts/blog-layout"
import BlogPostLink from "../components/blog/blog-post-link"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BlogPostLink key={edge.node.id} post={edge.node} />)
  return (
    <BlogLayout>
      <div>{Posts}</div>
    </BlogLayout>
  )
}
export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(fromNow: true)
            slug
            title
          }
        }
      }
    }
  }
`