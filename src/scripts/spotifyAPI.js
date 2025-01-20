// src/scripts/spotifyAPI.js

const CLIENT_ID = "4417abaf1e184e449cf0d5a9feab5e49";
const CLIENT_SECRET = "e319dae8583c44dc85b3cc12989ae5fa";
const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

// Function to get Spotify access token
async function getSpotifyToken() {
  const credentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  });

  const data = await response.json();
  return data.access_token;
}

// Function to fetch songs by name

async function fetchSongByName(songName) {
  try {
    const tokenData = await getSpotifyToken();
    const accessToken = tokenData;

    const query = encodeURIComponent(songName);

    // Fetch the song by name from Spotify's search API
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, // Limit to 10 results
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      console.error(
        `Error fetching songs: ${response.status} ${response.statusText}`
      );
      throw new Error("Failed to fetch songs");
    }

    const data = await response.json();
    console.log("Song Search Response:", data); // Log the response for debugging

    // Return an array of song details
    const songs = data.tracks.items.map((song) => ({
      name: song.name,
      artist: song.artists[0].name,
      album: song.album.name,
    }));

    return songs;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Function to fetch playlists by name
async function fetchPlaylistsByName(query) {
  const token = await getSpotifyToken(); // Use getSpotifyToken here
  const apiUrl = `https://api.spotify.com/v1/search?query=${query}&type=playlist&limit=5`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching playlists");
  }

  const data = await response.json();

  // Filter out null values from the playlist items
  const playlists = data.playlists.items.filter((item) => item !== null);

  return playlists;
}

// Function to fetch artists by name
async function fetchArtistsByName(query) {
  const token = await getSpotifyToken();
  const apiUrl = `https://api.spotify.com/v1/search?query=${query}&type=artist&limit=5`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching artists");
  }

  const data = await response.json();

  // Filter out null values from the artist items
  const artists = data.artists.items.filter((item) => item !== null);

  // Ensure genres is not undefined
  artists.forEach((artist) => {
    artist.genres = artist.genres || []; // If undefined, default to an empty array
  });

  return artists;
}

// Export all functions
export { fetchSongByName, fetchPlaylistsByName, fetchArtistsByName };
