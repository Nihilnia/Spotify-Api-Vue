<template>
  <div class="iframe-container">
    <iframe
      v-if="src"
      :src="iframeSrc"
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    <p v-else>No artist available</p>
  </div>
</template>

<script>
export default {
  props: {
    // src URL for the iframe (artist ID)
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    iframeSrc() {
      // Build the iframe URL for the artist profile
      return this.src
        ? `https://open.spotify.com/embed/artist/${this.src}`
        : "";
    },
  },
};
</script>

<style scoped>
.iframe-container {
  margin-bottom: 20px;
  max-width: 90%;
}

iframe {
  border-radius: 12px;
}
</style>
