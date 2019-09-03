import React from "react"
import Logo from "./logo"
import { Link } from "gatsby"

const Footer = () => (
  <footer id="footer" data-scroll-section>
    <div className="container py-10 pb-12">
      <div className="flex flex-wrap items-center">
        <div className="mb-5 sm:mb-0" data-scroll data-scroll-speed="6" data-scroll-position="bottom" data-scroll-target="#footer" data-scroll-direction="horizontal">
          <Logo className="text-dark-blue-grey"></Logo>
        </div>

        <div className="w-full sm:flex-1" >
          <div className="flex flex-wrap">
            <div className="sm:ml-8" data-scroll data-scroll-speed="6" data-scroll-position="bottom" data-scroll-target="#footer" data-scroll-direction="horizontal">
              <p className="text-black text-sm leading-snug mb-0">
                <span className="block">newsletter coming soon&hellip;</span>
                {/* <a href="#" className="text-black underline">newsletter coming soon...</a><br/> */}
                we use <Link activeClassName="underline" className="underline text-black" to="/cookies">cookies</Link>
              </p>
            </div>
            <div className="ml-auto text-right" data-scroll data-scroll-speed="-6" data-scroll-position="bottom" data-scroll-target="#footer" data-scroll-direction="horizontal">
              <p className="text-black text-sm leading-snug mb-0">
                <a href="https://www.instagram.com/tbc.uk/" target="blank" rel="noopener noreferer" className="text-black underline block">instagram</a>
                <a href="https://www.pinterest.co.uk/charlottewarbs/" target="blank" rel="noopener noreferer" className="text-black underline block">pinterest</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
