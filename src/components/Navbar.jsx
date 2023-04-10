import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <div className='flex items-center'>
        <Link href='/'>
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer mr-4'>Netflix</h1>
        </Link>
        <Link href='/Home'>
          <h1 className='text-white pr-4 ms-5'>Home</h1>
        </Link>
        <Link href='/movie'>
          <h1 className='text-white pr-4 ms-5'>Movie</h1>
        </Link>
        <Link href='/tvshow'>
          <h1 className='text-white pr-4 ms-5'>TV Show</h1>
        </Link>
        <Link href='/new&popular'>
          <h1 className='text-white pr-4 ms-5'>New & Popular</h1>
        </Link>
        <Link href='/genre'>
          <h1 className='text-white pr-4 ms-5'>Genre</h1>
        </Link>
        <Link href='/my_list'>
          <h1 className='text-white pr-4 ms-5'>My List</h1>
        </Link>
      </div>
      <div>
        <Link href='/signin'>
          <button className='text-white pr-4'>Sign in</button>
        </Link>
        <Link href='/signup'>
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
