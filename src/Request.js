const key = '86f07246c2b21c105c6052fb3a6d83fb'

const Request = {
    requestPopularMovie :`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestPopularShow:`https://api.themoviedb.org/3/tv/popular?api_key=${key}`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
};

export default Request;