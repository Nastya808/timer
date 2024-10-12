import React from 'react';

const TimerControls = ({ onStart, onPause, onStop }) => {
    return (
        <div>
            <button onClick={onStart}>Старт</button>
            <button onClick={onPause}>Пауза</button>
            <button onClick={onStop}>Стоп</button>
        </div>
    );
};

export default TimerControls;
