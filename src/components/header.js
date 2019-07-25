// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-700 mb-4">
    <div className="container py-4">
      <div className="flex flex-wrap">
        <div>
          <h1 className="text-white">
            <AniLink fade to="/" preventScrollJump>{siteTitle}</AniLink>
          </h1>
        </div>
        <div className="ml-auto text-white">
          <AniLink fade to="/edit">the edit</AniLink>
          <AniLink fade to="/style">style</AniLink>
          <AniLink fade to="/about">about</AniLink>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
