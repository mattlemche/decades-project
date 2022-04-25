import React from 'react';

function MainHeader() {
    return (
        <header className="tempheader">
            <p className="heading-5">2002–2012–2022</p>
           <h1 className="heading-1 heading-1--temp">
               {/*to include after May 3
               <h1 className="heading-1">
                   Decades Project
               </h1>
               */}
               12:00 PM Sharp | May <span className="type-correct">
                   3<span className="superscript">rd</span>
                   </span>, 2022
           </h1>
        </header>
     
    );
}

export default MainHeader;