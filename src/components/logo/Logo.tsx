import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo: FC = () => {
  const history = useHistory();
  return (
    <div onClick={() => history.push('/')} className={styles.logo}>
      MART
    </div>
  );
};

export default Logo;
