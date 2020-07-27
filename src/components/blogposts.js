import React from "react"
import { Link } from "gatsby"
import BlogPost from "../components/blogpost"

const BlogPosts = () => (
    <section className="section">
        <h2 className="title is-2">Blog Posts</h2>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
    </section>
)

export default BlogPosts;