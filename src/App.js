import React, { useState } from 'react';

import TestCard from './components/TestCard/TestCard';
import Result from './components/Result/Result';
import db from './res/db.json';

import s from './App.module.scss';

function App() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinishTest, setIsFinishTest] = useState(false);

  const addAnswer = (obj) => {
    setAnswers([
      ...answers,
      obj
    ]);
  };

  const onClickNext = () => {
    if (index < db.length - 1) {
      setIndex(prev => ++prev);
    } else {
      setIsFinishTest(true);
    }
  }

  const onClickTryAgain = () => {
    setIsFinishTest(false);
    setAnswers([]);
    setIndex(0);
  }

  return (
    <div className={s.app}>
      {!isFinishTest ?
        <div className={s.test_wrapper}>
          {[db[index]].map((item) => (
            <TestCard
              key={item.id}
              question={item.question}
              options={item.options}
              type={item.type}
              onClickNext={onClickNext}
              addAnswer={addAnswer}
              time={item.time}
              totalNum={db.length}
              currentNum={index + 1}
            />
          ))}
        </div> :
        <div className={s.result}>
          <Result answers={answers} onClickTryAgain={onClickTryAgain} />
        </div>
      }
    </div>
  );
}

export default App;
