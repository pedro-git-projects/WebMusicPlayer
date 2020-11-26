import React from 'react';

const LibrarySong = ({song, setCurrentSong,isPlaying, audioRef, id, setSongs, songs}) => {
    const songSelectHandler = async () =>{
       await setCurrentSong(song);
        //highlight song by active state
     const newSongs = songs.map((song) => {
         if(song.id === id){
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
        //test if song is playing
    if(isPlaying) audioRef.current.play();
        
    }
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected': ""}`}>
            <img src={song.cover} alt="Current song cover."></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;