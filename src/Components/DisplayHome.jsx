import React from 'react'
import {albumsData,songsData} from '../assets/assets'
import Albumitem from './Albumitem'
import Songitem from './Songitem'
import { Indieasrtistdata } from '../Hardcore/Indieartist'
import Indieasrtist from '../Components/Indieasrtist'

function DisplayHome() {
  return (
 <>
 <div className='mb-4 '>
  <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
  <div className='flex overflow-auto'>
  {
  albumsData.map((item,index)=>  (<Albumitem name={item.name} desc={item.desc} image={item.image} key={index} id={item.id}/>) )
}
  </div>


 </div>
 <div className='mb-4 '>
  <h1 className='my-5 font-bold text-2xl'>Todays Biggest Hits</h1>
  <div className='flex overflow-auto'>
  {
 songsData.map((item)=>(<Songitem songname={item.name} id={item.id } image={item.image} key={item.id}  desc={item.desc}/>))
}
  </div>

  
 </div>
 <div className='mb-4 '>
  <h1 className='my-5 font-bold text-2xl'>Top Indie Artists</h1>
  <div className='flex overflow-auto'>
{
  Indieasrtistdata.map((item,index)=>(<Indieasrtist key={index} name={item.name} image={item.image}/>))
}
  </div>

  
 </div>
  
 </>
  )
}

export default DisplayHome