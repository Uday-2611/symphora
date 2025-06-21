'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { usePlayer } from '@/context/PlayerContext'
import { albumsData, allSongs } from '@/utils/localMusicData'
import AlbumCard from '@/components/AlbumCard'

const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState({ songs: [], albums: [] })
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const { playSong } = usePlayer()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) {
      setResults({ songs: [], albums: [] })
      setHasSearched(false)
      return
    }

    setLoading(true)
    setHasSearched(true)

    const lowerCaseQuery = query.toLowerCase()

    const albumMatch = albumsData.find(album => album.name.toLowerCase() === lowerCaseQuery)

    if (albumMatch) {
      setResults({ songs: [], albums: [albumMatch] })
    } else {
      const songMatches = allSongs.filter(song =>
        song.title.toLowerCase().includes(lowerCaseQuery) ||
        song.artist.toLowerCase().includes(lowerCaseQuery)
      )
      setResults({ songs: songMatches, albums: [] })
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Search</h1>
        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search for songs, artists, or albums..." className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 text-white outline-none focus:ring-2  focus:ring-red-500" />
          <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {loading && <div className="text-white text-center">Loading...</div>}

        {!loading && hasSearched && (
          <div>
            {results.albums.length === 0 && results.songs.length === 0 ? (
              <p className="text-gray-400 text-center">No results found for "{query}".</p>
            ) : (
              <div className="space-y-8">
                {results.albums.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Top Result</h2>
                    <div className="flex justify-center sm:justify-start">
                      {results.albums.map(album => (
                        <AlbumCard key={album.id} album={album} />
                      ))}
                    </div>
                  </div>
                )}

                {results.songs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Songs</h2>
                    <div className="space-y-2">
                      {results.songs.map(song => (
                        <div key={song.id} onClick={() => playSong(song)} className="flex items-center p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-all duration-300 group cursor-pointer" >
                          <div className="w-12 h-12 relative rounded-md overflow-hidden mr-4 flex-shrink-0">
                            <Image src={song.cover} alt={song.title} layout="fill" objectFit="cover" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="font-semibold text-white group-hover:text-green-400 truncate">{song.title}</h3>
                            <p className="text-sm text-gray-400 truncate">{song.artist}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage
