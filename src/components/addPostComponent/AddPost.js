import React from 'react';
import './AddPost.css';

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      image_desc: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      'user_name': 'pratik',
      'user_image': 'http://localhost:3000/user.png',
      'image': this.state.image,
      'image_desc': this.state.image_desc
    }
  }

  onChange(e) {
    switch(e.target.type) {
      case 'file':
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          this.setState({
            image: reader.result
          });
        }
        reader.readAsDataURL(file)
      default:
        this.setState({
          [e.target.name]: e.target.value
        });
    }
  }

  render() {
    return (
      <div className="add-post">
        <form onSubmit={this.onSubmit}>
          <label className="add-post__image-label">Add image</label>
          <input className="add-post__image" id="post-image" type="file" name="image" accept="image/*" onChange={this.onChange} required/>
          <input className="add-post__desc" type="text" name="image_desc" placeholder="About image" onChange={this.onChange} />
          <button className="add-post__submit" type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default AddPost;
