import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Teaser = ({ img, meta, heading, linkText, small, naked, link, externalLink, caption }) => (
  <div className="m-teaser relative mb-3 sm:mb-6 lg:mb-12 text-left group">
    {caption && (
      <span class="absolute bottom-0 left-0 right-0 w-full px-4 py-3 z-10 text-white text-left bg-dark-blue-grey opacity-0 group-hover:opacity-75 break-words">{ caption }</span>
    )}
    {externalLink && (
      // <span className="block">
      //   <Img fluid={img} key={img} alt="Placeholder Image" className="w-full" />
      // </span>
      <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline" aria-label="Navigate to article">
        <Img fluid={img} key={img} alt="Placeholder Image" className="w-full" />
      </a>
    )}
    {!externalLink && (
      // <Link to={link} className="no-underline" aria-label="Navigate to article">
        <Img fluid={img} key={img} alt="Placeholder Image" className="w-full" />
      // </Link>
    )}
    
    {meta && (
      <span className="meta mt-5">{meta}</span>
    )}

    {naked && heading && (
      <h1 className={`${ small ? 'text-xl' : 'text-2xl' } font-serif`}>{heading}</h1>
    )}
    {!naked && heading && (
      <Link to={link}><h1 className={`${ small ? 'text-xl' : 'text-2xl' } font-serif mb-3`}>{heading}</h1></Link>
    )}

    {!naked && (
      <Link to={link} className="underline">{linkText}</Link>
    )}
  </div>
)


Teaser.propTypes = {
  img: PropTypes.object,
  meta: PropTypes.string,
  heading: PropTypes.string,
  caption: PropTypes.string,
  linkText: PropTypes.string,
  small: PropTypes.bool,
  naked: PropTypes.bool,
  link: PropTypes.string,
  externalLink: PropTypes.bool
}

Teaser.defaultProps = {
  img: [],
  meta: ``,
  heading: ``,
  caption: ``,
  linkText: `view more`,
  small: false,
  naked: false,
  link: `#`,
  externalLink: false
}

export default Teaser