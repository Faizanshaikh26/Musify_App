import React from 'react'
import { usePlayer } from '../Context/PlayerContext'

function Songitem({songname,image,desc,id}) {
  const {playWithId}=usePlayer()
  return (
    <>
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
<img src={image} alt="" className='rounded'/>
<p className='font-bold mt-2 mb-1'>{songname}</p>
<p className='text-slate-200 text-sm'>{desc}</p>
    </div>
    
    </>
  )
}

export default Songitem