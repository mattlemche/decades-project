import React from 'react';
import { Link } from 'react-router-dom';

function AltHeader() {
    return (
        <header className="header header--alt">
            <Link to='/'>
                <h1 className="heading-1">
                The Decades Project
                </h1>
            </Link>
            
            
        </header>
    );
}

export default AltHeader;