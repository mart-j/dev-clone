export const FETCH_USER = 'FETCH_USER';

export interface FetchUser {
  type: typeof FETCH_USER;
  payload: CurrentUser;
}

export type AllActions = FetchUser;

export type CurrentUser = {
  token: string;
  user: {
    _id: string;
    email: string;
  };
};
