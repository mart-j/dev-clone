import axios from 'axios';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../../store/user/actions';
import { CurrentUser } from '../../store/user/types';
import Button from '../button/Button';
import Form from '../form/Form';
import Input from '../input/Input';
import Label from '../label/Label';
import styles from './RegisterForm.module.scss';

const RegisterForm: FC = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const registerHandler = async () => {
    try {
      await axios.post('http://localhost:5000/users/register', loginDetails);
      const { email, password } = loginDetails;

      const { data }: { data: CurrentUser } = await axios.post(
        'http://localhost:5000/users/login',
        {
          email,
          password,
        },
      );

      dispatch(fetchUser(data));
      localStorage['x-auth-token'] = data.token;
      setLoginDetails({
        email: '',
        password: '',
        passwordCheck: '',
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
    <Form submitHandler={registerHandler}>
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
        <div className={styles.labelContentWrapper}>
          <Label htmlFor="passwordCheck" content="Verify passwod" />
          <Input
            changeHandler={(value) =>
              setLoginDetails({ ...loginDetails, passwordCheck: value })
            }
            value={loginDetails.passwordCheck}
            type="password"
            id="passwordCheck"
            required
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="submit" label="Register" />
        </div>
      </div>
    </Form>
  );
};

export default RegisterForm;
