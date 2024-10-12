import React from 'react';

const TimerInput = ({ seconds, onChange }) => {
    return (
        <input
            type="number"
            value={seconds}
            onChange={onChange}
            placeholder="Введите секунды"
        />
    );
};

export default TimerInput;
