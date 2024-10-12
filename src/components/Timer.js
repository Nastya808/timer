import React, { useState, useEffect, useRef } from 'react';
import TimerInput from './TimerInput';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive && !isPaused && seconds > 0) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        return 0; 
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isActive, isPaused, seconds]);

    const startTimer = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const stopTimer = () => {
        setIsActive(false);
        setSeconds(0);
        setIsPaused(false);
        clearInterval(intervalRef.current);
    };

    const pauseTimer = () => {
        setIsPaused(true);
        clearInterval(intervalRef.current);
    };

    const handleChange = (e) => {
        setSeconds(Number(e.target.value));
    };

    return (
        <div>
            <h1>Таймер</h1>
            <TimerInput seconds={seconds} onChange={handleChange} />
            <TimerControls onStart={startTimer} onPause={pauseTimer} onStop={stopTimer} />
            <TimerDisplay seconds={seconds} />
        </div>
    );
};

export default Timer;
