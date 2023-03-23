import React from 'react'
import fetch from 'isomorphic-unfetch';
import Posts from './component/GetPosts';
import Pagination from './component/Pagination';
import { useState,useEffect } from 'react';

export default function index({ articles }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  useEffect(() => {
    setPosts(articles);
    
  }, []);

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

   
 
    return (
      <div>
        <h1 className='text-center m-3'>New's</h1>
      <Posts posts={currentPosts} />
      <div className='ms-5'><Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /></div>
      </div>
    );
   
}

export async function getStaticProps() {
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=2268bd3fc7884d809085a9a89a7a1232");
    const data = await res.json();
    
    const articles = data.articles;

    return {
      props: {
        articles
      }
    };
  }