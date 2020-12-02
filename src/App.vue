<template>
  <div id="app">
    <UserProfile></UserProfile>
  </div>
</template>

<script>
import UserProfile from "./components/UserProfile";

export default {
  name: "App",
  // which other components are being used inside this component
  components: {
    UserProfile,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f5fa;
}
</style>
