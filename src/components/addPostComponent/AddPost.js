import React from 'react';
import './AddPost.css';

function AddPost() {
  return (
    <div className="add-post">
      <form>
        <label className="add-post__image-label">Add image</label>
        <input className="add-post__image" id="post-image" type="file" name="image" accept="image/*" required/>
        <input className="add-post__desc" type="text" name="image_desc" placeholder="About image" />
        <button className="add-post__submit" type="submit">Post</button>
      </form>
    </div>
  );
}

export default AddPost;
