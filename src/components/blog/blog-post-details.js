import React from "react"
import Img from "gatsby-image"

const BlogPostDetails = ({ frontmatter }) => (
    <div>
        {frontmatter.featuredImage && <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />}
        <h1 className="title is-1">{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
    </div>
)
export default BlogPostDetails