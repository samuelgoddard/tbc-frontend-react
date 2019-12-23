import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const PressPage = ({ data: { site, press } }) => (
  <div>
    <SEO meta={press.seoMetaTags} favicon={site.faviconMetaTags} />
    {/* First block start */}
    <div className="overflow-x-hidden mb-20 md:mb-24 mt-0">
      <div className="container">
        <div className="flex flex-wrap flex-row-reverse md:-mx-8">
          <div className="w-full lg:w-4/12 xl:w-3/12 md:px-8 order-2 lg:order-1 lg:mt-8">
            <h2 className="font-serif text-2xl">{press.heroTitle}</h2>
            <span className="text-sm" dangerouslySetInnerHTML={{__html: press.heroBlurb }}></span>
          </div>
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8 mb-6 lg:mb-0 order-1 lg:order-2">
            <div className="flex flex-wrap flex-row-reverse">
              <Img fluid={press.heroImage.fluid} key={press.heroImage.fluid} alt="Placeholder Image" className="w-full border-l-12 border-pink lg:mb-8" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap md:-mx-8">
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div className="flex flex-wrap">
              <div className="hidden sm:block w-1/3 self-end">
              </div>
              <div className="w-full sm:w-2/3 md:px-5" dangerouslySetInnerHTML={{__html: press.heroAdditionalBlurb }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* First block end */}

    <div className="mb-12 md:mb-32 overflow-hidden">
      <div className="container">
        <div className="md:w-10/12 mx-auto">
          <div className="flex flex-wrap md:-mx-8 lg:-mx-20 items-center">
            <div className="w-full md:w-1/2 md:px-8 md:mb-12 lg:px-20 lg:mb-20">
              <div className="md:w-9/12 xl:w-7/12 ml-auto mb-12 md:mb-0 md:-mt-12">
                <h3 className="text-xl lg:text-2xl text-dark-blue-grey font-serif leading-snug">tbc in the press</h3>
                {/* @TODO Integrate this to Dato */}
                <p className="text-sm">Intro to styling service. Roof party lo-fi live-edge man braid, freegan quinoa bushwick pabst raclette hexagon locavore meh wolf. </p>
              </div>
            </div>
            {press.pressArticles.map(({ image, url }, index) => (
              <div key={index} className={`${ index % 2 ? 'md:-mt-56 lg:-mt-64 w-full md:w-1/2 md:px-8 mb-8 md:mb-12 lg:px-20 lg:mb-20' : 'w-full md:w-1/2 md:px-8 mb-8 md:mb-12 lg:px-20 lg:mb-20'}`}>
                <div className={index === 2 ? 'w-full md:w-3/4 lg:w-2/3' : 'w-full'}>
                  <Img fluid={image.fluid} className="w-auto mb-2" />
                  <a href={ url } target="_blank" rel="noreferrer noopener" className="text-purple-brown text-sm underline">{ url }</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mb-12 md:mb-32 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap md:-mx-10">
          <div className="w-full md:w-4/12 lg:w-3/12 mb-8 md:mb-0 md:px-10 md:mt-32 lg:mt-24">
            <h3 className="text-xl lg:text-2xl text-dark-blue-grey font-serif leading-snug pr-8">some of our case studies</h3>
            {/* @TODO Integrate this to Dato */}
            <p className="text-sm">Intro to styling service. Roof party lo-fi live-edge man braid, freegan quinoa bushwick pabst raclette hexagon locavore meh wolf. </p>
          </div>
          <div className="w-full md:w-8/12 lg:w-9/12 md:px-10">
            <div className="flex flex-wrap md:-mx-6">
              {press.caseStudies.map(({ image, title, blurb }, index) => (
                <div key={index} className={`${ index % 2 ? 'md:mt-32 lg:mt-24 w-full md:w-1/2 lg:w-1/3 md:px-6 mb-8 md:mb-10 lg:mb-0' : 'w-full md:w-1/2 lg:w-1/3 md:px-6 mb-8 md:mb-10 lg:mb-0' }`}>
                  <Img fluid={image.fluid} className="w-full mb-3" />
                  <span className="text-sm text-light-grey-blue block mb-0">case study</span>
                  <span className="text-xl text-dark-blue-grey leading-snug font-serif mb-3 block">
                    {title}
                  </span>
                  <span className="text-sm mb-4 block" dangerouslySetInnerHTML={{__html: blurb }}></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Third block start */}
    <div className="mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-wrap md:-mx-8 items-center">
            <div className="w-full md:w-3/5 md:px-8 mb-6 md:mb-0">
              <Img fluid={press.footerImage.fluid} key={press.footerImage.fluid} alt={press.footerTitle} className="w-full" />
            </div>
            <div className="w-full md:w-2/5 md:px-8">
              <h2 className="font-serif text-2xl xl:pr-12">{press.footerHeading}</h2>
              <span className="text-sm mb-6 lg:pr-12 block" dangerouslySetInnerHTML={{__html: press.footerBlurb }}></span>

              <Link
                to="/services"
                className="inline-block text-purple-brown underline"
              >
                view our services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Thid Block End */}
  </div>
)

export const query = graphql`
  query pressQuery {
    site: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    press: datoCmsPress {
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
      pressArticles {
        image {
          fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
        url
      }
      caseStudies {
        image {
          fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
        title
        blurb
      }
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

export default PressPage
