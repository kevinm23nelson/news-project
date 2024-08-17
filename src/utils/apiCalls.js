// export const fetchNewsData = async () => {
//     const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=275cabb19b344e0e804ee93d9e536967';
    
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       return data.articles; // Return only the articles array
//     } catch (error) {
//       console.error('Error fetching news data:', error);
//       throw error;
//     }
//   };
  