/* eslint-disable no-underscore-dangle */
import moment from 'moment';
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RootState } from '../../store';
import styles from './PostList.module.scss';
import { likePostAction } from '../../store/posts/actions';

const PostList: FC = () => {
  const { posts, userID, token } = useSelector((store: RootState) => {
    return {
      posts: store.posts.sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      }),
      userID: store.user.user._id,
      token: store.user.token,
    };
  });
  const dispatch = useDispatch();
  const likeHandler = (id: string) => {
    if (userID) {
      likePostAction(dispatch, id, userID, token);
    }
  };

  return (
    <div>
      {posts.map((post, i) => {
        return (
          <div key={post._id} className={styles.post}>
            <div className={styles.author}>{post.email}</div>
            <div className={styles.date}>
              {moment(post.date).format('MMM Do YY')}
            </div>

            <h1>{post.title}</h1>
            <div className={styles.tagWrapper}>
              {post.tags.map((tag, j) => {
                return (
                  <div className={styles.tag} key={`${j}`}>{`#${tag}`}</div>
                );
              })}
            </div>
            <button
              className={styles.likeButton}
              onClick={() => likeHandler(post._id)}
            >
              <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
              {post.likes.length > 0 && (
                <span className={styles.likeCount}>{post.likes.length}</span>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
