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
}

const Entry: React.FC<EntryProps> =
  ({ name, contentRichText, tags, children, link }) => {
    return (
      <motion.div className={"Card"} initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}}>
        <Link to={link}><h2>{name}</h2></Link>
        {documentToReactComponents(JSON.parse(contentRichText))}
        {children}
        <div className={'Horizontal'}>
        {tags.map((tag: TagProps) => (<Tag {...tag} key={tag.name}/>))}
      </div>
      </motion.div>
    )
  }

export default Entry