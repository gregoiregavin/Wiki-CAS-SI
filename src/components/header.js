import * as React from 'react'
import { Link } from 'gatsby'
import { useEffect } from 'react';

const Header = (title) => {

    useEffect(() => {
        let globalHeader = document.getElementsByClassName('global-header')[0]
        let mainHeading = document.getElementsByClassName('main-heading')[0]
        let mainNav = document.getElementsByClassName('main-nav')[0]

        window.onscroll = function () {

            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                globalHeader.classList.add('scrolled')
                mainHeading.classList.add('scrolled')
                mainNav.classList.add('hidden')
            } else {
                globalHeader.classList.remove('scrolled')
                mainHeading.classList.remove('scrolled')
                mainNav.classList.remove('hidden')
            }
        }
    });

    return (
        <>
            <header className='global-header'>
                <h1 className='main-heading'>
                    <Link to='/'>{title.title}</Link>
                </h1>
                <ul className='main-nav'>
                    <li>
                        <Link to=''>explorer</Link>
                    </li>
                    <li>
                        <Link to=''>how to</Link>
                    </li>
                    <li>
                        <Link to=''>a propos</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header