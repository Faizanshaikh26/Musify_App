import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

function Displayalbum() {
  const { id } = useParams();
  const albumData = albumsData[id];
  return (
    <>
      <Navbar />
      <div className="mt-6 flex gap-5 flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt="" className="w-48 rounded" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-4xl font-bold mb-3 md:text-7xl ">
            {albumData.name}
          </h2>
          <h4 className="text-sm">{albumData.desc}</h4>
          <p className="mt-1 ">
            <img
              className="inline-block w-5 mr-1"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>. 131322 likes . <b>50 songs</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-5 mb-4 pl-2 text-[#a7a7a7] ">
        <p>
          <b className="mr-4 ">#</b>Title
        </p>
        <p className="ml-3">Album</p>
        <p className="hidden sm:block">Date</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
            >
              <p className="text-white">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                <img src={item.image} alt="" className="inline w-10 mr-5" />
                {item.name}
              </p>
              <p className="text-[14px] ml-3">{albumData.name}</p>
              <p className="text-[15px] hidden sm:block">5 days</p>
              <p className="text-[15px] text-center">{item.duration}</p>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Displayalbum;
