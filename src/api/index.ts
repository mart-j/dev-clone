import axios from 'axios';

const url = 'https://dev-clone.herokuapp.com/';
const HEADERS = {
  headers: { 'x-auth-token': localStorage['x-auth-token'] },
};

export const fetchPosts = () => {
  return axios.get(`${url}posts/all`, HEADERS);
};

export const likePost = (id: string, token: string) => {
  return axios.patch(`${url}posts/like/${id}`, null, {
    headers: { 'x-auth-token': token },
  });
};
