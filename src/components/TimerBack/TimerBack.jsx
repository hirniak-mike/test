import React from 'react';
import Timer from "react-compound-timer";

import s from './style.module.scss';

const TimerBack = ({ time, handleSubmit }) => {
  return (
    <Timer
      initialTime={time}
      direction='backward'
      checkpoints={[
        {
          time: 0,
          callback: () => handleSubmit(),
        },
      ]}
    >
      <div className={s.timer}>
        <Timer.Minutes /> min &nbsp;
        <Timer.Seconds /> sec &nbsp;
      </div>
    </Timer>
  )
}

export default TimerBack;
