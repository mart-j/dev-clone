import React, { FC } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AuthOptins from '../authOptions/AuthOptions';
import Logo from '../logo/Logo';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Grid>
        <Row middle='xs'>
          <Col xs={6}>
            <Logo />
          </Col>
          <Col xs={6}>
            <AuthOptins />
          </Col>
        </Row>
      </Grid>
    </header>
  );
};

export default Header;
