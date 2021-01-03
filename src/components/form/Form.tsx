import React, { FC, useRef } from 'react';
import styles from './Form.module.scss';

interface Props {
  submitHandler?: () => void;
  children: React.ReactNode;
}

const Form: FC<Props> = ({ submitHandler, children }) => {
  const form = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    form.current!.reset();
  };
  return (
    <form
    autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault();
        if (submitHandler) {
          submitHandler();
        }
        resetForm();
      }}
      ref={form}
      className={styles.form}
    >
      {children}
    </form>
  );
};

export default Form;
