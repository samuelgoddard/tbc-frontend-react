import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const AboutPage = () => (
  <div>
    <SEO title="About" />
    <h1>About page</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage
