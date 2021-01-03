import axios from 'axios';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../button/Button';
import Form from '../form/Form';
import Input from '../input/Input';
import Label from '../label/Label';
import styles from './LoginForm.module.scss';
import { fetchUser } from '../../store/user/actions';
import { CurrentUser } from '../../store/user/types';

const LoginForm: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const loginHandler = async () => {
    try {
      const { data }: { data: CurrentUser } = await axios.post(
        'http://localhost:5000/users/login',
        loginDetails,
      );

      dispatch(fetchUser(data));
      localStorage['x-auth-token'] = data.token;
      setLoginDetails({
        email: '',
        password: '',
      });

      history.push('/');
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 4000);
    }
  };

  return (
    <Form submitHandler={loginHandler}>
      <div className={styles.formContentWrapper}>
        <h1>Welcome to Community</h1>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        <div className={styles.labelContentWrapper}>
          <Label htmlFor="email" content="Email" />
          <Input
            changeHandler={(value) =>
              setLoginDetails({ ...loginDetails, email: value })
            }
            value={loginDetails.email}
            type="email"
            id="email"
            required
          />
        </div>

        <div className={styles.labelContentWrapper}>
          <Label htmlFor="password" content="Password" />
          <Input
            changeHandler={(value) =>
              setLoginDetails({ ...loginDetails, password: value })
            }
            value={loginDetails.password}
            type="password"
            id="password"
            required
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="submit" label="Sign in" />
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
