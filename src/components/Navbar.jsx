import React, { useState, useEffect } from 'react'
import logo from '../../public/images/m.svg'
import '../css/Navbar.css'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <nav>
            <a href="/"><img className="nav--logo" src={logo} /></a>
            {(toggleMenu || screenWidth > 500) && (
                <ul className="navigation">
                    <li className="nav--items"><a href="/">Home</a></li>
                    {/* <li className="nav--items"><a href="/store">Store</a></li> */}
                    {/* <li className="nav--items"><a href="/rank">Rank</a></li> */}
                    {/* <li className="nav--items"><a href="/contact">Contact</a></li> */}
                    {/* <li className="nav--items"><a href="/cart">Cart</a></li> */}
                    {/* <li className="nav--items"><a href="/photos">Photos</a></li> */}
                </ul>
            )}

            <svg  
            className='mobile--menu' onClick={toggleNav}
            viewBox="0 0 100 80" width="20" height="20">
                <rect width="100" height="15"></rect>
                <rect y="35" width="300" height="15"></rect>
                <rect y="70" width="300" height="15"></rect>
            </svg>
        </nav>
    )
}