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
      arrJumboImg: ["jumbo-img-01.png", "jumbo-img-02.png", "jumbo-img-03.png"],
      arrLinks: [
        "Careers",
        "News",
        "Terms of use",
        "Privacy Projects",
        "About",
        "Contact",
      ],
      arrContact: [
        "Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051",
        "info@yourdomain.com",
        "+99 (0) 101 0000 888",
      ],
    };
  },
};
</script>

<template>
  <Header :arrNav="arrNav" :arrJumboImg="arrJumboImg" />
  <Main />
  <Footer :arrLinks="arrLinks" :arrContact="arrContact" />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
