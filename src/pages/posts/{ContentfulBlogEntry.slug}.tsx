import React from "react"

import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text'



class ProductTemplate extends React.Component {
  render() {
    const product = this.props.data.contentfulBlogEntry
    console.log(this.props.data);
    const {
      title,
      content
    } = product
    return (
      <Layout>
        <h1>{title}</h1>
        {content && renderRichText(content, {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a
        href={data.uri} 
        target={`${data.uri?.startsWith('') ? '_self' : '_blank'}`}
        rel={`${data.uri?.startsWith('') ? '' :'noopener noreferrer'}`}
      >{children}</a>
    ),    
    [INLINES.ASSET_HYPERLINK]:  ({data}, children)  =>{
      return(   <a
        href={data.uri} 
        target={`${data.uri?.startsWith('') ? '_self' : '_blank'}`}
        rel={`${data.uri?.startsWith('') ? '' :'noopener noreferrer'}`}
      >{children}</a>)
    },
    [INLINES.ENTRY_HYPERLINK]:  (node, children)  =>{
      return(<Link to={node.data.uri}>
        {children}
      </Link>)
    },
    [INLINES.EMBEDDED_ENTRY]: ({data}, children) => {
      return(
        <><h1>EMBEDDED ENTRY</h1><code>{JSON.stringify(data)}</code>
        {children}
        </>
      )
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const image = getImage(node.data.target)
      if(image !== undefined){
      return <GatsbyImage image={image} alt={node.data.target.description} />
      }else{
        return <p className='error'>Couldn't render image</p>
      }
    },
},
})}

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
          __typename
          gatsbyImageData
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
          file {
            url
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
