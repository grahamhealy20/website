import React from "react"
import { Link } from "gatsby"
import { FaArrowRight } from 'react-icons/fa';

const BlogPostLink = ({ post }) => (
    <div>
        <article className="blog-post">
            <h2 className="title is-3"><Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link></h2>
            <h3 className="subtitle is-6">{post.frontmatter.date} by {post.frontmatter.author}</h3>
            <p>{post.excerpt}</p>
            <div className="actions">
                <h4 className="title is-5">
                    <Link className="read-more" to={post.frontmatter.slug}><span>Read article</span>
                        <span className="read-more-icon"><FaArrowRight /></span></Link>
                </h4>
            </div>
        </article>
    </div>
)
export default BlogPostLink