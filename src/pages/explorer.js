import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"
import Isotope from 'isotope-layout/js/isotope';
import { useEffect } from 'react';

const Explorer = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const allActivites = data.allStrapiActivite.edges
  const allConcepts = data.allStrapiConcept.edges
  const allSequences = data.allStrapiSequence.edges

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
      <div className='grid' style={{ border: '1px solid #333' }}>
        {
          allActivites.map(activite => (
            <div className='element-item' key={activite.node.id}>
              <h3 className='name'>{activite.node.Titre}</h3>
              <p className='type'>Activité</p>
            </div>
          ))
        }
        {
          allConcepts.map(concept => (
            <div className='element-item' key={concept.node.id}>
              <h3 className='name'>{concept.node.Titre}</h3>
              <p className='type'>Concept</p>
            </div>
          ))
        }
        {
          allSequences.map(sequence => (
            <div className='element-item' key={sequence.node.id}>
              <h3 className='name'>{sequence.node.Titre}</h3>
              <p className='type'>Séquence</p>
            </div>
          ))
        }
        <div className='element-item'>
          <h3 className='name'>Objet 1</h3>
          <p className='type'>Activité</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 2</h3>
          <p className='type'>Séquence</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 3</h3>
          <p className='type'>Concept</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 4</h3>
          <p className='type'>Activité</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 5</h3>
          <p className='type'>Activité</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 6</h3>
          <p className='type'>Concept</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 7</h3>
          <p className='type'>Activité</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 8</h3>
          <p className='type'>Séquence</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 9</h3>
          <p className='type'>Concept</p>
        </div>
      </div>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Explorer' />
      <h1>Explorer</h1>
      <div className='button-group filters'>
        <button className='button' data-filter='*'>show all</button>
        <button className='button' data-filter='showActivities'>Activités</button>
        <button className='button' data-filter='showConcepts'>Concepts</button>
        <button className='button' data-filter='showSequences'>Séquences</button>
      </div>
      <GridConstruction activite={allActivites} concepts={allConcepts} />
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
          Titre
        }
      }
    }
    allStrapiConcept {
      edges {
        node {
          id
          Titre
        }
      }
    }
    allStrapiSequence {
      edges {
        node {
          id
          Titre
        }
      }
    }
  }
`