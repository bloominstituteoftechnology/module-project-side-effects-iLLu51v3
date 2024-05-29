import React from 'react';
import Post from './Post';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {
        posts.map(postData => <Post likePost={likePost} post={postData} key={postData.id} />)
        // a key is required to uniquely identify the specific post. Looking at the dummy-data each post in the array is given an ID.
        // An error will show in the console, showing Post is requiring 'username'.
        // It is also required to return the map data to the likePost variable 
      }
    </div>
  );
};

export default Posts;
