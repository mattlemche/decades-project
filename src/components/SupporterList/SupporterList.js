import React from 'react';
import { decadesSupporters } from '../../data';

function SupporterList() {
    return (
        <section className="section">
            {
                decadesSupporters.map((supporter, i) => {
                    return (
                        <span key={i} className="supporter">
                            {supporter.toLocaleLowerCase()}
                        </span>
                    )
                })
            }
        </section>
    );
}

export default SupporterList;