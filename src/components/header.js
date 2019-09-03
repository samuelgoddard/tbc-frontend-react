import React from "react"
import Logo from "./logo"
import { Link } from "gatsby"

const Header = () => (
  <header className="container py-10 overflow-hidden relative z-40" id="header" data-scroll-section>
    <div className="flex flex-wrap items-center">
      <div data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-target="#header">
        <Logo classList="text-beige hover:text-dark-blue-grey focus:text-dark-blue-grey transition"></Logo>
      </div>
      <div className="flex-1">
        <div className="flex justify-end sm:justify-center md:mr-20">
          <div role="navigation" aria-label="Site Navigation">
            <nav data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-target="#header">
              <ul className="flex items-end sm:items-center">
                <li><Link activeClassName="underline" className="block p-2 sm:mx-2" to="/edit">the edit</Link></li>
                <li><Link activeClassName="underline" className="block p-2 sm:mx-2" to="/portfolio">portfolio</Link></li>
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
