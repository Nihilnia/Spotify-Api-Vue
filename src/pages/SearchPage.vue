<template>
  <div id="container-main">
    <SongSearch v-if="isLargeScreen" />
    <PlaylistSearch v-if="isLargeScreen" />
    <ArtistSearch v-if="isLargeScreen" />
    <div v-else id="container-btn">
      <div @click="setOption('SongSearch')" class="btn-option">
        Search songs
      </div>
      <div @click="setOption('PlaylistSearch')" class="btn-option">
        Search playlists
      </div>
      <div @click="setOption('ArtistSearch')" class="btn-option">
        Search artists
      </div>
      <component :is="currentOption"></component>
    </div>
  </div>
</template>

<script>
import SongSearch from "@/components/SongSearch.vue";
import ArtistSearch from "@/components/ArtistSearch.vue";
import PlaylistSearch from "@/components/PlaylistSearch.vue";

export default {
  components: {
    SongSearch,
    PlaylistSearch,
    ArtistSearch,
  },
  data() {
    return {
      windowWidth: window.innerWidth, // Initial window width
      currentOption: "SongSearch",
    };
  },
  computed: {
    isLargeScreen() {
      return this.windowWidth > 1200; // Adjust this value for large screen detection
    },
  },
  mounted() {
    // Listen for window resize to update the screen width
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    // Clean up the event listener
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    setOption(opt) {
      this.currentOption = opt;
    },
  },
};
</script>

<style scoped>
#container-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: auto;
}

#container-main > div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch; /* Ensures the items take up the full width */
  min-height: 200px; /* Sets a minimum height to prevent shifting */
  overflow: hidden; /* Prevents overflow from disrupting layout */
}

.btn-option {
  max-width: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 10px;
  margin: auto;
  border-radius: 10px;
}

@media all and (max-width: 1200px) {
  #container-main {
    grid-template-columns: 1fr; /* Changes layout to 2 columns */
  }
}
</style>
