import * as React from 'react'
import { Link } from 'gatsby'
import { useEffect } from 'react'
import logo from '../images/bean-green.png'

const Header = (title) => {

    useEffect(() => {
        let globalHeader = document.getElementsByClassName('global-header')[0]
        let mainHeading = document.getElementsByClassName('main-heading')[0]
        let mainNav = document.getElementsByClassName('main-nav')[0]
        let mainLogo = document.getElementsByClassName('main-logo')[0]

        window.onscroll = function () {

            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                globalHeader.classList.add('scrolled')
                mainHeading.classList.add('scrolled')
                mainLogo.classList.add('scrolled')
                mainNav.classList.add('scrolled')
            } else {
                globalHeader.classList.remove('scrolled')
                mainHeading.classList.remove('scrolled')
                mainLogo.classList.remove('scrolled')
                mainNav.classList.remove('scrolled')
            }
        }
    });

    return (
        <>
            <header className='global-header'>
                <div>
                    <img className='main-logo' src={logo} />
                </div>
                <h1 className='main-heading'>
                    <Link to='/'>{title.title}</Link>
                </h1>
                <ul className='main-nav'>
                    <li>
                        <Link to='/explorer'>explorer</Link>
                    </li>
                    <li>
                        <Link to='/a-propos'>a propos</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header