/* eslint-disable no-underscore-dangle */
import { AllActions, CurrentUser, FETCH_USER } from './types';

export const initialStore: CurrentUser  = {
  token: '',
  user: { email: '', _id: '' },
};

export const userReducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case FETCH_USER: {
      return action.payload;
    }

    default:
      return state;
  }
};
