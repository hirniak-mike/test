import React from 'react';

import s from './style.module.scss';

const BasicButton = ({ type, onClick, name }) => {
  return (
    <button className={s.basis} type={type} onClick={onClick}>
      {name}
    </button>
  )
}

export default BasicButton;
