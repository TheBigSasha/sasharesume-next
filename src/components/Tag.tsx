import React from "react"
import { motion } from "framer-motion"

export interface TagProps {
  name: string;
  tooltip?: string;
  category: "Web Frontend" | "Embedded" | "Hardware" | "Web Backend" | "Other";
  iconID: string;
}

const Tag: React.FC<TagProps> = ({ name, tooltip, category, iconID }) => {
  return (
    <motion.div className={"TagBubble"}
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                whileHover={{ scale: 1.4, rotate: (Math.random() - 0.5) * 15, translateY: -5 }}
                exit={{ scale: 0 }}>
      <p>{name}</p>
    </motion.div>
  )
}

export default Tag