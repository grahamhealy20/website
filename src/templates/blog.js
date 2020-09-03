import React from "react"
import { graphql } from "gatsby"

import BlogLayout from "../components/layouts/blog-layout"
import BlogPostDetails from "../components/blog/blog-post-details"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <BlogLayout>
      <div>
        <div className="blog-post">
          <BlogPostDetails frontmatter={frontmatter} />
          <div
            className="blog-post-content content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </BlogLayout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`