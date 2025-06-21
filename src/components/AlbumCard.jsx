import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePlayer } from '@/context/PlayerContext';

const AlbumCard = ({ album }) => {
  const { playSong } = usePlayer();

  const handlePlay = (e) => {
    e.stopPropagation();
    e.preventDefault();
    playSong(album.songs[0]);
  };

  return (
    <div className="relative bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group w-56 h-full flex flex-col">
      <Link href={`/album/${album.id}`} className="block">
        <div className="relative w-full h-52">
          {album.cover ? (
            <Image src={album.cover} alt={album.name} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
          ) : (
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col justify-center text-center">
          <h3 className="font-bold text-white truncate">{album.name}</h3>
        </div>
      </Link>
      <button onClick={handlePlay} className="absolute bottom-20 right-4 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 shadow-lg hover:scale-110" aria-label={`Play ${album.name}`} >
        <i className="ri-play-fill text-2xl ml-1"></i>
      </button>
    </div>
  );
};

export default AlbumCard; 