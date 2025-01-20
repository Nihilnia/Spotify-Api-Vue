<template>
  <div>
    <a :href="githubUrl" target="_blank"><i class="fa-brands fa-github"></i></a>
    <a :href="linkedinUrl" target="_blank"
      ><i class="fa-brands fa-linkedin"></i
    ></a>
    <a :href="websiteUrl" target="_blank"><i class="fa-solid fa-link"></i></a>
  </div>
</template>

<script>
export default {
  props: ["githubUrl", "linkedinUrl", "websiteUrl"],
};
</script>

<style scoped>
div {
  max-width: fit-content;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  align-items: center;
}

a {
  color: #fff;
  transition: all 0.3s ease;
  font-size: 30px;
}

a:hover {
  transform: scale(1.1);
}
</style>
