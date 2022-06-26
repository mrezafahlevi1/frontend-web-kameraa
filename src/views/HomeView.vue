<template>
  <div class="home">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  axios,
};
</script>
<style>
.col-md-4 {
  margin-bottom: 70px;
}
</style>
