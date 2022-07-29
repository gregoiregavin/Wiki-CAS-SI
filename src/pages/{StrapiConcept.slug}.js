import * as React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from "../components/seo"

const Concept = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const concept = data.strapiConcept
  const html = concept.childStrapiConceptDescriptionTextnode.childMarkdownRemark.html

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Activite' />
      <h1>{concept.titre}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Concept

export const pageQuery = graphql`
query StrapiConceptPageQuery ($id: String){
  site {
    siteMetadata {
      title
    }
  }
  strapiConcept(id: {eq: $id}) {
    id
    slug
    titre
    childStrapiConceptDescriptionTextnode {
      childMarkdownRemark {
        html
      }
    }
  }
}
`