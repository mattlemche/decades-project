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

                <a href="mailto:mattlemche@gmail.com?subject=I'm%20interested%20in%20the%20Decades%20Project" className="footer__contact" target="_blank" rel="noreferrer">
                 <Email className="footer__social"/> mattlemche@gmail.com
                </a>
                

            </div>
            <div className="footer__credit">
                <a className="footer__link" href="https://design.mattlemche.com"  target="_blank" rel="noreferrer">
                    Website design and development by ML Designs
                </a>

            </div>

      </footer>
    );
}

export default Footer;