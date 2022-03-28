import React from "react"
import Img from "gatsby-image"

import SEO from "../components/seo"

const ServicesPage = ({ data: { site, serviceKey } }) => (
  <div>
    <SEO meta={serviceKey.seoMetaTags} favicon={site.faviconMetaTags} />
    {/* First block start */}
    <div className="overflow-x-hidden mb-12 md:mb-24 mt-0">
      <div className="container">
        <div className="flex flex-wrap flex-row-reverse md:-mx-8 items-center">
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8 mb-6 lg:mb-0">
            <div className="flex flex-wrap flex-row-reverse">
                <Img fluid={serviceKey.heroImage.fluid} key={serviceKey.heroImage.fluid} alt="Placeholder Image" className="w-full border-l-12 border-border lg:mb-8" />
            </div>
          </div>

          <div className="w-full lg:w-4/12 xl:w-3/12 md:px-8">
            <h2 className="font-serif text-2xl">{serviceKey.heroTitle}</h2>
            <span className="text-sm" dangerouslySetInnerHTML={{__html: serviceKey.heroBlurb }}></span>
          </div>
        </div>
        
        <div className="flex flex-wrap md:-mx-8">
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div className="flex flex-wrap">
              <div className="hidden sm:block w-1/3 self-end">
              </div>
              <div className="w-full sm:w-2/3 md:px-5" dangerouslySetInnerHTML={{__html: serviceKey.heroAdditionalBlurb }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* First block end */}

    {/* Second block start */}
    <div className="overflow-x-hidden mb-12 md:mb-24">
      <div className="container">
        <div className="flex flex-wrap md:-mx-6 lg:-mx-0">
          <div className="w-full md:w-1/2 md:px-6 lg:px-0 lg:mt-12 mb-10 md:mb-12">
            <div className="flex flex-wrap lg:mx-6 xl:items-center">
              <div className="w-full lg:w-1/2 lg:px-6">
                <Img fluid={serviceKey.contentLeftImage.fluid} key={serviceKey.contentLeftImage.fluid} alt="Content Image" className="mb-8 w-full" />
              </div>
              <div className="w-full lg:w-1/2 lg:px-6 content">
                { serviceKey.contentLeftBlurb && (
                  <span className="text-sm" dangerouslySetInnerHTML={{__html: serviceKey.contentLeftBlurb }} ></span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:px-6 lg:px-0 lg:mt-12 mb-10 md:mb-12">
            <div className="flex flex-wrap lg:mx-6 xl:items-center">
              <div className="w-full lg:w-1/2 lg:px-6">
                <Img fluid={serviceKey.contentRightImage.fluid} key={serviceKey.contentRightImage.fluid} alt="Content Image" className="mb-8 w-full" />
              </div>
              <div className="w-full lg:w-1/2 lg:px-6 content">
                { serviceKey.contentLeftBlurb && (
                  <span className="text-sm" dangerouslySetInnerHTML={{__html: serviceKey.contentRightBlurb }} ></span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Second block  end */}

    {/* Third block start */}
    <div className="mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-wrap md:-mx-8 items-center">
            <div className="w-full md:w-2/5 md:px-8 order-2 md:order-1">
              <h2 className="font-serif text-2xl xl:pr-12">{serviceKey.footerHeading}</h2>
              <span className="text-sm mb-8 lg:pr-12 block" dangerouslySetInnerHTML={{__html: serviceKey.footerBlurb }}></span>

              <a href="mailto:charlotte@to-be-created.com" className="inline-block bg-purple-brown py-3 px-4 hover:text-white focus:text-white hover:bg-dark-blue-grey focus:bg-dark-blue-grey text-white">get in touch</a>
            </div>

            <div className="w-full md:w-3/5 md:px-8 mb-6 md:mb-0 order-1 md:order-2">
              <Img fluid={serviceKey.footerImage.fluid} key={serviceKey.footerImage.fluid} alt={serviceKey.footerTitle} className="border-l-12 border-border w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Thid Block End */}
  </div>
)

export const query = graphql`
  query serviceQuery {
    site: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    serviceKey: datoCmsService {
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
      contentLeftImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      contentLeftBlurb
      contentRightImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      contentRightBlurb
      footerHeading
      footerBlurb
      footerImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`

export default ServicesPage
