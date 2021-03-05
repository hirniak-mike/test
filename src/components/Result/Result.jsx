import React from 'react';

import BasicButton from '../BasicButton/BasicButton';

import s from './style.module.scss';

const Result = ({ answers, onClickTryAgain }) => {
  return (
    <div className={s.result}>
      <h3 className={s.title}>Your answers:</h3>
      {answers.map(({ question, answer }, key) => (
        <div key={key} className={s.result_item}>
          <p className={s.question}>{`${key + 1}) ${question}`}</p>
          {answer ?
            <p className={s.answer}>{answer.img &&
              <img src={answer.img} alt="answer_image" className={s.img} />}
              {answer.answer}
            </p> :
            <span className={s.fail}>No answer</span>}
        </div>
      ))}
      <div className={s.btn_wrapper}>
        <BasicButton
          name='Try again'
          type="button"
          onClick={onClickTryAgain}
        />
      </div>
    </div>
  )
}

export default Result;
