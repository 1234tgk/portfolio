import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link
                            activeClass='active'
                            to='home'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-scroll-link'
                        >
                            Home
                            </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            activeClass='active'
                            to='about'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-scroll-link'
                        >
                            About Me
                            </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            activeClass='active'
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-scroll-link'
                        >
                            Projects
                            </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            activeClass='active'
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='nav-scroll-link'
                        >
                            Contact Me
                            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
