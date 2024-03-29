import React from "react"
import { Link, graphql } from "gatsby"

// import SEO from "../components/seo"
import Teaser from "../components/teaser"
import Hero from "../components/hero"
import Img from "gatsby-image"
import SEO from "../components/seo"

// import posed from "react-pose"
const IndexPage = ({ data: { site, home, curators } }) => {
  return (
    <div>
      <SEO meta={home.seoMetaTags} favicon={site.faviconMetaTags} />

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
      <div className="mb-12 md:mb-32 xl:mb-40" id="style-edit" data-scroll-section>
        <div className="container">
          <div className="flex flex-wrap">
            {/* <div className="w-full md:pr-16 lg:pr-28">
              <div data-scroll data-scroll-speed="4" data-scroll-position="top" data-scroll-target="#style-edit" className="mb-12 md:mb-0">
                <Teaser
                  heading={home.styleEditNew[0].heading}
                  meta={home.styleEditNew[0].metaText}
                  img={home.styleEditNew[0].image.fluid}
                  link={`edit/${home.styleEditNew[0].link.slug}`}
                />
              </div>
            </div> */}
            <div className="w-full">
              <div className="flex flex-wrap md:h-full -mx-3 sm:-mx-5 md:-mx-6 lg:-mx-10">
                <div className="w-full md:w-1/2 px-3 sm:px-5 md:px-6 lg:px-10 h-full" data-scroll data-scroll-speed="2" data-scroll-position="top" data-scroll-target="#style-edit">
                  <div className="flex flex-col h-full">
                    <div className="mb-auto mt-auto">
                      <span className="block text-brownish-grey text-xl lg:text-2xl font-serif flex-1 leading-tight mb-3 lg:mb-0 hidden md:block">
                        style
                        <span className="md:block md:ml-12 lg:ml-20">edit</span>
                      </span>
                    </div>

                    <div className="mt-auto mb-12 md:mb-0">
                      <Teaser
                        heading={home.styleEditNew[1].heading}
                        meta={home.styleEditNew[1].metaText}
                        img={home.styleEditNew[1].image.fluid}
                        small
                        link={`edit/${home.styleEditNew[1].link.slug}`}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 sm:px-5 md:px-6 lg:px-10 mb-12 md:mb-0" data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-target="#style-edit">
                  <Teaser 
                    heading={home.styleEditNew[2].heading}
                    meta={home.styleEditNew[2].metaText}
                    img={home.styleEditNew[2].image.fluid}
                    small
                    link={`edit/${home.styleEditNew[2].link.slug}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Style Edit Section End */}

      {/* Meet the curator */}
      <div id="curator" data-scroll-section	>
        {curators.edges.map(({ node }, index) => (
          <div key={index} className="mb-12 md:mb-32 xl:mb-40">
            <div className="container">
              <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
                <div className="flex flex-wrap md:-mx-8 items-center">
                  <div className="w-full md:w-3/5 md:px-8 mb-6 md:mb-0">
                    {/* <lazy-image :src="curator.image.url" :alt="curator.image.alt" classList="border-l-12 border-pink w-full" /> */}
                    <div data-scroll data-scroll-speed="1" data-scroll-position="top" data-scroll-target="#curator">
                      <Img fluid={node.image.fluid} key={node.image.fluid} alt="Placeholder Image" className="mb-5 w-full" />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-2/5 md:px-8" data-scroll data-scroll-speed="2" data-scroll-position="top" data-scroll-target="#curator">
                    <h2 className="font-serif text-2xl">meet the curator.</h2>
                    <p className="text-sm mb-4 lg:pr-12">{ node.blurb.substring(0, 179) }&hellip;</p>
                    <Link to="/about" className="underline">learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Meet the cutator */}

      {/* Instagram Section */}
      {/* <div className="mb-12 md:mb-32 xl:mb-40" id="insta" data-scroll-section>
        <div className="container">
          <div className="flex flex-wrap md:h-full -mx-4 sm:-mx-5 md:-mx-6 lg:-mx-10">
            {insta.edges.map(({ node }, index) => (
              <div 
                key={index}
                className={`${ index % 2 ? 'mt-4 sm:mt-12 md:mt-16 lg:mt-24 w-full sm:w-1/2 md:w-1/4 px-4 sm:px-5 md:px-6 lg:px-10' : 'mt-4 sm:mt-0 w-full sm:w-1/2 md:w-1/4 px-4 sm:px-5 md:px-6 lg:px-10' }`}
                data-scroll data-scroll-speed="1" data-scroll-position="top" data-scroll-target="#insta">

                { index === 0 && (
                  <div className="flex flex-wrap items-center justify-center h-full">
                    <div className="mb-auto mt-auto">
                      <span className="block text-brownish-grey text-xl lg:text-2xl font-serif leading-tight mb-0">
                        insta<span className="block ml-12 lg:ml-20">gram</span>
                      </span>
                    </div>
                  </div>
                )}
                { index !== 0 && (
                  <Img
                    fixed={ node.localFile.childImageSharp.fixed } className="max-w-full insta-item object-cover w-full"
                  />
                )}
              </div>
            ))}  
          </div>
        </div>
      </div> */}
      {/* Instagram Section End */}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    home: datoCmsHome {
      title
      heroTitle
      heroBlurb
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      styleEdit {
        title
        categories {
          title
          slug
        }
        image {
          url
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
      styleEditNew {
        heading
        metaText
        image {
          url
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
        link {
          slug
        }
      }
    }
    curators: allDatoCmsCurator(
      filter: { mainCurator: { eq: true } }
    ) {
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
