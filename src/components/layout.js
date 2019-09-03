import React from "react"
import PropTypes from "prop-types"

import { motion, AnimatePresence } from 'framer-motion'

import Header from "./header"
import Footer from "./footer"

const duration = 0.35

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => {
  return (
    <div>
      <Header />
      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          id="main"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      {/* <main>{children}</main> */}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
