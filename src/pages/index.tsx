import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../utility/seo"
import { motion, useViewportScroll } from "framer-motion"


const IndexPage: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const variants = {
    hidden: { opacity: 0, scale: 0.1, },
    visible: { opacity: 1, scale: 1 },
  }
  

return(  
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/mascot.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <h1>Hello all</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      This boilerplate differs from the default in a number of ways:
    </p>
    <ul>
      <li>Fully TypeScript (as much as possible)</li>
      <li>SCSS from the start</li>
      <li>Dark theme via SCSS variables</li>
      <li>Automatic color palettes</li>
      <li>Google Analytics & GitHub Pages plugins builtin</li>
    </ul>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link className={'Magic'} to="/about-styling/">About Styling</Link>
    </p>
  </Layout>
);
}

export default IndexPage
