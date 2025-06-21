'use client'

import React from 'react'
import Link from 'next/link'
import { usePlayer } from '@/context/PlayerContext'
import Image from 'next/image'

const Sidebar = () => {
  const {
    currentSong,
    isPlaying,
    togglePlayPause,
    progress,
    duration,
    seek,
    playNextSong,
    playPreviousSong
  } = usePlayer();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPositionX = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const seekTime = (clickPositionX / progressBarWidth) * duration;
    seek(seekTime);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className='bg-neutral-900 h-full p-4 flex flex-col justify-between'>
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white tracking-wide cursor-pointer">Symphora</h1>
          </Link>
          <Link href="/search" className="text-gray-400 hover:text-white transition" aria-label="Search">
            <i className="ri-search-line text-2xl"></i>
          </Link>
        </div>

        {/* Song Control Panel -> */}
        <div className="bg-neutral-800 rounded-lg p-2 w-full h-fit flex flex-col justify-between">
          <div className=" items-center mb-3 flex flex-col gap-4">
            <div className="w-full h-64 bg-neutral-700 rounded-md flex items-center justify-center text-gray-400 text-xs overflow-hidden relative">
              {currentSong ? (
                <Image src={currentSong.cover} alt={currentSong.title} layout="fill" objectFit="cover" />
              ) : (
                <span>Album Art</span>
              )}
            </div>
            <div>
              <h2 className="text-gray-100 font-semibold text-3xl text-center">
                {currentSong?.title || "Music name"}
              </h2>
              <h3 className="text-gray-400 text-lg text-center">{currentSong?.artist || "Artist name"}</h3>
            </div>
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2 px-2">
              <span className="text-xs text-gray-400 w-8 text-left">{formatTime(progress)}</span>
              <div className="flex-1 h-2 bg-neutral-700 rounded-full cursor-pointer" onClick={handleProgressClick}>
                <div className="h-2 bg-white rounded-full" style={{ width: `${(progress / duration) * 100 || 0}%` }} ></div> </div>
              <span className="text-xs text-gray-400 w-8 text-right">{formatTime(duration || 0)}</span>
            </div>
            <div className="flex items-center justify-center gap-5">
              <button onClick={playPreviousSong} disabled={!currentSong} className="text-gray-300 hover:text-white transition">
                <i className="ri-skip-back-fill text-2xl"></i>
              </button>
              <button onClick={togglePlayPause} disabled={!currentSong}>
                <i className={`ri-${isPlaying ? 'pause' : 'play'}-fill text-3xl text-gray-300 cursor-pointer hover:text-white transition`}></i>
              </button>
              <button onClick={playNextSong} disabled={!currentSong} className="text-gray-300 hover:text-white transition">
                <i className="ri-skip-forward-fill text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

