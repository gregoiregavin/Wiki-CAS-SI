import * as React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from "../components/seo"

const Activite = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Activite' />
      <h1>Mon activité</h1>
      <h2>omg ?</h2>
    </Layout>
  )
}

export default Activite

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`