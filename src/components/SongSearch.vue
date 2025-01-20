<template>
  <div>
    <h3>Search for Songs</h3>
    <input v-model="songQuery" placeholder="Enter song name" />
    <button @click="searchSong">Search Songs</button>
    <p v-if="loading">Loading song details...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="songs.length">
      <h4>Songs Found:</h4>
      <ul>
        <li v-for="(song, index) in songs" :key="index">
          <p><strong>Song Name:</strong> {{ song.name }}</p>
          <p><strong>Artist:</strong> {{ song.artist }}</p>
          <p><strong>Album:</strong> {{ song.album }}</p>
        </li>
      </ul>
    </div>
    <div v-else-if="!loading && !songs.length">
      <p>No songs found.</p>
    </div>
  </div>
</template>

<script>
import { fetchSongByName } from "@/scripts/spotifyAPI";

export default {
  data() {
    return {
      songQuery: "",
      songs: [], // Now we have an array to hold multiple songs
      loading: false,
      error: null,
    };
  },
  methods: {
    async searchSong() {
      if (!this.songQuery) return;

      this.loading = true;
      this.error = null;

      try {
        // Fetch multiple songs by name
        const songResults = await fetchSongByName(this.songQuery);
        if (songResults) {
          this.songs = songResults; // Update songs array
        }
      } catch (err) {
        this.error = "Error fetching songs.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
