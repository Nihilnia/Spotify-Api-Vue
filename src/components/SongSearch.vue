<template>
  <div>
    <div id="input-container">
      <h3>Search for Songs</h3>
      <input
        v-model="songQuery"
        placeholder="Enter song name"
        @keyup.enter="searchSong"
      />
    </div>
    <p v-if="loading">Loading song details...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="songs.length" class="songs-container">
      <h4>Songs Found:</h4>
      <div v-for="(song, index) in songs" :key="index">
        <!-- Pass the track ID to the SpotifyIframe component -->
        <SpotifyIframe :src="song.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchSongByName } from "@/scripts/spotifyAPI";
import SpotifyIframe from "@/components/UI/SpotifySongIframe.vue"; // Import the SpotifyIframe component

export default {
  components: {
    SpotifyIframe,
  },
  data() {
    return {
      songQuery: "",
      songs: [], // Array to store songs
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
        console.log("Fetched Songs:", songResults); // Debugging log

        if (songResults) {
          this.songs = songResults; // Update songs array with id
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
