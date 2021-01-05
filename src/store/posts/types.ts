export const FETCH_POSTS = 'FETCH_POSTS';
export const LIKE_POST = 'LIKE_POST';

export interface FetchUser {
  type: typeof FETCH_POSTS;
  payload: Post[];
}

export interface LikePost {
  type: typeof LIKE_POST;
  id: string;
  userId: string;
}

export type AllActions = FetchUser | LikePost;

export type Post = {
  _id: string;
  tags: string[];
  title: string;
  body: string;
  image: string;
  userId: string;
  email: string;
  date: Date;
  likes: string[];
};
