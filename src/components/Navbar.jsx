import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import Logo from "../images/logo.svg";
import Times from '../images/icon-close.svg';
import Hamburger from "../images/icon-hamburger.svg";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [ button, setButton ] = useState(true);

    const handleClick = ()=>{
        setClick(!click)
    }
    const closeMobileMenu =()=>{
        setClick(false)
    }
    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };
    window.addEventListener('resize', showButton);
    
    useEffect(()=>{
        showButton();
    },[]);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo " onClick={closeMobileMenu}>
                    <img src={Logo} alt="logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <img className="" src={click ? Times : Hamburger} alt="" />
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Blog" className="nav-links" onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Careers" className="nav-links" onClick={closeMobileMenu}>
                                Careers
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--primary">Request Invite</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
