<template>
  <div>
    <div id="input-container">
      <h3>Search for Playlists</h3>
      <input
        v-model="playlistQuery"
        placeholder="Enter playlist name"
        @keyup.enter="searchPlaylist"
      />
    </div>
    <p v-if="loading">Loading playlist details...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="playlists.length">
      <h4>Playlists Found:</h4>
      <div v-for="(playlist, index) in playlists" :key="index">
        <!-- Pass the playlist ID to the SpotifyIframe component -->
        <SpotifyPlaylistIframe :src="playlist.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchPlaylistsByName } from "@/scripts/spotifyAPI";
import SpotifyPlaylistIframe from "@/components/UI/SpotifyPlaylistIframe.vue"; // Import the SpotifyIframe component

export default {
  components: {
    SpotifyPlaylistIframe,
  },
  data() {
    return {
      playlistQuery: "",
      playlists: [], // Array to store playlists
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
        if (playlistResults) {
          this.playlists = playlistResults; // Update playlists array
        }
      } catch (err) {
        this.error = "Error fetching playlists.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr;
}

input {
  max-width: 100%;
  width: 35%;
  height: 27px;
  display: block;
  margin: auto;
}

#input-container {
  text-align: center;
}

h4,
p {
  text-align: center;
}
</style>
