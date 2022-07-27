import * as React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from "../components/seo"

const Sequence = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Séquence' />
      <h1>Ma séquence</h1>
      <h2>omg ?</h2>
    </Layout>
  )
}

export default Sequence

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`