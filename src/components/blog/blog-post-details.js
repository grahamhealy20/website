import React from "react"
import Img from "gatsby-image"

const BlogPostDetails = ({ frontmatter }) => (
    <div className="blog-post-details">
        {frontmatter.featuredImage && <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />}
        <h1 className="title is-1">{frontmatter.title}</h1>
        <h2 className="subtitle is-6">{frontmatter.date} | By {frontmatter.author}</h2>
    </div>
)
export default BlogPostDetails