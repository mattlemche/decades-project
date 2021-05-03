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
          <div className="video"><iframe title='decades-ep-1' className="video__i-frame" src='https://vimeo.com/showcase/8423191/embed' allowFullScreen frameBorder='0'></iframe></div>
          

        </section>
    );
}

export default Video;