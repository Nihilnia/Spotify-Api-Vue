<template>
  <div>
    <div id="input-container">
      <h3>Search for Artists</h3>
      <input
        v-model="artistQuery"
        placeholder="Enter artist name"
        @keyup.enter="searchArtist"
      />
    </div>
    <p v-if="loading">Loading artist details...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="artists.length">
      <h4>Artists Found:</h4>
      <div v-for="(artist, index) in artists" :key="index">
        <!-- Pass the artist ID to the SpotifyArtistIframe component -->
        <SpotifyArtistIframe :src="artist.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { fetchArtistsByName } from "@/scripts/spotifyAPI"; // Import artist API function
import SpotifyArtistIframe from "@/components/UI/SpotifyArtistIframe.vue"; // Import the SpotifyArtistIframe component

export default {
  components: {
    SpotifyArtistIframe,
  },
  data() {
    return {
      artistQuery: "",
      artists: [], // Array to store artists
      loading: false,
      error: null,
    };
  },
  methods: {
    async searchArtist() {
      if (!this.artistQuery) return;

      this.loading = true;
      this.error = null;

      try {
        // Fetch multiple artists by name
        const artistResults = await fetchArtistsByName(this.artistQuery);
        if (artistResults) {
          this.artists = artistResults; // Update artists array
        }
      } catch (err) {
        this.error = "Error fetching artists.";
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
