import React from 'react';
import './DecadesClock.scss';
import {useState, useEffect} from 'react';

export default function DecadesClock() {

    const calculateTimeLeft = () => {
        // let year = new Date().getFullYear();
        
        const difference = +new Date(`05/03/2022`) - +new Date();
        
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;

    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
      });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, i) => {

    timerComponents.push(
        <p key={i} className="clock__element">
            <span className="clock__time-left">
            {timeLeft[interval]}
            </span>
            <span className="clock__interval">
            {interval.toUpperCase()}
            </span>
        </p>
    );
    });    
    
    // console.log("Clock is running", calculateTimeLeft());

    return (
        
        <div className="clock">
            {
                timerComponents.length ?
                timerComponents :
                    <span className="true">
                        Today is the day!
                    </span> 
            }
        </div>
            
       
    );
};

;