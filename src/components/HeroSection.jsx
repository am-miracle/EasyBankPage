import React from 'react';
import Button from './Button';
import './HeroSection.css';
import Mockups from '../images/image-mockups.png';

function HeroSection() {
    return (
        <div className="hero-wrapper">
            <div className="hero-section">
                <div className="hero-img-holder">
                    <img className="mockup-img" src={Mockups} alt="easybank"></img>
                </div>
                <div className="hero-content">
                    <h1>Next generation digital banking</h1>
                    <p> Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button buttonStyle="btn--primary">Request Invite</Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
