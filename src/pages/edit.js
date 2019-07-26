import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

const EditPage = ({ data: { posts, categories } }) => {
  return (
  <div>
    <SEO title="Edit" />
    {/* First block start */}
    <div className="mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="flex flex-wrap md:-mx-6">
          <div className="w-full md:w-1/3 md:px-6 mt-16 lg:mt-24">
            <div className="mb-12">
              <h2 className="font-serif text-2xl">the edit</h2>
              <p className="text-sm pr-24 md:pr-6 lg:pr-24">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat, deleniti amet nisi dolore non volupd.</p>

              {/* <h2>@DEBUG testing posts here</h2>
              <ul>
                <li
                  v-for="(post, index) in allPosts"
                  :key="post.id">

                  <Link :to="'/edit/' + post.slug">{{ post.title }}</Link>
                </li>
              </ul> */}
            </div>

            <h3 className="text-black text-base font-sans font-bold">choose a category&nbsp;&nbsp;-</h3>

            <div className="flex flex-wrap -mx-2">
              {categories.edges.map(({ node }, index) => (
                <div key={index} className="w-1/2 md:w-full xl:w-1/2 px-2">
                  <Link to={`/categories/${node.slug}`} className="link py-2">{node.title}</Link>
                </div>
              ))}
            </div>

          </div>
          <div className="w-full md:w-2/3 md:px-6">
            <div className="flex flex-wrap -mx-3 sm:-mx-5 lg:-mx-8 mt-24 md:mt-0">
              {/* <div 
                className="w-1/2 px-3 sm:px-5 lg:px-8"
                :className="{ '-mt-12 md:-mt-32' : index % 2 }"
                v-for="(article, index) in articles"
                :key="article.id"
              >
                <Teaser :imgUrl="article.imgUrl" naked />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* First block end */}

    {/* Second block start */}
    <div className="overflow-x-hidden mb-12 md:mb-32 xl:mb-40">
      <div className="container">
        <div className="flex flex-wrap md:-mx-8">
          <div className="w-10/12 md:w-2/3 lg:w-4/12 xl:w-3/12 md:px-8 md:mt-12 lg:mt-24 mb-12 lg:mb-0">
            <h2 className="font-serif text-2xl">welcome to your creative life</h2>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum placeat, deleniti amet nisi dolore non voluptates mollitia unde atque tempora aliquam ad.</p>
            <Link to="/about" className="underline">more about tbc</Link>
          </div>
          
          <div className="w-full lg:w-8/12 xl:w-9/12 md:px-8">
            <div className="flex flex-wrap">
              <div className="w-2/3">
                {/* <lazy-image src="https://placedog.net/900/1000" alt="Placeholder Image" classList="border-l-12 border-pink" /> */}
              </div>
              <div className="w-1/3 self-end pl-5 sm:pl-8 md:pl-10 xl:pl-16">
                {/* <lazy-image src="https://placedog.net/650/900" alt="Placeholder Image" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Second block end */}

    {/* POSTS LOOP <div className="mb-8">
      {posts.edges.map(({ node: post }) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div> */}
  </div>
  )
}

export default EditPage

export const query = graphql`
query postsQuery {
  posts: allDatoCmsPost {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
  categories: allDatoCmsCategory {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
`