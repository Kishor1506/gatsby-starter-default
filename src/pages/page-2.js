import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  <p>Since Gatsby is a static site generator at its core, let’s explore this concept before diving into anything else. If you come across a plain HTML page that has been sitting on a server since the mid 1990s, you’ve found a static website. So what, you ask, is particularly innovative about something that can generate static content on the web? </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
