import React from "react"
// import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const AboutPage = ({ data: { about, curators }}) => (
  <div>
    <SEO meta={about.seoMetaTags} />
    {/* First block start */}
    <div className="overflow-x-hidden mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="flex flex-wrap md:-mx-8">
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div className="flex flex-wrap">
              <div className="w-1/3 self-end pr-5 sm:pr-8 md:pr-10 xl:pr-16">
                <Img fluid={about.heroSupportingImage.fluid} key={about.heroSupportingImage.fluid} alt="Placeholder Image" />
              </div>
              <div className="w-2/3">
              <Img fluid={about.heroImage.fluid} key={about.heroImage.fluid} alt="Placeholder Image" className="border-l-12 border-pink w-full" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 xl:w-3/12 md:px-8 mt-12 lg:mt-24">
            <h2 className="font-serif text-2xl">{about.heroTitle}</h2>
            <span className="text-sm mb-0" dangerouslySetInnerHTML={{__html:about.heroBlurb}}></span>
          </div>
        </div>
      </div>
    </div>
    {/* First block end */}

    {/* Second block start */}
    <div className="mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-wrap lg:-mx-12">
            <div className="w-full lg:w-2/5 lg:px-12">
              <h2 className="font-serif text-2xl">{about.contentTitle}</h2>
            </div>
            <div className="w-full lg:w-3/5 lg:px-12" dangerouslySetInnerHTML={{__html:about.contentBlurb}}>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Second block  end--> */}

    {/* Third block start */}
    <div className="flex flex-wrap">
      {curators.edges.map(({ node }, index) => (
        <div key={index} className={`${ index % 2 ? 'block w-full flex-row order-first' : 'block flex-row w-full order-last' }`}>
          <div className="mb-12 md:mb-32 xl:mb-40">
              <div className="container">
                <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
                  <div className={`${ index % 2 ? 'flex flex-wrap md:-mx-8 items-center' : 'flex-row-reverse flex flex-wrap md:-mx-8 items-center' }`}>
                    <div className="w-full md:w-3/5 md:px-8 mb-6 md:mb-0">
                      <Img fluid={node.image.fluid} key={node.image.fluid} alt="Placeholder Image" className="border-l-12 border-pink w-full" />
                    </div>
                    <div className="w-full md:w-2/5 md:px-8">
                      <h2 className="font-serif text-2xl">{node.name} bio.</h2>
                      <span className="text-sm mb-4 lg:pr-12" dangerouslySetInnerHTML={{__html:node.blurb}}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ))}
    </div>
    {/* Third block end */}
  </div>
)

export const query = graphql`
  query aboutQuery {
    about: datoCmsAbout {
      heroTitle
      heroBlurb
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      heroSupportingImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      contentTitle
      contentBlurb
    }
    curators: allDatoCmsCurator {
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

export default AboutPage
