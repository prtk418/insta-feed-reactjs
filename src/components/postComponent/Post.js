import React from 'react';
import './Post.css';

function Post(props) {
  return (
    <div className="post">
      <div className="post__user">
        <div className="post__user-image">
          <img alt={props.data.user_name} src={props.data.user_image} />
        </div>
        <div className="post__user-details">
          <div className="post__user-name">{props.data.user_name}</div>
        </div>
      </div>
      <div className="post__image">
        <img alt={props.data.image_desc} src={props.data.image} />
      </div>
      <div className="post__image-desc">{props.data.image_desc}</div>
    </div>
  );
}

export default Post;
