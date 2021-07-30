import * as React from "react"
import { Link } from "gatsby"
import { motion, useTransform, useViewportScroll } from "framer-motion"

export interface HeaderProps{
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.1, translateY: -100, marginBottom: '-30px' },
    visible: { opacity: 1, scale: 1, translateY: 0, marginBottom: '15px' },
  }
  const { scrollYProgress } = useViewportScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["linear-gradient(90deg, rgba(0, 255, 200,0.7) 0%,rgba(255, 0, 55,0.7) 0%)",
    "linear-gradient(90deg, rgba(0, 255, 200,0.7) 0%, rgba(255, 0, 55,0.7) 100%)",
    "linear-gradient(90deg, rgba(0, 255, 200,0.7) 100%, rgba(255, 0, 55,0.7) 100%)"]
  )

  return(
    <motion.div
    className={'Header'}
    initial="hidden"
    animate={"visible"}
    exit="hidden"
    variants={variants}
    style={{ background }}
    
>
<header
  >

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
          className={'BaseColor'}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    </header>
    </motion.div>
 )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
