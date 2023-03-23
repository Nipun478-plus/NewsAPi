import fetch from 'isomorphic-unfetch';
async function CategoryWiseNews(category) {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2268bd3fc7884d809085a9a89a7a1232`);
  const data = await res.json();
  return data.articles;
}

export default CategoryWiseNews;