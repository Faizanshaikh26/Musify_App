import React from 'react';

function IndieArtist({ name, image }) {
  return (
    <div className='min-w-[200px] p-2 px-2 rounded cursor-pointer object-cover '>
      <div className='relative w-full pt-[100%] overflow-hidden rounded-full group '>
        <img src={image} alt={name} className='absolute inset-0 w-full h-full object-cover rounded-full '/>
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-55 group-hover:bottom-0 transition-opacity duration-300 rounded-full'></div>
      </div>
      <p className='font-bold mt-2 mb-1 text-center'>{name}</p>
    </div>
  );
}

export default IndieArtist;
