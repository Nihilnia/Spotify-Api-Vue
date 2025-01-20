<template>
  <div id="container-main">
    <parallax-card
      description="Without Login"
      bg-image="without-login.png"
      @click="searchWithoutLogin"
    ></parallax-card>
    <parallax-card
      description="With Login"
      bg-image="with-login.jpg"
      @click="goToLoginPage"
    ></parallax-card>
  </div>
</template>

<script>
import ParallaxCard from "@/components/UI/ParallaxCard.vue";

export default {
  components: {
    ParallaxCard,
  },
  methods: {
    searchWithoutLogin() {
      this.$router.push("/without-login");
    },
    goToLoginPage() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
#container-main {
  display: flex;
  justify-content: space-around;
  max-width: 70%;
  margin: auto;
  column-gap: 30px;
}

@media all and (max-width: 1200px) {
  #container-main {
    flex-direction: column;
    max-width: 90%;
    row-gap: 30px;
  }
}
</style>
