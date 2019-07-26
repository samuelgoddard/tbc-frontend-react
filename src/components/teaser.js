import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Teaser = ({ img, meta, heading, linkText, small, naked }) => (
  <div className="m-teaser pb-3 sm:pb-6 lg:pb-12">
    <Link to="/" className="no-underline" aria-label="Navigate to article">
      <Img fluid={img} key={img} alt="Placeholder Image" className="mb-5 w-full" />
    </Link>
    
    <span className="meta">{meta}</span>

    {naked && (
      <h1 className={`${ small ? 'text-xl' : 'text-2xl' } font-serif`}>{heading}</h1>
    )}
    {!naked && (
      <Link to="/"><h1 className={`${ small ? 'text-xl' : 'text-2xl' } font-serif mb-3`}>{heading}</h1></Link>
    )}

    {!naked && (
      <Link to="/" className="underline">{linkText}</Link>
    )}
  </div>
)


Teaser.propTypes = {
  img: PropTypes.object,
  meta: PropTypes.string,
  heading: PropTypes.string,
  linkText: PropTypes.string,
  small: PropTypes.bool,
  naked: PropTypes.bool
}

Teaser.defaultProps = {
  img: [],
  meta: ``,
  heading: ``,
  linkText: `view more`,
  small: false,
  naked: false
}

export default Teaser