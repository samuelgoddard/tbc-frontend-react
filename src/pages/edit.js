import React from "react"
import { Link, graphql } from "gatsby"
import Teaser from "../components/teaser"
import Img from "gatsby-image"

import SEO from "../components/seo"

const EditPage = ({ data: { site, edit, edits, categories } }) => {
  return (
  <div>
    <SEO meta={edit.seoMetaTags} favicon={site.faviconMetaTags} />
    {/* First block start */}
    <div className="mb-12 md:mb-32 xl:mb-40">
      <div className="container" id="current" data-scroll-section>
        <div className="flex flex-wrap md:-mx-6">
          <div className="w-full md:w-1/3 md:px-6 relative">
            <div className="sticky top-0 pt-16 lg:pt-24" data-scroll data-scroll-sticky data-scroll-position="top" data-scroll-target="#current">
              <div className="mb-12">
                <h2 className="font-serif text-2xl">{ edit.heading }</h2>
                <span className="text-sm pr-24 md:pr-6 lg:pr-24" dangerouslySetInnerHTML={{__html:edit.blurb}}></span>
              </div>

              {/* <h3 className="text-black text-base font-sans font-bold">choose a category&nbsp;&nbsp;-</h3>

              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 md:w-full xl:w-1/2 px-2">
                  <Link to={`/edit/`} activeClassName="underline" className="link py-2">all</Link>
                </div>
                {categories.edges.map(({ node }, index) => (
                  <div key={index} className="w-1/2 md:w-full xl:w-1/2 px-2">
                    <Link to={`/edit/${node.slug}`} className="link py-2">{node.title}</Link>
                  </div>
                ))}
              </div> */}
            </div>

          </div>
          <div className="w-full md:w-2/3 md:px-6" data-scroll data-scroll-speed="4" data-scroll-position="top" data-scroll-target="#current">
            <div className="flex flex-wrap -mx-3 sm:-mx-5 lg:-mx-8 mt-24 md:mt-0" >
              {edits.edges.map(({ node }, index) => (
                <div key={index} className={`${ index % 2 ? '-mt-8 md:-mt-32 w-1/2 px-3 sm:px-5 lg:px-8' : 'w-1/2 px-3 sm:px-5 lg:px-8' }`}>
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

    {/* Second block start */}
    <div className="overflow-x-hidden mb-12 md:mb-32 xl:mb-40" id="second" data-scroll-section>
      <div className="container">
        <div className="flex flex-wrap md:-mx-8">
          <div className="w-10/12 md:w-2/3 lg:w-4/12 xl:w-3/12 md:px-8 md:mt-12 lg:mt-24 mb-12 lg:mb-0" data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-target="#second">
            <h2 className="font-serif text-2xl">{ edit.supportingSectionHeading }</h2>
            <span className="text-sm" dangerouslySetInnerHTML={{__html:edit.supportingSectionBlurb}}></span>
            <Link to="/about" className="underline">more about tbc</Link>
          </div>
          
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div className="flex flex-wrap" data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-target="#second">
              <div className="w-2/3">
                <Img fluid={edit.supportingSectionImage.fluid} alt="Placeholder Image" className="border-l-12 border-pink w-full" />

              </div>
              <div className="w-1/3 self-end pl-5 sm:pl-8 md:pl-10 xl:pl-16">
                <Img fluid={edit.supportingSectionSupportingImage.fluid} alt="Placeholder Image" />
                {/* <lazy-image src="https://placedog.net/650/900" alt="Placeholder Image" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Second block end */}
  </div>
  )
}

export default EditPage

export const query = graphql`
query editsQuery {
  site: datoCmsSite {
    faviconMetaTags {
      ...GatsbyDatoCmsFaviconMetaTags
    }
  }
  edit: datoCmsEditPage {
    heading
    seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
    blurb
    supportingSectionHeading
    supportingSectionBlurb
    supportingSectionImage {
      url
      fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
        ...GatsbyDatoCmsSizes
      }
    }
    supportingSectionSupportingImage {
      url
      fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
        ...GatsbyDatoCmsSizes
      }
		}
  }
  edits: allDatoCmsEdit(
    filter: { soft: { eq: true } }
  ) {
    edges {
      node {
        id
        title
        link
        slug
        soft
        image {
          url
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
        }
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