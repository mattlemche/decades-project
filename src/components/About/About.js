import React from 'react';
import tattooOne from '../../assets/MCold.jpg';
import {ReactComponent as TattooOne} from '../../assets/tattoo.svg';

function About() {
    return (
        <section className="section">
          <h3 className="heading-3">What is the Decades Project?</h3>
          <div className="section__content">
            <p className="section__paragraph section__paragraph--left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>
            <div className="stacked stacked--left">
              <img src={tattooOne} 
              alt="Creators of the Deacdes Project in 2002 with bandage covering new tattoo."
              className="stacked__image stacked__image--portrait"/>
              <TattooOne className="stacked__svg"/>
            </div>
          
          </div>
          
        </section>
    );
}

export default About;