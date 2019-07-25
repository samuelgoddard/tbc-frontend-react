import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

const EditPage = ({ data: { posts, categories } }) => {
  return (
  <div>
    <SEO title="Edit" />
    <h2>Posts</h2>
    
    <div className="mb-8">
      {posts.edges.map(({ node: post }) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
    
    <div className="mb-8">
      <h2>Categories:</h2>
      {categories.edges.map(({ node }, index) => (
        <div key={index}>
          <p>{node.title}</p>
          <Link to={`/categories/${node.slug}`} className="bg-pink-300 p-1 inline-block">Read more</Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default EditPage

export const query = graphql`
query postsQuery {
  posts: allDatoCmsPost {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
  categories: allDatoCmsCategory {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
`