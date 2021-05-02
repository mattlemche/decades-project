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
                    <span className="feature">The Decades Project–Episode Two: Bukit Lambir, revisits the lives of Chris Redman and Matt Lemche 10 years later,</span> as they travel to meet on May 3, 2022 in Malaysian Borneo. This installment investigates what it means to have a lifelong friend, and what challenges we are willing to overcome in order to maintain those sustained connections. Through interviews with several other longtime friends both in North America, and in Malaysia, Chris and Matt ask the question, “why do we keep the friends we keep?”. Spanning over 20 years, this epic project looks at the unique bonds that hold us together across time and space.
                </p>
                    
            </div>
            
        </section>
    );
}

export default NextLocation;