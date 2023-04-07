import Main from "@/components/Main"
import Row from "@/components/Row"
import Request from "@/Request"

const Home = () =>{
    return(
        <>
        <Main/>
        <Row title='Trending'  fetchUrl={Request.requestTrendingMovie}/>
        <Row title='Top Rated' fetchUrl={Request.requestTopRatedMovie}/>
        <Row title='Popular Movie' fetchUrl={Request.requestPopularMovie}/>
        </>
    )
}

export default Home