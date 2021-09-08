import React from "react"

import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


class ProductTemplate extends React.Component {
  render() {
    const product = this.props.data.contentfulBlogEntry
    const {
      title
    } = product
    return (
      <div>
        {title}
      </div>
    )
  }
}

export default ProductTemplate

export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlogEntry(id: { eq: $id }) {
      title
      content {
      raw
      }
      shortSummary {
      raw
      }
      categories {
        id
        gatsbyPath(filePath: "/categories/{ContentfulCategory.id}")
        title
      }
    }
  }
`
