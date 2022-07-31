import * as React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from "../components/seo"

const APropos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title='A propos' />
      <p>
        Ce wiki est un une preuve de concept pour les moyens d'enseignement en Science Informatique pour le secondaire 1.
        Cette ressource est développée dans le cadre du
        {` `}
        <a href="https://www.epfl.ch/education/educational-initiatives/fr/le-projet-edunum-le-cas-si/cas-si/" target="_blank" rel="noreferrer">
          CAS pour l'enseignement de la Science Informatique en secondaire 1
        </a>
        {` `}
        (CAS SI) créé par le
        {` `}
        <a href="http://learn.epfl.ch/" target="_blank" rel="noreferrer">
          Centre LEARN
        </a>
        {` `}
        de
        {` `}
        <a href="https://www.epfl.ch/fr/" target="_blank" rel="noreferrer">
          l'École Polytechnique Fédérale de Lausanne
        </a>
        {` `}(EPFL) dans le cadre du projet EduNum du canton de Vaud en Suisse.
      </p>
      <p>
        Ce site propose des séquences pédagogiques constituées de différentes activités permettant d'apprendre les concepts fondamentaux de Science Informatique et développer des compétences en pensée informatique. Ces ressources sont mobilisées à la fois dans le cadre de la formation des enseignant·e·s (tout particulièrement en sein du CAS SI) et avec les élèves dans le cadre de la 34ème période du projet EduNum déployée au sein de 11 établissements pilotes.
      </p>
      <p>
        Les ressources disponibles proviennent de multiples Ressources Éducatives Libres (REL) qui ont été intégrées ou créées dans le cadre du pilote C3 du projet EduNum :
      </p>
      <ul>
        <li>
          le contenu de la section sur les concepts fondamentaux de SI est fortement issue du MOOC E-JNum coordonnée par Didier Roy qui synthétise de nombreuses autres REL
        </li>
        <li>
          les activités et séquences pédagogiques proviennent de l'équipe de formation du CAS SI et des retours d'expériences des enseignant·e·s de la première volée du CAS SI ainsi que de REL existantes ayant été adaptées au contexte du projet.
        </li>
        <li>
          finalement, les outils mobilisés dans les différents activités constituent un potentiel point d'entrée transversal.
        </li>
      </ul>
      <ul>
        <li>
          le contenu de la section sur les concepts fondamentaux de SI est fortement issue du MOOC E-JNum coordonnée par Didier Roy qui synthétise de nombreuses autres REL
        </li>
        <li>
          les activités et séquences pédagogiques proviennent de l'équipe de formation du CAS SI et des retours d'expériences des enseignant·e·s de la première volée du CAS SI ainsi que de REL existantes ayant été adaptées au contexte du projet.
        </li>
        <li>
          finalement, les outils mobilisés dans les différents activités constituent un potentiel point d'entrée transversal.
        </li>
      </ul>
      <ul>
        <li>
          le contenu de la section sur les concepts fondamentaux de SI est fortement issue du MOOC E-JNum coordonnée par Didier Roy qui synthétise de nombreuses autres REL
        </li>
        <li>
          les activités et séquences pédagogiques proviennent de l'équipe de formation du CAS SI et des retours d'expériences des enseignant·e·s de la première volée du CAS SI ainsi que de REL existantes ayant été adaptées au contexte du projet.
        </li>
        <li>
          finalement, les outils mobilisés dans les différents activités constituent un potentiel point d'entrée transversal.
        </li>
      </ul>
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