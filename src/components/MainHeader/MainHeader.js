import React from 'react';
import DecadesClock from '../DecadesClock/DecadesClock';

function MainHeader() {
    return (
        <header className="header">
            <h1 className="heading-1">
                The Decades Project
            </h1>
            <p className="heading-5">
                Time to next decade:
            </p>
            <DecadesClock />
            <div className="furniture furniture--3"></div>
            <a href="https://www.indiegogo.com/projects/decades-chapter-ii/x/492696#/" className="button button--white" target="_blank" rel="noreferrer">Click here to donate</a>
            {/* <div className="arrow">
                
                <a href="#about" className="arrow__glyph">
                    &#62;

                </a>
            </div> */}
            
        </header>
     
    );
}

export default MainHeader;