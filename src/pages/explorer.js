import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"

const Explorer = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    
    return (
        <Layout location={location} title={siteTitle}>
            <Seo title = 'Explorer' />
            <h1>Explorer</h1>
        </Layout>
    )
}

export default Explorer

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`