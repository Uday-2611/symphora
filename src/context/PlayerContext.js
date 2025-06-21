'use client';

import { createContext, useContext, useState, useRef, useEffect } from 'react';
import { albumsData } from '@/utils/localMusicData';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const playNextSong = () => {
    if (!currentSong) return;
    const { albumId } = currentSong;
    const album = albumsData.find(a => a.id === albumId);
    if (!album) return;

    const currentSongIndex = album.songs.findIndex(s => s.id === currentSong.id);
    const nextSongIndex = (currentSongIndex + 1) % album.songs.length;
    const nextSong = album.songs[nextSongIndex];
    setCurrentSong({ ...nextSong, albumId: album.id });
  };
  
  const playPreviousSong = () => {
    if (!currentSong) return;
    const { albumId } = currentSong;
    const album = albumsData.find(a => a.id === albumId);
    if (!album) return;

    const currentSongIndex = album.songs.findIndex(s => s.id === currentSong.id);
    const prevSongIndex = (currentSongIndex - 1 + album.songs.length) % album.songs.length;
    const prevSong = album.songs[prevSongIndex];
    setCurrentSong({ ...prevSong, albumId: album.id });
  };
  
  useEffect(() => {
    if (currentSong) {
      // Encode each part of the URL separately to handle special characters
      // in folder names (like 'r&b') and filenames correctly.
      const audioSrc = currentSong.url.split('/').map(encodeURIComponent).join('/');

      if (!audioRef.current) {
        audioRef.current = new Audio(audioSrc);
      } else {
        audioRef.current.src = audioSrc;
      }
      setIsPlaying(true);
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onLoadedData = () => setDuration(audio.duration);
    const onEnded = () => playNextSong();

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadeddata', onLoadedData);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadeddata', onLoadedData);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentSong]);

  const playSong = (song) => {
    // Add albumId to the song object when it's played
    const album = albumsData.find(a => a.songs.some(s => s.id === song.id));
    if (currentSong?.id !== song.id) {
        setCurrentSong({ ...song, albumId: album.id });
    } else {
      togglePlayPause();
    }
  };
  
  const togglePlayPause = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
    }
  };

  const seek = (time) => {
    if(audioRef.current) {
        audioRef.current.currentTime = time;
        setProgress(time);
    }
  };

  const value = {
    currentSong,
    isPlaying,
    progress,
    duration,
    playSong,
    togglePlayPause,
    playNextSong,
    playPreviousSong,
    seek,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext); 