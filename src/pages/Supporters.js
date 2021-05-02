import React from 'react';
import AltHeader from '../components/AltHeader/AltHeader';
import SupporterList from '../components/SupporterList/SupporterList';

function supporters() {
    return (
        <>
           <AltHeader /> 
            <main className="main">
                <SupporterList />
            </main>
        </>
    );
}

export default supporters;