import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { TailSpin } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  
  return (
    <>
      <Navbar />
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <TailSpin
            height="80"
            width="100"
            color="#b91c1c"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ):(
        <Component {...pageProps} />
      )}
      
    </>
  )
}

export default MyApp