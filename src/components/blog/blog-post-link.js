import React from "react"
import { Link } from "gatsby"

const BlogPostLink = ({ post }) => (
    <div>
        <article className="blog-post">
            <Link to={post.frontmatter.slug}>
                <h1>{post.frontmatter.title}</h1>
            </Link>
            <h4 className="subtitle">({post.frontmatter.date})</h4>
            <p>{post.excerpt}</p>
        </article>
    </div>
)
export default BlogPostLink