import Main from "@/components/Main"
import Row from "@/components/Row"
import Request from "@/Request"

export default function Home() {
  return (
    <>
      <Main />
      <Row title='Trending' fetchUrl={Request.requestTrendingMovie} />
      <Row title='Top Rated' fetchUrl={Request.requestTopRatedMovie} />
      <Row title='Popular Movie' fetchUrl={Request.requestPopularMovie} />
      <Row title='Upcoming Movie' fetchUrl={Request.requestUpcomingMovie} />
    </>
  )
}
