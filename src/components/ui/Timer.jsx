import React, { useState, useEffect } from 'react';

const Timer = () => {
    const targetDate = new Date('2024-11-30T00:00:00'); // Set target date
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeRemaining = () => {
        const now = new Date();
        const timeDiff = targetDate - now;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            calculateTimeRemaining();
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="countdown-timer flex flex-col items-center justify-center h-4 md:h-32">
            <h1 className='font-bold text-3xl m-4'>Scroll to view more</h1>
            {/* <div>
                <div className='flex justify-center rounded-2xl text-4xl md:text-2xl lg:text-xl '>
                    <span className='mx-4'>{timeRemaining.days} <p>Days</p></span>
                    <span className='mx-4'>{timeRemaining.hours} <p>Hours</p> </span>
                    <span className='mx-4'>{timeRemaining.minutes} <p>Min</p> </span>
                    <span className='mx-4'>{timeRemaining.seconds} <p>Sec</p></span>
                </div>
            </div> */}
            
        </div>
    );
};

export default Timer;