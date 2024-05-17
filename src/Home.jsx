import React from 'react'
import Slider from './Components/Slider'
import Navbar from './Components/Navbar'
import DisplayHome from './Components/DisplayHome'
import Player from './Components/Player'

function Home() {
  return (
    <>
    <div className='w-[100%] mt-1 px-2 rounded bg-[#212020] text-white overflow-auto '>
        <Navbar/>
        <Slider/>
        <DisplayHome/>
        <Player/>
    </div>
    </>
  )
}

export default Home