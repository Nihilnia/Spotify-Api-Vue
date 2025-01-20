<template>
  <div><h2>search page</h2></div>
  <div>
    <SongSearch />
    <PlaylistSearch />
    <ArtistSearch />
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
};
</script>
