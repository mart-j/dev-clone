import React, { FC } from 'react';
import styles from './Input.module.scss';

interface Props {
  id?: string;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  value: string;
  changeHandler: (value: string) => void;
}

const Input: FC<Props> = ({
  id = '',
  type = 'text',
  required = false,
  value,
  changeHandler,
}) => {
  return (
    <input
      onChange={(e) => changeHandler(e.target.value)}
      value={value}
      required={required}
      id={id}
      type={type}
      className={styles.input}
    ></input>
  );
};

export default Input;
