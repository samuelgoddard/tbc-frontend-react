import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

const EditPage = ({ data }) => {
  return (
  <div>
    <SEO title="Edit" />
    <h2>{data.datoCmsCategory.title}</h2>
  </div>
  )
}

export default EditPage

export const query = graphql`
  query CategoryQuery($slug: String!) {
    datoCmsCategory(slug: { eq: $slug }) {
      title
    }
  }
`