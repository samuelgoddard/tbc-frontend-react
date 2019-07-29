import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { motion } from "framer-motion"
// import posed from "react-pose"

const Hero = ({ img, blurb, title }) => {

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { y: 27 },
    visible: {
      y: 0,
    },
  };

  return (
  <div className="flex flex-wrap items-center">
    <div className="w-full md:w-1/2 order-2 md:order-1">
      <div className="flex flex-wrap lg:justify-center">
        <div className="w-10/12 md:w-3/4 lg:w-4/6 lg:pr-32">
          <h1 className="font-serif text-2xl">{title}</h1>

          <p className="text-sm">{blurb}</p>
        </div>
      </div>
    </div>
  

    <div className="w-full md:w-1/2 relative order-1 md:order-2 mb-8 md: mb-0">
      <div className="absolute top-0 left-0 h-full z-10 -ml-64 hidden md:block">
        <div className="flex flex-wrap items-center h-full">
          <h1 class="font-logo font-bold text-4xl text-dark-blue-grey">
            <motion.ul
              className="container flex"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              t
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              o
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              b
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              e
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              c
              </motion.li> 
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              r
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              e
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              a
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              t
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              e
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              d
              </motion.li>
              <motion.li
                className="mx-1"
                variants={item}
                transition={{
                  yoyo: Infinity,
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
              .
              </motion.li>
            </motion.ul>
          </h1>
        </div>
      </div>
      
      <Img fluid={img} key={img} alt="Placeholder Image" className="border-l-12 border-pink" />
    </div>
  </div>
)}


Hero.propTypes = {
  img: PropTypes.object,
  blurb: PropTypes.string,
  title: PropTypes.string
}

Hero.defaultProps = {
  img: [],
  blurb: ``,
  title: ``
}

export default Hero