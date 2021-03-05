import React from 'react';
import { Formik, Form } from "formik";

import BasicButton from '../BasicButton/BasicButton';
import TimerBack from '../TimerBack/TimerBack';

import s from './style.module.scss';

const TestCard = ({ question, options, type, onClickNext, addAnswer, time, totalNum, currentNum }) => {
  return (
    <div className={s.test_card}>
      <Formik
        initialValues={{
          question: question,
          answer: null,
        }}
        onSubmit={(formFields) => {
          addAnswer(formFields)
          onClickNext();
        }}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form className={s.form_wrapper}>
            <div className={s.form} role="group">
              <div className={s.question_wrapper}>
                <div className={s.top_wrapper}>
                  <p className={s.question} name="question">
                    {question}
                  </p>
                  <span className={s.current_num}>{`${currentNum}/${totalNum}`}</span>
                </div>
                <div className={s.label_group}>
                  {type === 0 ?
                    options.map((option) => (
                      <label key={option.id} className={s.label}>
                        <input className={s.input} type="radio" id={`choice${option.id}`}
                          name="answer" onChange={() => {
                            setFieldValue("answer", { "answer": option.value, "img": option.img })
                          }}
                        />
                        <span className={s.radio_fake} />
                        {option.img && <img src={option.img} htmlFor={`choice${option.id}`} alt="test_image" className={s.img} />}
                        {option.value && <span className={s.text} htmlFor={`choice${option.id}`}>{option.value}</span>}
                      </label>
                    )) : <textarea placeholder="Enter your answer" className={s.textarea} name='answer' onChange={(event) => {
                      setFieldValue("answer", { "answer": event.target.value })
                    }} />
                  }
                </div>
              </div>
              <div className={s.bottom_wrapper}>
                <TimerBack time={time} handleSubmit={handleSubmit} />
                <BasicButton
                  type="submit"
                  name="Next"
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TestCard;
