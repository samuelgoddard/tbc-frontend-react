import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const StylePage = () => (
  <div>
    <SEO title="Style" />
    <h1>Style page</h1>
    <p>Welcome to style page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default StylePage
