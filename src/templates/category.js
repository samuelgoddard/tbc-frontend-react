import React from "react"
import { Link, graphql } from "gatsby"
import Teaser from "../components/teaser"

import SEO from "../components/seo"

const categoryPage = ({ data: { current, edits, categories } }) => {
  return (
  <div>
    <SEO title="Edit" />
    {/* First block start */}
    <div className="mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="flex flex-wrap md:-mx-6">
          <div className="w-full md:w-1/3 md:px-6">
            <div class="sticky top-0 pt-16 lg:pt-24">
              <div className="mb-12">
                <h2 className="font-serif text-2xl">{current.title}</h2>
                <span className="text-sm pr-24 md:pr-6 lg:pr-24" dangerouslySetInnerHTML={{__html:current.blurb}}></span>
              </div>

              <h3 className="text-black text-base font-sans font-bold">choose a category&nbsp;&nbsp;-</h3>

              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 md:w-full xl:w-1/2 px-2">
                  <Link to={`/edit/`} activeClassName="underline" className="link py-2">all</Link>
                </div>

                {categories.edges.map(({ node }, index) => (
                  <div key={index} className="w-1/2 md:w-full xl:w-1/2 px-2">
                    <Link to={`/edit/${node.slug}`} activeClassName="underline" className="link py-2">{node.title}</Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="w-full md:w-2/3 md:px-6">
            <div className="flex flex-wrap -mx-3 sm:-mx-5 lg:-mx-8 mt-24 md:mt-0">
              {edits.edges.map(({ node }, index) => (
                <div key={index} className={`${ index % 2 ? '-mt-12 md:-mt-32 w-1/2 px-3 sm:px-5 lg:px-8' : 'w-1/2 px-3 sm:px-5 lg:px-8' }`}>
                  <Teaser
                    link={node.link}
                    img={node.image.fluid}
                    caption={node.title}
                    naked
                    externalLink
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* First block end */}    
  </div>
  )
}

export default categoryPage

export const query = graphql`
  query CategoryQuery($slug: String!) {
    current: datoCmsCategory(slug: { eq: $slug }) {
      title
      blurb
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
    edits: allDatoCmsEdit(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
      edges {
        node {
          id
          title
          link
          slug
          image {
            url
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`