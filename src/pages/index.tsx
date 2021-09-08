import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../utility/seo"
import { motion, useViewportScroll } from "framer-motion"
import Entry from "../components/Entry"
import { TagProps } from "../components/Tag"


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

  
return(  
  <Layout>
    <Seo title="Home" />
   <h1>Entries</h1>
    <div className={'EntryList'}>
      {data.allContentfulBlogEntry.edges.map(({node}) => {
        console.log(node);
        const { title, id, shortSummary, slug } = node;
        return ( <Entry key={id} name={title} tags={testTags} contentRichText={shortSummary.raw} link={`/posts/${slug}`}/> );
    })}
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
        }
      }
    }
  }
`


export default IndexPage
