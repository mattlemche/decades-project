import React from 'react';
import AltHeader from '../components/AltHeader/AltHeader';
import SupporterList from '../components/SupporterList/SupporterList';
import Footer from '../components/Footer/Footer';

function supporters() {
    return (
        <>
           <AltHeader /> 
            <main className="main">
                <SupporterList />
            </main>
            <Footer/>
        </>
    );
}

export default supporters;