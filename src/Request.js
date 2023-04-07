const key = '86f07246c2b21c105c6052fb3a6d83fb'

const Request = {
    requestPopularMovie :`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestPopularShow:`https://api.themoviedb.org/3/tv/popular?api_key=${key}`,
    requestTrendingMovie: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestTopRatedMovie:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestUpcomingMovie:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
};

export default Request;