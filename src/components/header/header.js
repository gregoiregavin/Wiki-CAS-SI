import * as React from 'react'
import { Link } from 'gatsby'
import { useEffect } from 'react'
import onScrollTop from './onScrollTop'
import logo from '../../images/bean-green.png'
import searchIcon from '../../images/search-icon.png'
import './header.css'

const Header = (title) => {

    useEffect(() => {
        onScrollTop()
    });

    return (
        <>
            <header className='global-header'>
                <img className='main-logo' src={logo} alt='a green bean' />
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
                <img className='search-icon' src={searchIcon} width='25' alt='search icon' />
            </header>
        </>
    )
}

export default Header