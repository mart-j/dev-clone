import React, { FC } from 'react';
import AuthOptins from '../authOptions/AuthOptions';
import Logo from '../logo/Logo';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <AuthOptins />
    </header>
  );
};

export default Header;
