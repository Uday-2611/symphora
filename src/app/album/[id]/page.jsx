'use client'

import { useParams } from 'next/navigation';
import { getAlbumById } from '../../../utils/localMusicData';
import Link from 'next/link';
import Image from 'next/image';
import { usePlayer } from '@/context/PlayerContext';

const AlbumPage = () => {
  const params = useParams();
  const { id } = params;
  const album = getAlbumById(id);
  const { playSong } = usePlayer();

  if (!album) {
    return (
      <div className="p-8 text-white text-center">
        <h1 className="text-2xl font-bold">Album not found</h1>
        <Link href="/" className="text-symph-green hover:underline mt-4 inline-block">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Album Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8 mb-8">
          <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 relative rounded-lg shadow-2xl overflow-hidden">
            <Image src={album.cover} alt={`${album.name} cover`} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{album.name}</h1>
            <p className="text-lg text-gray-300 mt-2">{album.artist}</p>
            <p className="text-sm text-gray-400 mt-1">{album.songs.length} songs</p>
            <button onClick={() => playSong(album.songs[0])} className="mt-6 bg-green-500 text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-green-600 transition flex items-center gap-2" >
              <i className="ri-play-fill text-2xl"></i> Play
            </button>
            <Link href="/" className="text-symph-green hover:text-symph-green-dark transition-colors duration-300 mt-4">
                &larr; Back to Home
            </Link>
          </div>
        </div>

        {/* Song List */}
        <div className="space-y-2">
          {album.songs.map((song, index) => (
            <div key={song.id} onClick={() => playSong(song)} className="flex items-center p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-all duration-300 group cursor-pointer mb-2" >
              <div className="text-gray-400 w-8 text-center">{index + 1}</div>
              <div className="w-12 h-12 relative rounded-md overflow-hidden mr-4">
                <Image src={song.cover} alt={song.title} layout="fill" objectFit="cover" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-white group-hover:text-symph-green">{song.title}</h3>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage; 