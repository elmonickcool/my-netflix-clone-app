import Main from "@/components/Main"
import Row from "@/components/Row"
import Request from "@/Request"
import Head from 'next/head';
import React,{useState,useEffect} from 'react';


const Home = () =>{
    const [pageTitle, setPageTitle] = useState('My Default Title');
  
  useEffect(() => {
    // Some code to fetch data or calculate the new title
    const newTitle = 'Home';
    setPageTitle(newTitle);
  }, []);
    return(
        <>
        <Head>
        <title>{pageTitle}</title>
      </Head>
        <Main/>
        <Row title='Trending' rowID={1} fetchUrl={Request.requestTrendingMovie}/>
        <Row title='Top Rated'rowID={2} fetchUrl={Request.requestTopRatedMovie}/>
        <Row title='Popular Movie'rowID={3} fetchUrl={Request.requestPopularMovie}/>
        </>
    )
}

export default Home