import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"
import Isotope from 'isotope-layout/js/isotope';
import { useEffect } from 'react';

const isBrowser = () => typeof window !== "undefined"

const Explorer = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Explorer' />
      <h1>yo</h1>
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
    allStrapiActivite {
      edges {
        node {
          id
          slug
          titre
        }
      }
    }
    allStrapiConcept {
      edges {
        node {
          id
          slug
          titre
        }
      }
    }
    allStrapiSequence {
      edges {
        node {
          id
          slug
          titre
        }
      }
    }
  }
`