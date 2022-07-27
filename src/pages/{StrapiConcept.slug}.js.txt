import * as React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from "../components/seo"

const Concept = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Concept' />
      <h1>Mon concept</h1>
      <h2>omg ?</h2>
    </Layout>
  )
}

export default Concept

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`