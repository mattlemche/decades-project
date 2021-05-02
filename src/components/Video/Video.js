import React from 'react';
import { Link } from 'react-router-dom';

function Video() {
    return (
        <section className="section">
          <h3 className="heading-3">
              Watch Episode One
          </h3>
          <div className="i-frame"><iframe title='decades-ep-1' src='https://vimeo.com/showcase/8423191/embed' allowFullScreen frameBorder='0'></iframe></div>
          <p className="paragraph">
            This film would not have been possibble without the help of <Link to="/supporters" className="inline-link">these generous supporters</Link> 
          </p>

        </section>
    );
}

export default Video;