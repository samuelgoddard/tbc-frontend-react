import React from "react"
import Img from "gatsby-image"

import SEO from "../components/seo"

const StylePage = ({ data: { site, style } }) => (
  <div>
    <SEO meta={style.seoMetaTags} favicon={site.faviconMetaTags} />
    {/* First block start */}
    <div className="overflow-x-hidden mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="flex flex-wrap flex-row-reverse md:-mx-8">
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div className="flex flex-wrap flex-row-reverse">
              <div className="w-1/3 self-end pl-5 sm:pl-8 md:pl-10 xl:pl-16">
                {style.heroSupportingImage && (
                  <Img fluid={style.heroSupportingImage.fluid} key={style.heroSupportingImage.heroSupportingImageCaption} alt="Placeholder Image" className="w-full md:mb-8" />
                )}
                {style.heroSupportingImageCaption &&(
                  <div className="hidden md:block">
                    <span className="text-sm" dangerouslySetInnerHTML={{__html: style.heroSupportingImageCaption }}></span>
                  </div>
                )}
              </div>
              <div className="w-2/3">
                <Img fluid={style.heroImage.fluid} key={style.heroImage.fluid} alt="Placeholder Image" className="w-full border-r-12 border-pink lg:mb-8" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 xl:w-3/12 md:px-8 mt-12 lg:mt-24 mb-12 lg:mb-0">
            <h2 className="font-serif text-2xl">{style.heroTitle}</h2>
            <span className="text-sm" dangerouslySetInnerHTML={{__html: style.heroBlurb }}></span>
          </div>
        </div>
        
        <div className="flex flex-wrap md:-mx-8">
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div className="flex flex-wrap">
              <div className="hidden sm:block w-1/3 self-end">
              </div>
              <div className="w-full sm:w-2/3 md:px-5" dangerouslySetInnerHTML={{__html: style.heroAdditionalBlurb }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* First block end */}

    {/* Testimonial block start */}
    <div className="mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-wrap md:-mx-8 items-center">
            <div className="w-full md:w-1/2 lg:w-3/5 md:px-8 mb-6 md:mb-0">
              <Img fluid={style.testimonialImage.fluid} key={style.testimonialImage.fluid} alt={style.testimonialClient} className="border-l-12 border-pink w-full" />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 md:px-8">
              <span className="font-serif text-xl text-dark-blue-grey mb-6 block italic">"{style.testimonialQuote}"</span>
              <span className="block font-bold mb-2 text-sm">Client: {style.testimonialClient}</span>
              <span className="text-sm mb-8 lg:pr-12" dangerouslySetInnerHTML={{__html: style.testimonialContent }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Testimonial Block End */}

    {/* Second block start */}
    <div className="overflow-x-hidden mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="flex flex-wrap lg:-mx-10">
          <div className="w-full lg:w-1/2 lg:px-10 lg:mt-24 mb-10 md:mb-12">
            <Img fluid={style.contentLeftImage.fluid} key={style.contentLeftImage.fluid} alt="Content Image" className="mb-8" />
            { style.contentLeftImageCaption && (
              <span className="text-sm" dangerouslySetInnerHTML={{__html: style.contentLeftImageCaption }} ></span>
            )}
          </div>
          <div className="w-full lg:w-1/2 lg:px-10">
            <div className="flex flex-wrap -mx-3 md:-mx-10">
              <div className="w-full md:w-2/3 lg:w-1/2 px-3 md:px-10">
                <Img fluid={style.contentMiddleImage.fluid} key={style.contentMiddleImage.fluid} alt="Content Image" className="mb-8" />
                <h2 className="font-serif text-2xl">{style.contentMiddleTitle}</h2>

                <span className="text-sm" dangerouslySetInnerHTML={{__html: style.contentMiddleBlurb }}></span>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/2 px-3 md:px-10 lg:mt-24">
                <Img fluid={style.contentRightImage.fluid} key={style.contentRightImage.fluid} alt="Content Image" className="mb-8" />

                { style.contentRightImageCaption && (
                  <span className="text-sm" dangerouslySetInnerHTML={{ __html: style.contentRightImageCaption }}></span>
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
              <h2 className="font-serif text-2xl">{style.footerTitle}</h2>
              <span className="text-sm mb-8 lg:pr-12" dangerouslySetInnerHTML={{__html: style.footerBlurb }}></span>
            </div>

            <div className="w-full md:w-3/5 md:px-8 mb-6 md:mb-0 order-1 md:order-2">
              <Img fluid={style.footerImage.fluid} key={style.footerImage.fluid} alt={style.footerTitle} className="border-l-12 border-pink w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Thid Block End */}
  </div>
)

export const query = graphql`
  query styleQuery {
    site: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    style: datoCmsStyle {
      title
      heroTitle
      heroBlurb
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroAdditionalBlurb
      heroImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      heroSupportingImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      heroSupportingImageCaption
      contentLeftImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      contentLeftImageCaption
      contentMiddleImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      contentMiddleTitle
      contentMiddleBlurb
      contentRightImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      testimonialImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      testimonialQuote
      testimonialClient
      testimonialContent
      contentRightImageCaption
      footerTitle
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

export default StylePage
