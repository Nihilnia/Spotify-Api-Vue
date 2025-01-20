<template>
  <div>
    <h3>Search for Artists</h3>
    <input v-model="artistQuery" placeholder="Enter artist name" />
    <button @click="searchArtist">Search Artist</button>
    <p v-if="loading">Loading artist details...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="artists.length">
      <h4>Artists Found:</h4>
      <ul>
        <li v-for="(artist, index) in artists" :key="index">
          <p><strong>Name:</strong> {{ artist.name }}</p>
          <p>
            <strong>Genres:</strong>
            <span v-if="artist.genres.length">
              {{ artist.genres.join(", ") }}
            </span>
            <span v-else>No genres available</span>
          </p>
        </li>
      </ul>
    </div>
    <div v-else-if="!loading && !artists.length">
      <p>No artists found.</p>
    </div>
  </div>
</template>

<script>
import { fetchArtistsByName } from "@/scripts/spotifyAPI";

export default {
  data() {
    return {
      artistQuery: "",
      artists: [],
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
        // Fetch artists by name
        const artistResults = await fetchArtistsByName(this.artistQuery);
        this.artists = artistResults;
      } catch (err) {
        this.error = "Error fetching artists.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
