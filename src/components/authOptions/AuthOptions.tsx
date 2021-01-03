import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store';
import Button from '../button/Button';
import styles from './AuthOptions.module.scss';
import { initialStore as initialUser } from '../../store/user/reducer';
import { fetchUser } from '../../store/user/actions';

const AuthOptins: FC = () => {
  const userToken = useSelector((store: RootState) => store.user.token);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(fetchUser(initialUser));
    localStorage['x-auth-token'] = '';
    history.push('/login');
  };
  return (
    <div className={styles.authOptions}>
      {userToken ? (
        <Button clickHandler={logoutHandler} label="Sign out" />
      ) : (
        <>
          <div className={styles.buttonWrapper}>
            <Button
              clickHandler={() => history.push('/login')}
              priority="buttonSecondary"
              label="Sign in"
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              clickHandler={() => history.push('/register')}
              label="Create account"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AuthOptins;
