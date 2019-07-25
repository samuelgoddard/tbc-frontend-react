import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

const IndexPage = ({ data: { home, curators } }) => {
  return (
    <div>
      <SEO title="Home" />
      <h3>Page Info:</h3>
      <span className="block mb-3">title: { home.title }</span>
      <span className="block mb-3">heroTitle: { home.heroTitle }</span>
      <span className="block mb-3">heroBlurb: { home.heroBlurb }</span>
      <span className="block mb-3">heroImage: { home.heroImage.url }</span>
      <span className="block mb-3">heroImage Alt: { home.heroImage.alt }</span> 

      <h3>Curators:</h3>
      <span className="block mb-3">Featured curator: { curators.edges[0].node.name }</span>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      title
      heroTitle
      heroBlurb
      heroImage {
        url
      }
    }
    curators: allDatoCmsCurator(filter: { mainCurator: { eq: true } }) {
      edges {
        node {        
          name
          blurb
          image {
            url
            alt
          }
          slug
          id
        }
      }
    }
  }
`
