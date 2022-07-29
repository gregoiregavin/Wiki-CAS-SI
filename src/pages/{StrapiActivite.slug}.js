import * as React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from "../components/seo"

const Activite = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const activite = data.strapiActivite
  const html = activite.childStrapiActiviteDescriptionTextnode.childMarkdownRemark.html

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Activite' />
      <h1>{activite.titre}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Activite

export const pageQuery = graphql`
  query StrapiActivitePageQuery ($id: String){
    site {
      siteMetadata {
        title
      }
    }
    strapiActivite(id: {eq: $id}) {
      id
      slug
      titre
      childStrapiActiviteDescriptionTextnode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`