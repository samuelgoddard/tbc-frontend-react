import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Hero = ({ img, blurb, title }) => (
  <div className="flex flex-wrap items-center" id="hero" data-scroll-section>
    <div className="w-full md:w-1/2 order-2 md:order-1">
      <div className="flex flex-wrap lg:justify-center">
        <div className="w-10/12 md:w-3/4 lg:w-4/6 lg:pr-32">
          <h1 className="font-serif text-2xl" data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-target="#hero">{title}</h1>
          
          <p className="text-sm" data-scroll data-scroll-speed="3" data-scroll-position="top" data-scroll-target="#hero">{blurb}</p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 relative order-1 md:order-2 mb-8 md: mb-0">
      <div className="absolute top-0 left-0 h-full z-10 -ml-48 hidden md:block">
        <div className="flex flex-wrap items-center h-full" data-scroll data-scroll-speed="6" data-scroll-position="top">
          <svg viewBox="0 0 617 57" xmlns="http://www.w3.org/2000/svg" className="logo--full">
            <path d="M611 56a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM0 16.286h6.163V5.588H16.25v10.698h8.644v8.143H16.25V42.47c0 2.022.453 3.459 1.36 4.31.908.852 2.135 1.278 3.682 1.278.748 0 1.388-.053 1.922-.16s1.013-.213 1.44-.32l.96 8.303c-.906.32-1.96.586-3.16.799-1.202.213-2.389.319-3.563.319-1.707 0-3.335-.2-4.882-.599-1.548-.399-2.909-1.077-4.083-2.035-1.174-.958-2.094-2.25-2.761-3.872-.667-1.624-1-3.66-1-6.107V24.429H0zm81.084 19.798c0 3.46-.614 6.493-1.841 9.1-1.228 2.609-2.868 4.79-4.923 6.547a20.998 20.998 0 0 1-6.964 3.952A24.624 24.624 0 0 1 59.392 57c-2.721 0-5.376-.44-7.964-1.317-2.588-.878-4.91-2.196-6.964-3.952s-3.695-3.938-4.923-6.546c-1.227-2.608-1.84-5.642-1.84-9.101s.613-6.493 1.84-9.1 2.869-4.79 4.923-6.547c2.054-1.756 4.376-3.074 6.964-3.952s5.243-1.317 7.964-1.317c2.722 0 5.376.44 7.964 1.317a20.998 20.998 0 0 1 6.964 3.952c2.055 1.756 3.695 3.938 4.923 6.546s1.84 5.642 1.84 9.101zM59.392 47.58c1.494 0 2.922-.253 4.282-.759a10.94 10.94 0 0 0 3.642-2.235c1.068-.984 1.921-2.195 2.562-3.632.64-1.437.96-3.06.96-4.87s-.32-3.433-.96-4.87-1.494-2.647-2.562-3.632-2.28-1.73-3.642-2.235c-1.36-.506-2.788-.759-4.282-.759s-2.922.253-4.282.759a10.94 10.94 0 0 0-3.642 2.235c-1.067.985-1.921 2.195-2.562 3.632-.64 1.437-.96 3.06-.96 4.87s.32 3.433.96 4.87c.64 1.437 1.495 2.648 2.562 3.632a10.94 10.94 0 0 0 3.642 2.235c1.36.506 2.788.759 4.282.759zM127.029 0h10.085v21.155c1.494-1.862 3.375-3.326 5.643-4.39s4.736-1.597 7.404-1.597 5.15.466 7.444 1.397 4.296 2.302 6.003 4.111c1.708 1.81 3.055 4.005 4.042 6.587s1.481 5.521 1.481 8.821-.507 6.24-1.52 8.821c-1.014 2.582-2.388 4.777-4.123 6.587-1.734 1.81-3.762 3.18-6.083 4.11S152.615 57 150 57c-3.148 0-5.776-.585-7.884-1.756-2.108-1.171-3.776-2.582-5.003-4.231v4.87h-10.085zm20.65 47.58c1.602 0 3.096-.28 4.483-.838a10.007 10.007 0 0 0 3.562-2.395 11.445 11.445 0 0 0 2.321-3.633c.56-1.383.84-2.927.84-4.63 0-1.65-.28-3.18-.84-4.59-.56-1.41-1.334-2.635-2.321-3.673a10.007 10.007 0 0 0-3.562-2.395c-1.387-.558-2.881-.838-4.482-.838s-3.095.28-4.483.838a10.007 10.007 0 0 0-3.562 2.395c-.987 1.038-1.76 2.262-2.32 3.673-.561 1.41-.841 2.94-.841 4.59 0 1.703.28 3.247.84 4.63a11.445 11.445 0 0 0 2.321 3.633 10.007 10.007 0 0 0 3.562 2.395c1.388.558 2.882.838 4.483.838zm44.745-9.101c.32 3.034 1.467 5.442 3.442 7.225 1.974 1.783 4.455 2.674 7.444 2.674 2.775 0 5.016-.652 6.723-1.956s3.122-3.073 4.243-5.309l7.524 4.311c-1.868 3.886-4.31 6.786-7.324 8.702C211.46 56.042 207.686 57 203.15 57c-2.775 0-5.39-.506-7.845-1.517a20.047 20.047 0 0 1-6.483-4.27c-1.868-1.837-3.349-4.032-4.443-6.587-1.093-2.555-1.64-5.402-1.64-8.542 0-3.14.547-5.987 1.64-8.542 1.094-2.555 2.589-4.75 4.483-6.586 1.894-1.836 4.109-3.26 6.643-4.271 2.535-1.011 5.243-1.517 8.125-1.517 2.828 0 5.43.492 7.804 1.477s4.416 2.355 6.123 4.111c1.708 1.757 3.042 3.846 4.003 6.267.96 2.422 1.44 5.07 1.44 7.943v3.513zm10.886-15.647c-2.722 0-5.03.798-6.924 2.395-1.894 1.597-3.215 3.566-3.962 5.907h21.291c-.48-2.554-1.614-4.577-3.402-6.067-1.787-1.49-4.122-2.235-7.003-2.235zm103.015 22.752c-1.867 3.779-4.389 6.626-7.564 8.542-3.175 1.916-6.843 2.874-11.006 2.874-2.935 0-5.67-.492-8.204-1.477s-4.75-2.395-6.644-4.231c-1.894-1.836-3.375-4.045-4.442-6.626-1.067-2.581-1.601-5.442-1.601-8.582 0-3.14.56-6 1.68-8.582 1.122-2.581 2.629-4.79 4.523-6.626 1.895-1.836 4.11-3.246 6.644-4.231s5.216-1.477 8.044-1.477c4.43 0 8.218.945 11.366 2.834 3.149 1.89 5.417 4.537 6.804 7.943l-8.244 5.429c-1.174-2.555-2.615-4.324-4.323-5.309-1.707-.984-3.602-1.477-5.683-1.477-1.494 0-2.881.266-4.162.799a9.749 9.749 0 0 0-3.362 2.315c-.96 1.01-1.707 2.222-2.241 3.632-.534 1.41-.8 2.994-.8 4.75 0 3.566 1 6.373 3.001 8.422 2.001 2.05 4.523 3.074 7.564 3.074 2.668 0 4.803-.626 6.404-1.876 1.6-1.25 2.961-3.047 4.082-5.389zm37.46-20.437c-1.013-.372-2.107-.559-3.281-.559-1.494 0-2.842.293-4.042.878a8.554 8.554 0 0 0-3.042 2.475c-.827 1.065-1.454 2.315-1.881 3.752s-.64 2.98-.64 4.63v19.56h-10.086V16.285H330.9v6.306c1.12-2.288 2.601-4.098 4.442-5.428 1.841-1.33 4.042-1.996 6.604-1.996 1.227 0 2.374.16 3.441.48zm21.452 13.332c.32 3.034 1.468 5.442 3.442 7.225 1.974 1.783 4.456 2.674 7.444 2.674 2.775 0 5.016-.652 6.724-1.956s3.121-3.073 4.242-5.309l7.524 4.311c-1.868 3.886-4.309 6.786-7.324 8.702-3.015 1.916-6.79 2.874-11.326 2.874-2.775 0-5.39-.506-7.844-1.517a20.047 20.047 0 0 1-6.484-4.27c-1.868-1.837-3.348-4.032-4.442-6.587-1.094-2.555-1.641-5.402-1.641-8.542 0-3.14.547-5.987 1.64-8.542 1.095-2.555 2.589-4.75 4.483-6.586 1.895-1.836 4.109-3.26 6.644-4.271 2.534-1.011 5.243-1.517 8.124-1.517 2.828 0 5.43.492 7.804 1.477s4.416 2.355 6.124 4.111c1.707 1.757 3.041 3.846 4.002 6.267.96 2.422 1.44 5.07 1.44 7.943v3.513zm10.886-15.647c-2.722 0-5.03.798-6.924 2.395-1.894 1.597-3.215 3.566-3.962 5.907h21.292c-.48-2.554-1.615-4.577-3.402-6.067-1.788-1.49-4.122-2.235-7.004-2.235zm62.514 33.05c-.32-.425-.72-1.157-1.2-2.195-.481-1.038-.721-2.408-.721-4.111-1.388 2.501-3.229 4.364-5.523 5.588-2.295 1.224-4.883 1.836-7.765 1.836-1.974 0-3.775-.293-5.402-.878s-3.029-1.41-4.203-2.475-2.094-2.368-2.761-3.912c-.667-1.543-1-3.246-1-5.109 0-2.022.386-3.792 1.16-5.309.774-1.517 1.814-2.807 3.122-3.872s2.814-1.916 4.522-2.554a25.547 25.547 0 0 1 5.363-1.357l11.926-1.837v-1.516c0-1.916-.6-3.393-1.8-4.431s-3.029-1.557-5.484-1.557c-2.348 0-4.122.44-5.322 1.318-1.201.878-1.801 1.929-1.801 3.153v.399c0 .106-.107.293 0 .559h-9.606c.25-2.244.623-3.854 1.121-4.83.747-1.464 1.828-2.754 3.242-3.872 1.414-1.117 3.161-2.022 5.243-2.714 2.08-.692 4.455-1.038 7.123-1.038 5.603 0 9.9 1.184 12.887 3.553 2.989 2.368 4.483 5.974 4.483 10.817v16.525c0 2.289.2 4.151.6 5.588s1.08 2.848 2.041 4.231zm-12.807-7.025c2.935 0 5.39-.958 7.364-2.874 1.974-1.916 2.961-4.79 2.961-8.622v-.718l-9.605 1.596c-4.429.746-6.643 2.688-6.643 5.828 0 1.597.547 2.794 1.64 3.593 1.094.798 2.522 1.197 4.283 1.197zm34.338-32.571h6.164V5.588h10.085v10.698h8.645v8.143h-8.645V42.47c0 2.022.454 3.459 1.36 4.31.908.852 2.135 1.278 3.683 1.278.747 0 1.387-.053 1.92-.16s1.015-.213 1.442-.32l.96 8.303c-.907.32-1.96.586-3.162.799-1.2.213-2.388.319-3.561.319-1.708 0-3.336-.2-4.883-.599-1.548-.399-2.908-1.077-4.082-2.035-1.174-.958-2.095-2.25-2.762-3.872-.667-1.624-1-3.66-1-6.107V24.429h-6.164zm47.386 22.193c.32 3.034 1.467 5.442 3.442 7.225 1.974 1.783 4.455 2.674 7.444 2.674 2.775 0 5.016-.652 6.723-1.956 1.708-1.304 3.322-2.275 4.443-4.51l7.084 4.51c-1.868 3.885-4.07 5.788-7.084 7.704C526.59 56.042 522.816 57 518.28 57c-2.775 0-5.39-.506-7.845-1.517s-4.615-2.435-6.483-4.27c-1.868-1.837-3.349-4.032-4.442-6.587-1.094-2.555-1.641-5.402-1.641-8.542 0-3.14.547-5.987 1.64-8.542 1.094-2.555 2.589-4.75 4.483-6.586 1.894-1.836 4.109-3.26 6.644-4.271 2.534-1.011 5.242-1.517 8.124-1.517 2.828 0 5.43.492 7.804 1.477 2.375.985 4.416 2.355 6.123 4.111 1.708 1.757 3.042 3.846 4.003 6.267.96 2.422 1.44 5.07 1.44 7.943v3.513zm10.886-15.647c-2.722 0-5.03.798-6.924 2.395-1.894 1.597-3.215 3.566-3.962 5.907h21.291c-.48-2.554-1.614-4.577-3.401-6.067-1.788-1.49-4.123-2.235-7.004-2.235zM593 55.882h-10.085v-5.588c-1.068 1.863-2.655 3.446-4.763 4.75-2.108 1.304-4.683 1.956-7.724 1.956-2.722 0-5.27-.466-7.644-1.397a17.438 17.438 0 0 1-6.204-4.111c-1.76-1.81-3.148-4.005-4.162-6.587-1.014-2.58-1.52-5.521-1.52-8.821s.56-6.24 1.68-8.821c1.12-2.582 2.602-4.777 4.443-6.587 1.84-1.81 3.922-3.18 6.243-4.11a19.073 19.073 0 0 1 7.164-1.398c2.988 0 5.536.532 7.644 1.597 2.108 1.064 3.722 2.528 4.843 4.39V0H593zm-20.651-8.302c1.6 0 3.082-.28 4.442-.838a10.501 10.501 0 0 0 3.562-2.395 11.105 11.105 0 0 0 2.361-3.633c.56-1.383.84-2.927.84-4.63 0-1.65-.28-3.18-.84-4.59a11.006 11.006 0 0 0-2.36-3.673 10.501 10.501 0 0 0-3.563-2.395c-1.36-.558-2.841-.838-4.442-.838s-3.082.28-4.443.838a10.501 10.501 0 0 0-3.561 2.395 11.006 11.006 0 0 0-2.362 3.673c-.56 1.41-.84 2.94-.84 4.59 0 1.703.28 3.247.84 4.63a11.105 11.105 0 0 0 2.362 3.633 10.501 10.501 0 0 0 3.561 2.395c1.361.558 2.842.838 4.443.838z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div data-scroll data-scroll-speed="2" data-scroll-position="top" data-scroll-target="#hero">
        <Img fluid={img} key={img} alt="Placeholder Image" className="border-l-12 border-pink" />
      </div>
    </div>
  </div>
)


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