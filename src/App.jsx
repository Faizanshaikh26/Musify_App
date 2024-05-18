import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Sidebar from './Components/Sidebar'
import './App.css'
import Displayalbum from './Components/Displayalbum'
import { albumsData } from './assets/assets'
import Player from './Components/Player'


function App() {
  const displatRef=useRef();
  const location=useLocation();
 const isAlbum=location.pathname.includes("album")
const albumId=isAlbum ? location.pathname.slice(-1) :'';
const bgColor=albumsData[Number(albumId)].bgColor

useEffect(()=>{
if(isAlbum){
  displatRef.current.style.background=`linear-gradient(${bgColor},#121212)`
}else{
  displatRef.current.style.background=`#121212`
}
})
  return (
    <>
   <div  ref={displatRef} className='bg-black text-white h-full'>
   <Sidebar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/album/:id' element={<Displayalbum/>}/>
     
    </Routes>
    <div className='fixed bottom-0 overflow-hidden mb-1 z-10 lg:w-[95%] md:w-[93%]'>
    <Player/>
    </div>

    </Sidebar>
  
   </div>
    </>
  )
}

export default App