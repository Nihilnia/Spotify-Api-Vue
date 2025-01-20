<template>
  <div id="container">
    <div
      ref="cardRef"
      class="pc"
      :style="cardStyle"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div id="footer">
        <p>{{ description }}</p>
      </div>
      <div id="links">
        <a href="https://github.com/Nihilnia/MouseTester" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a href="https://nihilnia.github.io/MouseTester"
          ><i class="fa-solid fa-link"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParallaxCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "No description provided.",
    },
    bgImage: {
      type: String,
      default: "a.jpg",
    },
  },
  data() {
    return {
      rotation: {
        rotateX: 0,
        rotateY: 0,
        translateZ: 0,
      },
    };
  },
  computed: {
    cardStyle() {
      return {
        transform: `perspective(1000px) rotateX(${this.rotation.rotateX}deg) rotateY(${this.rotation.rotateY}deg) translateZ(${this.rotation.translateZ}px)`,
        backgroundImage: `url(${require("@/assets/" + this.bgImage)})`, // Dynamically load the background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
    },
  },
  methods: {
    handleMouseMove(event) {
      const card = this.$refs.cardRef;
      if (!card) return;

      const { left, top, width, height } = card.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      this.rotation.rotateX = -(mouseY / height) * 20;
      this.rotation.rotateY = (mouseX / width) * 20;
      this.rotation.translateZ = 50;
    },
    handleMouseLeave() {
      this.rotation.rotateX = 0;
      this.rotation.rotateY = 0;
      this.rotation.translateZ = 0;
    },
  },
};
</script>

<style scoped>
.pc {
  height: 200px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 44px;
  padding-bottom: 44px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

div > div {
  margin: auto;
  max-width: 80%;
  width: 100%;
}

div > img {
  filter: brightness(0) invert(1);
  max-width: 24%;
  width: 100%;
}

div > p {
  margin-top: 10px;
  font-size: 18px;
}

.pc > div {
  text-align: center;
}

a {
  color: #fff;
}

#links {
  display: flex;
  column-gap: 10px;
  max-width: fit-content;
  margin-top: 20px;
}

#footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  max-width: 100%;
}

@media all and (max-width: 1200pc) {
  div > div {
    max-width: 100%;
  }
}
</style>
