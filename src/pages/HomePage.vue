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
  <div id="footer">
    <nihil-links
      githubUrl="https://github.com/Nihilnia"
      linkedinUrl="https://www.linkedin.com/in/okantopal"
      websiteUrl="https://nihilnia.github.io/Portfolio"
    ></nihil-links>
  </div>
</template>

<script>
import ParallaxCard from "@/components/UI/ParallaxCard.vue";
import NihilLinks from "@/components/UI/NihilLinks.vue";

export default {
  components: {
    ParallaxCard,
    NihilLinks,
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
  margin-top: 15%;
}

#footer {
  max-width: fit-content;
  margin: auto;
  margin-top: 44px;
}

@media all and (max-width: 1200px) {
  #container-main {
    flex-direction: column;
    max-width: 90%;
    row-gap: 30px;
  }
}
</style>
