import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => (
    <footer className='footer'>
        © {new Date().getFullYear()}, construit avec
        {` `}
        <a href='https://www.gatsbyjs.com'>Gatsby</a> et
        {` `}
        <a href='https://strapi.io/'>Strapi</a>
        <a href='/'>
            <StaticImage
                src="../images/GitHub-Mark-120px-plus.png"
                alt="GitHub"
                placeholder="blurred"
                layout="fixed"
                width={50}
            />
        </a>
    </footer>
)

export default Footer