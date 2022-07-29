import * as React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { useEffect } from 'react'
import logoGreen from '../../images/bean-green.png'
import searchIcon from '../../images/search-icon.png'
import './header.css'

const Header = (title) => {

    let root = document.documentElement
    let currentTheme = ''

    const purpleBean = 'bean-purple.png'
    let purpleBeanURL = ''

    const ThemeToggler = (nodes) => {

        nodes.map(function (elem) {

            if (elem.base === purpleBean) {
                purpleBeanURL = elem.publicURL
            }

            return purpleBeanURL
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

    useEffect(() => {
        let globalHeader = document.getElementById('global-header')
        let mainLogo = document.getElementById('main-logo')
        let mainHeading = document.getElementById('main-heading')
        let mainNav = document.getElementById('main-nav')
        let searchIcon = document.getElementById('search-icon')

        window.onscroll = function () {

            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                globalHeader.classList.add('scrolled')
                mainLogo.classList.add('scrolled')
                mainHeading.classList.add('scrolled')
                mainNav.classList.add('hidden')
                searchIcon.classList.add('scrolled')
            } else {
                globalHeader.classList.remove('scrolled')
                mainLogo.classList.remove('scrolled')
                mainHeading.classList.remove('scrolled')
                mainNav.classList.remove('hidden')
                searchIcon.classList.remove('scrolled')
            }
        }
    });

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
                    <div
                        role='button'
                        onClick={() => ThemeToggler(data.allFile.nodes)}
                        onKeyDown={ThemeToggler}
                        tabIndex='0'>
                        <img id='main-logo' src={logoGreen} alt='a green bean' />
                    </div>
                    <h1 id='main-heading'>
                        <Link to='/'>{title.title}</Link>
                    </h1>
                    <ul id='main-nav'>
                        <li>
                            <Link to='/explorer'>explorer</Link>
                        </li>
                        <li>
                            <Link to='/a-propos'>a propos</Link>
                        </li>
                    </ul>
                    <img id='search-icon' src={searchIcon} width='25' alt='search icon' />
                </header>
            )}
        />
    )
}

export default Header