const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

export const fetchNewsData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news data:', error);
    throw new Error('Error getting your articles, please try again later.');
  }
};
