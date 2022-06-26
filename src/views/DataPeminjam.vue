<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ListCamera",
  components: {
    NavBar,
  },
};
</script>

<style>
.line h2 {
  margin-top: 1px;
}
h2 {
  margin-top: 20px;
}
.card {
  margin-top: 50px;
  border: 2px solid #000000;
}
.card img {
  border-bottom: 2px solid #000000;
  border: 1px solid #000000;
}
.fav h2 {
  margin-top: 0px;
}
</style>
