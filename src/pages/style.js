import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"

const StylePage = () => (
  <div>
    <SEO title="Style" />
    {/* First block start */}
    <div className="overflow-x-hidden mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="flex flex-wrap md:-mx-8">
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div className="flex flex-wrap">
              <div className="w-1/3 self-end pr-5 sm:pr-8 md:pr-10 xl:pr-16">
                {/* <lazy-image src="https://placedog.net/650/900" alt="Placeholder Image" caption="Lorem ipsum dolor sit amet, consect adipisicing elit" /> */}
              </div>
              <div className="w-2/3">
                {/* <lazy-image src="https://placedog.net/750/1200" alt="Placeholder Image" classList="border-l-12 border-pink lg:mb-8" /> */}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 xl:w-3/12 md:px-8 mt-12 lg:mt-24 mb-12 lg:mb-0">
            <h2 className="font-serif text-2xl">quinoa portland pickled polaroid occupy tumblr</h2>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat, deleniti amet nisi dolore non voluptates mollitia unde atque tempora aliquam ad.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap md:-mx-8">
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div className="flex flex-wrap">
              <div className="hidden sm:block w-1/3 self-end">
              </div>
              <div className="w-full sm:w-2/3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum, quisquam quis quae ullam quibusdam ipsa nihil modi repudiandae, aut quasi nostrum fugiat sapiente deleniti, delectus facere quod eligendi culpa.</p>
                
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident enim ipsam libero, est amet inventore corrupti ratione soluta accusamus a porro pariatur dolorum. Nesciunt ullam perferendis reprehenderit. Distinctio, ad quibusdam!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* First block end */}

    {/* Second block start */}
    <div className="overflow-x-hidden mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="flex flex-wrap lg:-mx-10">
          <div className="w-full lg:w-1/2 lg:px-10 lg:mt-24 mb-10 md:mb-12">
            {/* <lazy-image src="https://placedog.net/900/740" alt="Placeholder Image" caption="Lorem ipsum dolor sit amet, consect adipisicing elit." /> */}
          </div>
          <div className="w-full lg:w-1/2 lg:px-10">
            <div className="flex flex-wrap -mx-3 md:-mx-10">
              <div className="w-2/3 lg:w-1/2 px-3 md:px-10">
                {/* <lazy-image src="https://placedog.net/600/900" alt="Placeholder Image" classList="mb-4" /> */}
                <h2 className="font-serif text-2xl">street art occupy pok pok salvia</h2>

                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum, quisquam quis quae ullam quibusdam ipsa nihil modi repudiandae, aut quasi nostrum fugiat sapiente deleniti, delectus facere quod eligendi culpa.</p>
              </div>
              <div className="w-1/3 lg:w-1/2 px-3 md:px-10 lg:mt-24">
                {/* <lazy-image src="https://placedog.net/650/900" alt="Placeholder Image" caption="Lorem ipsum dolor sit amet, consect adipisicing elit." /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Second block  end */}

    {/* Third block start */}
    <div className="mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-wrap md:-mx-8 items-center">
            <div className="w-full md:w-2/5 md:px-8 order-2 md:order-1">
              <h2 className="font-serif text-2xl">to be created.</h2>
              <p className="text-sm mb-4 lg:pr-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi alias nobis impedit veritatis. Voluptate quis nisi aliquam, sunt ullam totam omnis ex distinctio. Lorem ipsumdolor sit amet consecteteur adipicising</p>
            </div>

            <div className="w-full md:w-3/5 md:px-8 mb-6 md:mb-0 order-1 md:order-2">
              {/* <lazy-image src="https://placedog.net/900/800" alt="Placeholder Image" classList="border-l-12 border-pink w-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Thid Block End */}
  </div>
)

export default StylePage
