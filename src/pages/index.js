import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Teaser from "../components/teaser"
import Hero from "../components/hero"
import Img from "gatsby-image"

const IndexPage = ({ data: { home, curators } }) => {
  return (
    <div>
      <SEO title="Home" />

      {/* Hero Section */}
      <div className="mb-12 md:mb-32 xl:mb-40">
        <div className="container">
          <Hero
            title={home.heroTitle}
            blurb={home.heroBlurb}
            img={home.heroImage.fluid}
          />
        </div>
      </div>
      {/* Hero Section End */}

      {/* Style Edit Section */}
      <div className="mb-12 md:mb-32 xl:mb-40">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-16 lg:pr-28">
              <Teaser
                heading="roof party lo-fi live-edge man braid, freegan."
                meta="fashion"
                naked
                img={home.heroImage.fluid}
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap md:h-full -mx-3 sm:-mx-5 md:-mx-6 lg:-mx-10">
                <div className="w-1/2 px-3 sm:px-5 md:px-6 lg:px-10 h-full">
                  <div className="flex flex-col h-full">
                    <div className="mb-auto mt-auto">
                      <span className="block text-brownish-grey text-xl lg:text-2xl font-serif flex-1 leading-tight mb-3 lg:mb-0">
                        style
                        <span className="md:block md:ml-12 lg:ml-20">edit</span>
                      </span>
                    </div>

                    <div className="mt-auto">
                      <Teaser
                        heading="roof party lo-fi live-edge man braid, freegan."
                        meta="just in"
                        img={home.heroImage.fluid}
                        small
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/2 px-3 sm:px-5 md:px-6 lg:px-10">
                  <Teaser 
                    heading="roof party lo-fi live-edge man braid, freegan."
                    meta="what's new"
                    img={home.heroImage.fluid}
                    small
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Style Edit Section End */}

      {/* Meet the curator */}
      {curators.edges.map(({ node }, index) => (
        <div key={index} className="mb-12 md:mb-32 xl:mb-40">
          <div className="container">
            <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
              <div className="flex flex-wrap md:-mx-8 items-center">
                <div className="w-full md:w-3/5 md:px-8 mb-6 md:mb-0">
                  {/* <lazy-image :src="curator.image.url" :alt="curator.image.alt" classList="border-l-12 border-pink w-full" /> */}

                  <Img fluid={node.image.fluid} key={node.image.fluid} alt="Placeholder Image" className="mb-5 w-full" />
                </div>
                
                <div className="w-full md:w-2/5 md:px-8">
                  <h2 className="font-serif text-2xl">meet the curator.</h2>
                  <p className="text-sm mb-4 lg:pr-12">{ node.blurb }</p>
                  <Link to="/" className="underline">learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* End Meet the cutator */}
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
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
    curators: allDatoCmsCurator(filter: { mainCurator: { eq: true } }) {
      edges {
        node {        
          name
          blurb
          image {
            url
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
          slug
          id
        }
      }
    }
  }
`
