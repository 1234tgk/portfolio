import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function StyledLink({children, to}) {
    return (
        <Link
            activeClass='active'
            to={to}
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link'
        >
            {children}
        </Link>
    );
}

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <StyledLink to='home'>
                            Home
                        </StyledLink>
                    </li>
                    <li className='nav-item'>
                        <StyledLink to='about'>
                            About Me
                        </StyledLink>
                    </li>
                    <li className='nav-item'>
                    <StyledLink to='projects'>
                            Projects
                        </StyledLink>
                    </li>
                    <li className='nav-item'>
                    <StyledLink to='contact'>
                            Contact Me
                        </StyledLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
