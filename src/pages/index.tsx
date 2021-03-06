import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../utility/seo"
import { AnimatePresence, motion, useViewportScroll } from "framer-motion"
import Entry from "../components/Entry"
import { TagProps } from "../components/Tag"
import { useState } from "react"


const IndexPage: React.FC = ({data}) => {

  const testTags: TagProps[] = [
    {
      name: 'React.JS',
      category: 'Web Frontend',
      iconID: "ReactJS",
      tooltip: "TOOLTIP FOR REACT HERE!"
    },
    {
      name: 'Gatsby',
      category: 'Web Frontend',
      iconID: "Gatsby",
      tooltip: "TOOLTIP FOR Gatsby HERE!"
    }
  ]

  const [featuredIndex, setFeaturedIndex] = useState<number>(0);

  const { title, id, shortSummary, slug, previewImages } = data.allContentfulBlogEntry.edges[featuredIndex].node;
  console.log(previewImages);

return(  
  <Layout>
    <Seo title="Home" />
    <div>
    <AnimatePresence>
      <motion.div
      key={data.allContentfulBlogEntry.edges[featuredIndex]}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        <Entry key={id} name={title} tags={testTags} contentRichText={shortSummary.raw} link={`/posts/${slug}`} previewImages={previewImages}/>
      </motion.div>
  </AnimatePresence>

    <button onClick={() => {featuredIndex < data.allContentfulBlogEntry.edges.length - 1 ? setFeaturedIndex(featuredIndex + 1) : setFeaturedIndex(0)}}>ADVANCE</button>
   {/* <h1>Entries</h1>
    <div className={'EntryList'}>
      <AnimatePresence>
      {data.allContentfulBlogEntry.edges.map(({node}) => {
        console.log(node);
        const { title, id, shortSummary, slug } = node;
        return ( <Entry key={id} name={title} tags={testTags} contentRichText={shortSummary.raw} link={`/posts/${slug}`}/> );
    })}
    </AnimatePresence>
    </div> */}
    </div>
  </Layout>
);
}

export const query = graphql`
query IndexQuery {
  allContentfulBlogEntry {
    edges {
      node {
        id
        title
        slug
        shortSummary {
          raw
        }
        previewImages {
                  ... on ContentfulAsset {
        contentful_id
        __typename
        gatsbyImageData
        }
        }
      }
    }
  }
}


`


export default IndexPage
