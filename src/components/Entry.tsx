import Tag, { TagProps } from "./Tag"
import React from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "gatsby"
export interface EntryProps {
  name: string;
  contentRichText: string;
  link: string;
  tags: TagProps[];
  previewImages: [];
}

const Entry: React.FC<EntryProps> =
  ({ name, contentRichText, tags, children, link, previewImages }) => {
    console.log(previewImages);
    return (
      <motion.div className={"Card"} initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}>
        <div className={'LeftRight'}>
        <div>
        <Link to={link}><h2>{name}</h2></Link>
        {documentToReactComponents(JSON.parse(contentRichText))}
        {children}
        </div>
        <div className={'Horizontal'}>
          {previewImages?.map(({gatsbyImageData}) => 
           {return(        <div style={{height: '100%', width: `250px`}}>
            <GatsbyImage style={{width: '100%', height: '100%'}} image={gatsbyImageData} alt={name}/>
            </div>)}
          )}
        </div>
        </div>
      
        <div className={'Horizontal'}>
        {tags.map((tag: TagProps) => (<Tag {...tag} key={tag.name}/>))}
      </div>
      </motion.div>
    )
  }

export default Entry