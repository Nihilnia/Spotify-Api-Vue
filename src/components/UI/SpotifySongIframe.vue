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
    <p v-else>No song available</p>
  </div>
</template>

<script>
export default {
  props: {
    // src URL for the iframe (track ID)
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    iframeSrc() {
      // Ensure src is properly defined
      return this.src ? `https://open.spotify.com/embed/track/${this.src}` : "";
    },
  },
};
</script>

<style scoped>
.iframe-container {
  max-width: 85%;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
}

iframe {
  border-radius: 12px;
}
</style>
