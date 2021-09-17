import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Button from './Button';
import FooterLogo from "../images/footer-logo.svg";

import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

function Footer() {
    return (
        <footer>
            <div className="social-wrapper">
                <div className="social">
                    <img className="footer-logo" src={FooterLogo} alt="logo"/>
                    <Link to="/" className="social-links">
                        <img src={facebook} alt="facebook icon" />               
                        <img src={youtube} alt="youtube icon" />                   
                        <img src={twitter} alt="twitter icon" />
                        <img src={pinterest} alt="pinterest icon" />
                        <img src={instagram} alt="instagram icon" />
                    </Link>
                </div>

                <div className="footer-link">
                <Link to="/" className="footer-links">
                About Us
                </Link>
                <Link to="/" className="footer-links">
                Contact
                </Link>
                <Link to="/" className="footer-links">
                Blog
                </Link>
                <Link to="/" className="footer-links">
                Careers
                </Link>
                <Link to="/" className="footer-links">
                Support
                </Link>
                <Link to="/" className="footer-links">
                Privacy Policy
                </Link>
            </div>
            </div>

            <div className="copyright">
                <Button buttonStyle="btn--primary">Request Invite</Button>
                <p>© Easybank. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
