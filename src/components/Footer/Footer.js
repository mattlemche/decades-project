import React from 'react';
import { ReactComponent as Twitter } from '../../assets/twitter-brands.svg';
import { ReactComponent as Email } from '../../assets/email.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <h4 className="heading-4">
                Contact
                </h4>
                <a href="https://twitter.com/DecadesFilm" className="footer__contact" target="_blank" rel="noreferrer">
                 <Twitter className="footer__social"/> @decadesproject
                </a>

                <a href="mailto:mattlemche@gmail.com" className="footer__contact" target="_blank" rel="noreferrer">
                 <Email className="footer__social"/> info@decadesproject.com
                </a>
                

            </div>
            
      </footer>
    );
}

export default Footer;