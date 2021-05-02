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
        </header>
     
    );
}

export default MainHeader;