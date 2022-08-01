import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { useEffect } from 'react'
import logoGreen from '../../images/bean-green.png'
import './header.css'

const Header = (title) => {

    let currentTheme = ''

    const purpleBean = 'bean-purple.png'
    let purpleBeanURL = ''

    const ThemeToggler = (nodes) => {

        let root = document.documentElement

        nodes.map(function (elem) {

            if (elem.base === purpleBean) {
                purpleBeanURL = elem.publicURL
            }
        })

        let logo = document.getElementById('main-logo')

        if (currentTheme === '') {
            root.classList.toggle('purple')
            logo.setAttribute('src', purpleBeanURL)
            currentTheme = 'purple'
        } else {
            root.classList.toggle('purple')
            logo.setAttribute('src', '/static/bean-green-edecc346d06908e8231864d196817b17.png')
            currentTheme = ''
        }

    }

    return (
        <StaticQuery
            query={graphql`
                query AllFiles {
                    allFile {
                        nodes {
                          base
                          publicURL
                        }
                    }
                }
            `}
            render={data => (
                <header id='global-header'>
                    <div role='button' onClick={() => ThemeToggler(data.allFile.nodes)}>
                        <img id='main-logo' src={logoGreen} alt='a green bean' />
                    </div>
                    <h1 id='main-heading'>
                        <Link to='/'>{title.title}</Link>
                    </h1>
                    <div className='tagline-wrapper'>
                        <p className='tagline'>CAS pour l'enseignement de la SI en secondaire 1</p>
                    </div>
                    <ul id='main-nav'>
                        <li>
                            <Link to='/a-propos'>a propos</Link>
                        </li>
                    </ul>
                </header>
            )}
        />
    )
}

export default Header