import React, { FC } from 'react';
import styles from './Label.module.scss';

interface Props {
  htmlFor: string;
  content: string;
}

const Label: FC<Props> = ({ htmlFor, content }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {content}
    </label>
  );
};

export default Label;
