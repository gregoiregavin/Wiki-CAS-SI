import * as React from "react"
import { Link } from 'gatsby'
import { useEffect } from 'react';

const Header = (title) => {

    useEffect(() => {
        let mainHeading = document.getElementsByClassName('main-heading')[0]

        window.onscroll = function () {
            document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? 
                mainHeading.classList.add('scrolled') : 
                mainHeading.classList.remove('scrolled')
        }
    });

    return (
        <header className="global-header">
            <h1 className="main-heading">
                <Link to="/">{title.title}</Link>
            </h1>
        </header>
    )
}

export default Header