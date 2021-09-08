import React from "react"

import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


class ProductTemplate extends React.Component {
  render() {
    const product = this.props.data.contentfulBlogEntry
    const {
      title,
      content
    } = product
    return (
      <Layout>
        <h1>{title}</h1>
        {documentToReactComponents(JSON.parse(content.raw))}

      </Layout>
    )
  }
}

export default ProductTemplate

//https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/
// This is how we can render rich text from Contentful
export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlogEntry(id: { eq: $id }) {
      title
      slug
      content {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
      }

      }
      shortSummary {
      raw
      }
      categories {
        id
        gatsbyPath(filePath: "/categories/{ContentfulCategory.slug}")
        title
      }
    }
  }
`
