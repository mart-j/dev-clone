import { Dispatch } from 'redux';
// import * as api from '../../api';
import { CurrentUser, FETCH_USER } from './types';

export const fetchUser = (currentUser: CurrentUser) => {
  return {
    type: FETCH_USER,
    payload: currentUser,
  };
};
