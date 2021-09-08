import React from "react"
import * as PropTypes from "prop-types"

import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.data.contentfulCategory
    const {
      title: { title },
      product,
      icon,
    } = category
    const iconImg = icon.gatsbyImageData
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          {iconImg && (
            <GatsbyImage
              alt={"hello"}
              image={iconImg}
            />
          )}
          <h1 style={{ marginBottom: 0 }}>Category: {title}</h1>
        </div>
        <div>
          <h2>Products</h2>
          <ul>
            {product &&
            product.map((p, i) => (
              <li key={i}>
                <Link to={p.gatsbyPath}>{p.productName.productName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query($id: String!) {
    contentfulCategory(id: { eq: $id }) {
      title
      icon {
        gatsbyImageData(layout: FIXED, width: 75)
      }
    }
  }
`
