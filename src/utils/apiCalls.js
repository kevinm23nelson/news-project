const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Access the API key from the environment variables
const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

export const fetchNewsData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.articles; // Return only the articles array
  } catch (error) {
    console.error('Error fetching news data:', error);
    throw new Error('Oops! The news elves are on vacation. Please try again later!');
  }
};
