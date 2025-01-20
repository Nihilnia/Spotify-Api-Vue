<template>
  <div class="spectacledcoder-search-bar">
    <img
      class="search-icon"
      width="30"
      height="30"
      src="https://img.icons8.com/sf-black/500/000000/search.png"
      alt="search"
    />
    <input
      type="text"
      name="search"
      placeholder="Search SpectacledCoder or type
    a URL"
      class="spectacledcoder-search-input"
      autocomplete="on"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.spectacledcoder-search-bar {
  width: 60px;
  height: 60px;

  background-color: white;
  display: flex;
  border-radius: 0% 30px 30px 30px;
  transition: width 1s;
  box-shadow: 5px 5px 20px #d8e6fd, -5px -5px 30px white;
}
.search-icon {
  padding: 5px;
  margin-bottom: auto;
  margin-top: auto;
  margin-left: 10px;
  margin-right: auto;
  border-radius: 50%;
  background-color: #e9f1ff;
}
.spectacledcoder-search-bar:hover {
  width: 400px;
  border-radius: 0% 30px 30px 30px;
}
.spectacledcoder-search-input {
  margin: auto;
  display: none;
  transition: display 12s;
  outline: none;
  border: none;
  font-family: "Belanosima", sans-serif;
  border-radius: 25px;
  padding-left: 10px;
}
.spectacledcoder-search-bar:hover .spectacledcoder-search-input {
  display: inline-flex;
  width: 78%;
  height: 70%;
}
input[type="submit"] {
  display: none;
}
@media only screen and (max-width: 600px) {
  .spectacledcoder-search-bar:hover {
    width: 80%;
    border-radius: 0% 30px 30px 15px;
  }
}

.nav {
  width: 80%;
  height: 60px;
  margin: auto;
  background-color: white;
  display: flex;
  border-radius: 15px;
  box-shadow: 5px 5px 20px #d8e6fd, -5px -5px 30px white;
  margin-bottom: 50px;
  margin-top: 250px;
}
.content {
  width: 80%;
  height: 400px;
  margin: auto;
  background-color: white;
  display: flex;
  border-radius: 15px;
  box-shadow: 5px 5px 20px #d8e6fd, -5px -5px 30px white;
  margin-bottom: 50px;
  margin-top: 50px;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgba(226, 247, 255, 0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #99beff;
  border-radius: 10px;
  height: 10px;
  width: 3px;
}
.nav p {
  margin: auto;
  color: #303030;
}
.disclaimer {
  margin: auto;
  width: fit-content;
  color: rgb(0, 0, 0);
}
.disclaimer a {
  text-decoration: none;
  color: #6fa4ff;
}
.disclaimer a:hover {
  color: #4a8cff;
}
::selection {
  background-color: #ffffff00;
  color: #ffffff00;
}
</style>
