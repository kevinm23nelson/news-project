const apiKey = process.env.REACT_APP_NEWS_API_KEY;
export const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

export const fetchNewsData = () => {
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.articles)
    .catch(error => {
      console.error('Error fetching articles:', error);
      throw new Error('Oops! The news elves are on vacation. Please try again later!');
    });
};
