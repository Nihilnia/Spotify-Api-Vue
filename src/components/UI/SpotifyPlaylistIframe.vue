<template>
  <div class="iframe-container">
    <iframe
      v-if="src"
      :src="iframeSrc"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    <p v-else>No playlist available</p>
  </div>
</template>

<script>
export default {
  props: {
    // src URL for the iframe (playlist ID)
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    iframeSrc() {
      // Construct the iframe source URL for playlists
      return this.src
        ? `https://open.spotify.com/embed/playlist/${this.src}?utm_source=generator`
        : "";
    },
  },
};
</script>

<style scoped>
.iframe-container {
  margin-bottom: 20px;
}

iframe {
  border-radius: 12px;
}
</style>
