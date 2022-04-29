import React from 'react';
import tattooOne from '../../assets/MCold.jpg';
import {ReactComponent as TattooOne} from '../../assets/tattoo.svg';

function About() {
    return (
        <section className="section">
          {/* <h3 className="heading-3">What is the Decades Project?</h3> */}
          <div id="about" className="section__content">
            <p className="section__paragraph section__paragraph--left">
              <span className="heading-3">What is the Decades Project?</span>
              <span className="feature">The Decades Project is a documentary series that explores long-lasting friendship and the creation of personal milestones, with episodes recurring every ten years.</span> In 2002, Chris Redman and Matt Lemche threw a dart at a map and agreed to meet up at that location 10 years in the future to reflect on their lives up until that point. They tattooed the pact onto their bodies to lock in their destiny. On May 3, 2012, the pair reunited near Akureyri, Iceland as agreed. They were accompanied (and filmed) by 4 long-time friends and companions who had been witness to the promise from its inception. Before returning home, they threw another dart at the map to see <a href="#next-location" className="inline-link">where they would travel 10 years on.</a>  The project continues to expand beyond the two friends every decade with the hope of reminding the world about the joy of enduring friendship and the power of commitment.

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