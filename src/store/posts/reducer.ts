/* eslint-disable no-underscore-dangle */
import { AllActions, Post, FETCH_POSTS, LIKE_POST } from './types';

export const initialStore: Post[] = [];

export const postReducer = (state = initialStore, action: AllActions) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return action.payload;
    }
    case LIKE_POST: {
      const newState = state.map((post) => {
        if (post._id === action.id && post.likes.includes(action.userId)) {
          const newpost = {
            ...post,
            likes: post.likes.filter((id) => {
              return id !== action.userId;
            }),
          };
          return newpost;
        }
        if (post._id === action.id && !post.likes.includes(action.userId)) {
          const newPost = { ...post, likes: [...post.likes, action.userId] };
          return newPost;
        }

        return post;
      });
      return newState;
    }

    default:
      return state;
  }
};
