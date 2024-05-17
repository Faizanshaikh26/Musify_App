import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Sidebar from './Components/Sidebar'
import './App.css'
import Displayalbum from './Components/Displayalbum'
import { albumsData } from './assets/assets'


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
    </Sidebar>
   </div>
    </>
  )
}

export default App