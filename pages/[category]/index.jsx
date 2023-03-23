import {useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import CategoryWiseNews from '../CategoryWiseNews.jsx'
import Posts from '../component/GetPosts';
import Pagination from '../component/Pagination';

export default function News({articles}) {
    const router=useRouter();
    const category=router.query.category;

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    if(posts!=articles)
    {
        setPosts(articles);
    }
  
     // Get current posts
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
   
     // Change page
     const paginate = pageNumber => setCurrentPage(pageNumber);
  
     
  return (
    <div>
      <h1 className='text-center m-3'>{category} New's</h1>
      <Posts posts={currentPosts} />
      <div className='ms-5'><Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /></div>
    </div>
  )
}

News.getInitialProps = async ({ query }) => {
  const { category } = query;
  const articles = await CategoryWiseNews(category);
  return { articles };
};