import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  <p>You’re currently visiting a website powered by Gatsby, and there is a reason for that. Not long ago, we at mParticle decided to invest in improving the experience of our website. We wanted pages to load faster while adhering to the highest standards of accessibility. We wanted to put extensible tools in the hands of our developers to build and expand upon the site well into the future. We considered what we had, where we wanted to go, and the options we had for getting there. 

In the end, we decided to overhaul our site with Gatsby, and we’re glad we did. To learn more specifics about our particular use case with Gatsby, here's a post detailing our website overhaul. Here, we'll explore the framework itself––what it is, what it’s built on, and what differentiates it from other tools in the world of static web applications. </p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
