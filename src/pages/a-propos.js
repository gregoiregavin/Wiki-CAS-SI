import * as React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from "../components/seo"

const APropos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='A propos' />
      <h1>A propos</h1>
      <p>Projet open source, philosophie, contact, etc.</p>
    </Layout>

  )
}

export default APropos

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`