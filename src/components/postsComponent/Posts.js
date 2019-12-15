import React from 'react';
import './Posts.css';

import Post from '../postComponent/Post'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      posts: [
        {
          "user_name": "karan",
          "user_image": "http://localhost:3000/user.png",
          "image": "http://localhost:3000/1.jpg",
          "image_desc": "test desc"
        }
      ]
    };
  }

  getContent() {
    let postsData = this.state.posts;

    return postsData.map((post, index) => {
      return <Post key={index} data={post} />;
    });
  }

  render() {
    const content = this.getContent();

    return (
      <div className="post-container">
        {content}
      </div>
    );
  }
}

export default Posts;
