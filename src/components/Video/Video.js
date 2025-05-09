import React from 'react';
import { Link } from 'react-router-dom';

function Video() {
    return (
        <section id="episode-one" className="section">
          <h3 className="heading-3">
              Watch Episode One
          </h3>
          <p className="paragraph">
            This installment, Episode 1: The Rowan Tree, would not have been possible without the help of <Link to="/supporters" className="inline-link">these generous supporters</Link> 
          </p>
          <div className="video"><iframe src="https://player.vimeo.com/video/179073673" 
            width="640" 
            height="360" 
            frameborder="0"
            className="video__i-frame"
            title="Decades Epsidoe 1" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen>
          </iframe></div>
          
          

        </section>
    );
}

export default Video;