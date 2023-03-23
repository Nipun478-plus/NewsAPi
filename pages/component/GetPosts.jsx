import React from 'react';
import NewsCard from './newsCard';

const Posts = ({posts}) => {
  return (
    <div>
    <div class="container">
          <div class="row">
        {posts.map(post =>(
            <div class="col-sm-4">
              <NewsCard post={post}/>
            </div>
         ))}
         </div>
       </div>
    </div>
    
  );
};

export default Posts;