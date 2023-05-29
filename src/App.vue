<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      arrNav: ["Home", "About", "Services", "Showcase", "Blog", "Contact"],
    };
  },
};
</script>

<template>
  <Header :nav="arrNav" />
  <Main />
  <Footer />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
