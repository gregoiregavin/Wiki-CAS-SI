import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"
import Isotope from 'isotope-layout/js/isotope';
import { useEffect } from 'react';

const Explorer = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`

  const GridConstruction = () => {

    useEffect(() => {

      // Isotope initialisation
      let iso = new Isotope('.grid', {
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      })

      // Filtering functions
      let filters = {
        showActivities: function (itemElem) {
          let type = itemElem.querySelector('.type').textContent
          return type.match(/Activité/)
        },
        showConcepts: function (itemElem) {
          let type = itemElem.querySelector('.type').textContent
          return type.match(/Concept/)
        },
        showSequences: function (itemElem) {
          let type = itemElem.querySelector('.type').textContent
          return type.match(/Séquence/)
        }
      }

      // Button click binding
      let filtersBlock = document.querySelector('.filters');

      filtersBlock.addEventListener('click', (e) => {

        // Bind to filtering function
        let filterValue = e.target.getAttribute('data-filter')
        filterValue = filters[filterValue] || filterValue

        // Filtering
        iso.arrange({ filter: filterValue })
      })

    })

    return (
      <div className='grid' style={{ border: '1px solid #333', minHeight: '531.251px' }}>
          <h1>TEST</h1>
      </div>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Explorer' />
      <div className='button-group filters'>
        <button className='button' data-filter='*'>Tout montrer</button>
        <button className='button' data-filter='showActivities'>Activités</button>
        <button className='button' data-filter='showConcepts'>Concepts</button>
        <button className='button' data-filter='showSequences'>Séquences</button>
      </div>
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