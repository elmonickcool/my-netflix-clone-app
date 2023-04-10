import Main from "@/components/Main"
import Row from "@/components/Row"
import Request from "@/Request"

export default function Home() {
  return (
    <>
      <Main />
      <Row title='Trending' rowID={1} fetchUrl={Request.requestTrendingMovie}/>
        <Row title='Top Rated'rowID={2} fetchUrl={Request.requestTopRatedMovie}/>
        <Row title='Popular Movie'rowID={3} fetchUrl={Request.requestPopularMovie}/>
      <Row title='Upcoming Movie' rowID={4} fetchUrl={Request.requestUpcomingMovie} />
    </>
  )
}
