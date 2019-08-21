import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const CookiesPage = ({ data: { site, cookie }}) => (
  <div>
    <SEO meta={cookie.seoMetaTags} favicon={site.faviconMetaTags} />

    {/* First block start */}
    <div className="overflow-x-hidden mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="flex flex-wrap md:w-3/4 items-center">

          <div className="w-full mt-12 lg:mt-24">
            <span className="text-sm mb-0" dangerouslySetInnerHTML={{__html:cookie.content}}>
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* First block end */}
  </div>
)

export const query = graphql`
query cookieQuery {
  site: datoCmsSite {
    faviconMetaTags {
      ...GatsbyDatoCmsFaviconMetaTags
    }
  }
  cookie: datoCmsCookie {
    content
    seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
  }
}
`

export default CookiesPage