import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"
import Isotope from 'isotope-layout/js/isotope';
import { useEffect } from 'react';

const Explorer = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  useEffect(() => {

    // Isotope initialisation
    let iso = new Isotope('.grid', {
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    })

    // Filtering functions
    let filterFns = {
      numberGreaterThan50: function (itemElem) {
        let number = itemElem.querySelector('.number').textContent
        return parseInt(number, 10) > 50
      }
    }

    // Button click binding
    let filters = document.querySelector('.filters');

    filters.addEventListener('click', (e) => {

      // Bind to filtering function
      let filterValue = e.target.getAttribute('data-filter')
      filterValue = filterFns[filterValue] || filterValue

      // Filtering
      iso.arrange({ filter: filterValue })
    })

  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='Explorer' />
      <h1>Explorer</h1>
      <div className="button-group filters">
        <button className="button" data-filter="*">show all</button>
        <button className="button" data-filter="numberGreaterThan50">number {`> 50`}</button>
      </div>
      <div className='grid' style={{ border: '1px solid #333' }}>
        <div className='element-item'>
          <h3 className='name'>Objet 1</h3>
          <p className='type'>Activité</p>
          <p className="number">80</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 2</h3>
          <p className='type'>Séquence</p>
          <p className="number">30</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 3</h3>
          <p className='type'>Concept</p>
          <p className="number">160</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 4</h3>
          <p className='type'>Activité</p>
          <p className="number">43</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 5</h3>
          <p className='type'>Activité</p>
          <p className="number">99</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 6</h3>
          <p className='type'>Concept</p>
          <p className="number">22</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 7</h3>
          <p className='type'>Activité</p>
          <p className="number">31</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 8</h3>
          <p className='type'>Séquence</p>
          <p className="number">51</p>
        </div>
        <div className='element-item'>
          <h3 className="name">Objet 9</h3>
          <p className='type'>Concept</p>
          <p className="number">102</p>
        </div>
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