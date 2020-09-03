import React from "react"

// Enable nice code formatting
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const BlogPostContent = ({ html }) => (
    <div
        className="blog-post-content content"
        dangerouslySetInnerHTML={{ __html: html }}
    />
)
export default BlogPostContent