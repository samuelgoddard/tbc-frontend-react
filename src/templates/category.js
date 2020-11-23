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
            <div class="sticky top-0 pt-18">
              <div className="mb-12">
                <h2 className="font-serif text-2xl">{current.title}</h2>
                <div className="text-sm pr-24 md:pr-6 lg:pr-24" dangerouslySetInnerHTML={{__html:current.blurb}}></div>
              </div>

              <h3 className="text-black text-base font-sans font-bold">choose a category&nbsp;&nbsp;-</h3>

              <div className="flex flex-wrap -mx-2">
                {/* <div className="w-1/2 md:w-full xl:w-1/2 px-2">
                  <Link to={`/edit/`} activeClassName="underline" className="link py-2">all</Link>
                </div> */}

                {categories.edges.map(({ node }, index) => (
                  <div key={index} className="w-1/2 md:w-full xl:w-1/2 px-2">
                    <Link to={`/edit/${node.slug}`} activeClassName="underline" className="link py-1 text-sm">{node.title}</Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="w-full md:w-2/3 md:px-6" data-scroll data-scroll-speed="4" data-scroll-position="top" data-scroll-target="#current">
            <div className="flex flex-wrap -mx-3 sm:-mx-5 lg:-mx-8 md:mt-0 edit">
              {edits.edges.map(({ node }, index) => (
                <div key={index} className={`${ index % 2 ? 'md:-mt-32 mb-12 w-full md:w-1/2 px-3 sm:px-5 lg:px-8 md:mb-42' : 'w-full md:w-1/2 px-3 sm:px-5 lg:px-8 mb-12' }`}>
                <Teaser
                  link={node.link}
                  img={node.image.fluid}
                  caption={node.image.title ? node.image.title : node.title }
                  naked
                  externalLink
                />
              </div>
              ))}
              <div className="w-full md:w-1/2 px-3 sm:px-5 lg:px-8 mb-12 text-center">
                <div className="bg-white p-6 md:p-8 lg:p-10">
                  <span className="text-xl lg:text-2xl text-dark-blue-grey font-serif leading-snug mb-3 block">stay updated with the latest entries</span>

                  {/* Integrate Mailchimp Link here */}
                  <a href="https://to-be-created.us20.list-manage.com/subscribe/post?u=ade7fb4a4f729908a49062fd3&amp;id=2b177876de" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-brown py-3 px-8 hover:text-white focus:text-white hover:bg-dark-blue-grey focus:bg-dark-blue-grey text-white">sign up</a>
                </div>
              </div>
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
    categories: allDatoCmsCategory(
      filter: { slug: { nin: ["the-edit", "launch"] }}) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
    edits: allDatoCmsEdit(filter: {categories: { elemMatch: {slug: {eq: $slug }}}}, sort: { fields: [position], order: ASC }) {
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