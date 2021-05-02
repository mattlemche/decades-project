import React from 'react';
import bukitLambir from '../../assets/ej-yao-IAZ__Cm1psk-unsplash-2.jpg';
import { ReactComponent as TattooTwo } from '../../assets/tattoo-2022.svg'; 

function NextLocation() {
    return (
        <section className="section">
            <h3 className="heading-3">
            Where to Next?
            </h3>
            <div className="section__content">
                <div className="stacked stacked--right">
                        <img src={bukitLambir} alt="View of mountains in Malaysian Borneo" className="stacked__image stacked__image--landscape"/>
                        <TattooTwo className="stacked__svg stacked__svg--landscape"/>

                </div>
                <p className="section__paragraph section__paragraph--right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                    
            </div>
            
        </section>
    );
}

export default NextLocation;