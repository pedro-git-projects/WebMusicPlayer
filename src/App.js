import React, { useState, useRef } from "react";
import Song from "./Components/Song";
import Player from "./Components/Player";
import "./Styles/app.scss";
import data from "./data";
import Library from "./Components/Library";
import Nav from "./Components/Nav";

function App() {
  //References html
  const audioRef = useRef(null);
  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsplaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate animation percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration)*100)
    setSongInfo({ ...songInfo, currentTime: current, duration: duration, animationPercentage: animation, });
  };
  const activeLibraryHandler = (nextPrevious) => {
    const newSongs = songs.map((song) => {
      if(song.id === nextPrevious.id){
          return {
              ...song,
              active: true,
          };
      } else {
          return{
              ...song,
              active: false,
          }
      }
  });
  setSongs(newSongs);  
  }

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
    // playAudio(isPlaying, audioRef);
    return;
  };
  return (
    <div className={`App ${libraryStatus ? "library-active": ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsplaying={setIsplaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler} //fetches songinfo
        onLoadedMetadata={timeUpdateHandler} //sets end timer onload
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
