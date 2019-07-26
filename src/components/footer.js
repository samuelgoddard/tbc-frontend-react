import React from "react"
import Logo from "./logo"

const Footer = () => (
  <footer>
    <div className="container py-10 pb-12">
      <div className="flex flex-wrap items-center">
        <div className="mb-5 sm:mb-0">
          <Logo className="text-dark-blue-grey"></Logo>
        </div>

        <div className="w-full sm:flex-1">
          <div className="flex flex-wrap">
            <div className="sm:ml-8">
              <p className="text-black text-sm leading-snug mb-0">
                sign up to the <a href="https://example.com" className="text-black underline">newsletter</a><br/>
                we use <a href="https://example.com" className="text-black underline">cookies</a>
              </p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-black text-sm leading-snug mb-0">
                <a href="https://example.com" className="text-black underline block">instagram</a>
                <a href="https://example.com" className="text-black underline block">pinterest</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
