import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => (
    <footer className='footer'>
        <p>
            © { new Date().getFullYear() } centre <a href='https://learn.epfl.ch/' target='_blank' rel='noreferrer'>LEARN</a> pour les sciences de l'apprentissage
        </p>
        <a href='https://github.com/gregoiregavin/Wiki-CAS-SI' target='_blank' rel='noreferrer' style={{marginLeft: 'auto'}}>
            <StaticImage
                src="../images/GitHub-Mark-120px-plus.png"
                alt="GitHub"
                placeholder="blurred"
                layout="fixed"
                width={30}
            />
        </a>
    </footer>
)

export default Footer