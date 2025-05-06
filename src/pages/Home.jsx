import React from 'react';
import Emoji from '../Emoji';
import PostList from '../components/PostList';
function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page! Yay!</h2>
      <Emoji />
      <PostList />
    </div>
  );
}

export default Home;
