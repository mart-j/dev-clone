import { Dispatch } from 'redux';
import * as api from '../../api';
import { Post, FETCH_POSTS, LIKE_POST } from './types';

export const fetchPostsAction = async (dispatch: Dispatch) => {
  const { data }: { data: Post[] } = await api.fetchPosts();

  return dispatch({ type: FETCH_POSTS, payload: data });
};

export const likePostAction = async (
  dispatch: Dispatch,
  id: string,
  userId: string,
  token: string,
) => {
  await api.likePost(id, token);

  return dispatch({ type: LIKE_POST, id, userId });
};
