'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { albumsData } from '../utils/localMusicData';
import AlbumCard from '../components/AlbumCard';

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setAlbums(albumsData);
    setLoading(false);
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Browse Albums</h1>
      
      {loading ? (
        <div className="text-center text-gray-400">
          <p>Loading albums...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {albums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
