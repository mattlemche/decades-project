import React from 'react';
import { Link } from 'react-router-dom';

function AltHeader() {
    return (
        <header className="header header--alt">
            <div className="header__content">
                <Link to='/' className="inline-link">
                    <h1 className="heading-1 heading-1--alt">
                    The Decades Project
                    </h1>
                </Link>
                <p className="header__subtitle">
                    The incredible supporters of Episode One: The Rowan Tree
                </p>
            </div>
            
            
            
        </header>
    );
}

export default AltHeader;