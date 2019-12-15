import React from 'react';
import { connect } from 'react-redux';
import './Posts.css';

import Loader from '../loaderComponent/Loader'
import Post from '../postComponent/Post'
import { fetchPosts } from '../../actions/postActions'

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  getContent() {
    let { loading, posts } = this.props;

    if (Object.keys(this.props.newPost).length > 0) {
      this.props.posts.unshift(this.props.newPost);
    }

    switch(loading) {
      case false:
        return posts.map((post, index) => {
          return <Post key={index} data={post} />;
        });
      default:
        return <Loader />
    }
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

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
