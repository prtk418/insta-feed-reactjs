import React from 'react';
import './Body.css';

import AddPost from '../addPostComponent/AddPost'
import Posts from '../postsComponent/Posts'

function Body() {
  return (
    <div className="body-section">
      <AddPost />
      <Posts />
    </div>
  );
}

export default Body;
