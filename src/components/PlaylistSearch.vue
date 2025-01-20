<template>
  <div>
    <h3>Search for Playlists</h3>
    <input v-model="playlistQuery" placeholder="Enter playlist name" />
    <button @click="searchPlaylist">Search Playlist</button>
    <p v-if="loading">Loading playlist details...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="playlists.length">
      <h4>Playlists Found:</h4>
      <ul>
        <li v-for="(playlist, index) in playlists" :key="index">
          <p><strong>Name:</strong> {{ playlist.name }}</p>
          <p>
            <strong>Description:</strong>
            {{ playlist.description || "No description" }}
          </p>
        </li>
      </ul>
    </div>
    <div v-else-if="!loading && !playlists.length">
      <p>No playlists found.</p>
    </div>
  </div>
</template>

<script>
import { fetchPlaylistsByName } from "@/scripts/spotifyAPI";

export default {
  data() {
    return {
      playlistQuery: "",
      playlists: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async searchPlaylist() {
      if (!this.playlistQuery) return;

      this.loading = true;
      this.error = null;

      try {
        // Fetch playlists by name
        const playlistResults = await fetchPlaylistsByName(this.playlistQuery);
        this.playlists = playlistResults;
      } catch (err) {
        this.error = "Error fetching playlists.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
