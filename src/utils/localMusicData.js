export const albumsData = [
    {
        id: "RB",
        name: "RB",
        artist: "Various Artists",
        cover: "/randb/cover.jpg",
        songs: [
            {
                id: "rb-song-1",
                title: "Let Me Go",
                artist: "Daniel Caesar",
                url: "/randb/Daniel Caesar - Let Me Go song1.mp3",
                cover: "/randb/song1.jpg",
            },
            {
                id: "rb-song-2",
                title: "Lose My Mind",
                artist: "Don Toliver",
                url: "/randb/Don Toliver - Lose My Mind  - song2.mp3",
                cover: "/randb/song2.jpg",
            },
            {
                id: "rb-song-3",
                title: "In the Night",
                artist: "Childish Gambino",
                url: "/randb/Childish Gambino - In the Night  - song3.mp3",
                cover: "/randb/song3.jpg",
            },
            {
                id: "rb-song-4",
                title: "Kill Bill",
                artist: "SZA",
                url: "/randb/SZA - Kill Bill - song4.mp3",
                cover: "/randb/song4.jpg",
            },
            {
                id: "rb-song-5",
                title: "JACKIE BROWN",
                artist: "Brent Faiyaz",
                url: "/randb/Brent Faiyaz - JACKIE BROWN song-5.mp3",
                cover: "/randb/song5.jpg",
            },
        ],
    },
    {
        id: "pop",
        name: "Pop",
        artist: "Various Artists",
        cover: "/pop/cover.jpg",
        songs: [
            { id: "pop-song-1", title: "TIMELESS", artist: "The Weeknd", url: "/pop/TIMELESS - Weeknd song1.mp3", cover: "/pop/song1.jpg" },
            { id: "pop-song-2", title: "Die With A smile", artist: "Bruno Mars", url: "/pop/Die With a Smile - Bruno Mars song2.mp3", cover: "/pop/song2.jpg" },
            { id: "pop-song-3", title: "Losers", artist: "Post Malone", url: "/pop/Losers - Post Malone song3.mp3", cover: "/pop/song3.jpg" },
            { id: "pop-song-4", title: "Dancing In The Flames", artist: "The Weeknd", url: "/pop/Dancing In The Flames - Weeknd song4.mp3", cover: "/pop/song4.jpg" },
            { id: "pop-song-5", title: "Popular", artist: "The Weeknd", url: "/pop/Popular - Weeknd song5.mp3", cover: "/pop/song5.jpg" },
        ],
    },
    {
        id: "rock",
        name: "Rock",
        artist: "Various Artists",
        cover: "/rock/cover.jpg",
        songs: [
            { id: "rock-song-1", title: "November Rain", artist: "Guns N' Roses", url: "/rock/Guns N' Roses - November Rain song1.mp3", cover: "/rock/rock-song-1.jpg" },
            { id: "rock-song-2", title: "Smells Like Teen Spirit", artist: "Nirvana", url: "/rock/Nirvana - Smells Like Teen Spirit song2.mp3", cover: "/rock/song2.jpg" },
            { id: "rock-song-3", title: "Bohemian Rhapsody", artist: "Queen", url: "/rock/Queen – Bohemian Rhapsody song3.mp3", cover: "/rock/song3.jpg" },
            { id: "rock-song-4", title: "It's My Life", artist: "Bon Jovi", url: "/rock/Bon Jovi - It's My Life song4.mp3", cover: "/rock/song4.jpg" },
            { id: "rock-song-5", title: "Creep", artist: "Radiohead", url: "/rock/Radiohead - Creep song5.mp3", cover: "/rock/rock-song-5.jpg" },
        ],
    },
    {
        id: "HipHop",
        name: "HipHop",
        artist: "Various Artists",
        cover: "/hiphop/cover.jpg",
        songs: [
            { id: "hip-hop-song-1", title: "family ties", artist: "Baby Keem", url: "/hiphop/Baby Keem - family ties song1.mp3", cover: "/hiphop/song1.jpg" },
            { id: "hip-hop-song-2", title: "Passionfruit", artist: "Drake", url: "/hiphop/Passionfruit - drake song2.mp3", cover: "/hiphop/song2.jpg" },
            { id: "hip-hop-song-3", title: "First Person Shooter", artist: "Drake ft. J. Cole", url: "/hiphop/Drake - First Person Shooter ft. J. Cole song3.mp3", cover: "/hiphop/song3.jpg" },
            { id: "hip-hop-song-4", title: "Doomsday", artist: "MF DOOM", url: "/hiphop/MF DOOM - Doomsday song4.mp3", cover: "/hiphop/song4.jpg" },
            { id: "hip-hop-song-5", title: "N.Y. State of Mind", artist: "Nas", url: "/hiphop/Nas - N.Y. State of Mind song5.mp3", cover: "/hiphop/song5.jpg" },
        ],
    },
    {
        id: "electronic",
        name: "Electronic",
        artist: "Various Artists",
        cover: "/electronic/cover.jpeg",
        songs: [
            { id: "electronic-song-1", title: "Angels For Each Other", artist: "Martin Garrix", url: "/electronic/Martin Garrix - Angels For Each Other song1.mp3", cover: "/electronic/song1.jpg" },
            { id: "electronic-song-2", title: "AVICII FOREVER", artist: "Avicii", url: "/electronic/Avicii - AVICII FOREVER song2.mp3", cover: "/electronic/song2.jpg" },
            { id: "electronic-song-3", title: "Lift Off", artist: "Hardwell", url: "/electronic/Hardwell - Lift Off song3.mp3", cover: "/electronic/song3.jpg" },
            { id: "electronic-song-4", "title": "Still Into You", artist: "CYRIL, maryjo", url: "/electronic/CYRIL, maryjo - Still Into You song4.mp3", cover: "/electronic/song4.jpg" },
            { id: "electronic-song-5", "title": "Told You So", "artist": "Martin Garrix", "url": "/electronic/Martin Garrix - Told You So song5.mp3", "cover": "/electronic/song5.jpg" },
        ],
    },
];

// Helper to easily find any song by its ID
export const allSongs = albumsData.flatMap(album =>
    album.songs.map(song => ({ ...song, albumName: album.name }))
);

// Helper to find album by ID
export const getAlbumById = (id) => albumsData.find(album => album.id === id);

// Helper to find song by ID
export const getSongById = (id) => allSongs.find(song => song.id === id); 