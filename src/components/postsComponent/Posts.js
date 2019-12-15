import React from 'react';
import './Posts.css';

import Loader from '../loaderComponent/Loader'
import Post from '../postComponent/Post'

const URL = 'http://localhost:4000/feeds';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      posts: []
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch(URL).then(
      response => response.json()
    ).then(
      json => {
        this.setState({loading: false, posts: json});
      }
    );
  }

  getContent() {
    let { loading, posts } = this.state;

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

export default Posts;
