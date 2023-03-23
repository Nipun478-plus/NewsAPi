import fetch from 'isomorphic-unfetch';
async function SeachNews(search) {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&q=${search}&apiKey=2268bd3fc7884d809085a9a89a7a1232`);
  const data = await res.json();

  return data;
}

export default SeachNews;