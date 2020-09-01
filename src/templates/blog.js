import React from "react"
import { graphql } from "gatsby"

import BlogLayout from "../components/layouts/blog-layout"

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <BlogLayout>
            <div>
                <div className="blog-post">
                    <div>
                        <h1 className="title is-1">{frontmatter.title}</h1>
                        <h2>{frontmatter.date}</h2>
                    </div>

                    <div
                        className="blog-post-content"
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
      }
    }
  }
`