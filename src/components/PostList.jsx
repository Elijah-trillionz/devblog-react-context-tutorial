import { useContext } from 'react';
import { AppContext } from '../contexts/AppState';
import PostItem from './PostItem';

const PostList = () => {
  const { posts } = useContext(AppContext);

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
