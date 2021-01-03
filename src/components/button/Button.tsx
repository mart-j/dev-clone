import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  label?: string;
  type?: 'button' | 'submit';
  clickHandler?: () => void;
  priority?: 'button' | 'buttonSecondary';
}

const Button: FC<Props> = ({
  label = 'Submit',
  type = 'button',
  priority = 'button',
  clickHandler,
}) => {
  return (
    <button className={styles[priority]} onClick={clickHandler} type={type}>
      {label}
    </button>
  );
};

export default Button;
