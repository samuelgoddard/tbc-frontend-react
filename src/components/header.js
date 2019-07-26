import React from "react"
import Logo from "./logo"
import { Link } from "gatsby"

const Header = () => (
  <header className="container py-10">
    <div className="flex flex-wrap items-center">
      <Logo classList="text-beige hover:text-dark-blue-grey focus:text-dark-blue-grey transition"></Logo>
      <div className="flex-1">
        <div className="flex justify-end sm:justify-center">
          <div role="navigation" aria-label="Site Navigation">
            <nav>
              <ul className="flex items-end sm:items-center">
                <li><Link activeClassName="underline" className="block p-2 sm:mx-2" to="/edit">the edit</Link></li>
                <li><Link activeClassName="underline" className="block p-2 sm:mx-2" to="/style">style</Link></li>
                <li><Link activeClassName="underline" className="block p-2 sm:mx-2" to="/about">about</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
