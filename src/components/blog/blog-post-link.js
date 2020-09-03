import React from "react"
import { Link } from "gatsby"

const BlogPostLink = ({ post }) => (
    <div>
        <article className="blog-post">
            <h3 className="title is-3"><Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link></h3>
            <h4 className="subtitle">({post.frontmatter.date})</h4>
            <p>{post.excerpt}</p>
        </article>
    </div>
)
export default BlogPostLink