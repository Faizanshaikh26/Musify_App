import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export const usePlayer = () => {
  return useContext(PlayerContext);
};

export const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);
  const seekRing = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if(track.id>0){
      await setTrack(songsData[track.id-1])
      await audioRef.current.play()
      setPlayStatus(true);
    }
  };
  const next = async () => {
    if(track.id <songsData.length-1){
      await setTrack(songsData[track.id+1])
      await audioRef.current.play()
      setPlayStatus(true);
    }
  };

  useEffect(() => {
    const updateSeekBarWidth = () => {
      const { currentTime, duration } = audioRef.current;
      const percentage = (currentTime / duration) * 100;
      seekBar.current.style.width = `${percentage}%`;
      seekRing.current.style.left = `${percentage}%`;

      setTime({
        currentTime: {
          second: Math.floor(currentTime % 60),
          minute: Math.floor(currentTime / 60),
        },
        totalTime: {
          second: Math.floor(duration % 60),
          minute: Math.floor(duration / 60),
        },
      });
    };

    audioRef.current.ontimeupdate = updateSeekBarWidth;

    return () => {
      audioRef.current.ontimeupdate = null; // Cleanup
    };
  }, []);

  const seek = (event) => {
    const seekBgRect = seekBg.current.getBoundingClientRect();
    const offsetX = event.clientX - seekBgRect.left;
    const newTime = (offsetX / seekBgRect.width) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  const handleMouseMove = (event) => {
    if (seekRing.current && seekRing.current.isDragging) {
      const seekBgRect = seekBg.current.getBoundingClientRect();
      let offsetX = event.clientX - seekBgRect.left;

      // Ensure the offset is within the bounds of the seek bar
      offsetX = Math.max(0, Math.min(offsetX, seekBgRect.width));

      const newTime = (offsetX / seekBgRect.width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const handleMouseDown = () => {
    if (seekRing.current) {
      seekRing.current.isDragging = true;
    }
  };

  const handleMouseUp = () => {
    if (seekRing.current) {
      seekRing.current.isDragging = false;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    seekRing,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    seek,
    handleMouseDown,
    playWithId,
    next,previous
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
