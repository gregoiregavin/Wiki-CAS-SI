import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => (
    <footer className='footer'>
        <p>
            Dernière mise à jour: { new Date().getDate() }.{ new Date().getMonth()+1 }.{ new Date().getFullYear() }
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