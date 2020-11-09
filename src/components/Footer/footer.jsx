import React from 'react';
// images
import githubImg from '../../img/github-white.png';
import instagramImg from '../../img/instagram-white.png';
import twitterImg from '../../img/twitter-white.png';
import linkedinImg from '../../img/linkedin-white.png';

import './style.css';

const Footer = () => {
    return (
        <div id="footer">
            <div id="copyright">
                &copy; {new Date().getFullYear()} Carlos Martínez
            </div>
            <div className="footer-social">
                <a href="https://github.com/carlosEdua" target="_blank" rel="noopener noreferrer">
                    <img src={githubImg} alt="carlos martinez github"/>
                </a>
                <a href="https://www.instagram.com/coxato/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramImg} alt="carlos martinez instagram"/>
                </a>
                <a href="https://twitter.com/CarlosCoxato" target="_blank" rel="noopener noreferrer">
                    <img src={twitterImg} alt="carlos martinez twitter"/>
                </a>
                <a href="https://www.linkedin.com/in/carlos-eduardo-mart%C3%ADnez/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="carlos martinez linkedin"/>
                </a>
            </div>
        </div>
    );
}
 
export default Footer;