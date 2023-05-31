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
  <back-to-top visibleoffset="900">
    <font-awesome-icon :icon="['fas', 'arrow-up']" />
  </back-to-top>
  <div class="message-us">
    <font-awesome-icon :icon="['far', 'message']" />
  </div>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700&display=swap");

.vue-back-to-top {
  width: 30px;
  aspect-ratio: 1 / 1;
  right: 6% !important;
  bottom: 4% !important;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 0.8rem;
  background-color: #e5e3df;
}

.vue-back-to-top:hover {
  cursor: pointer;
  color: #00d9a6;
}

.message-us {
  position: fixed;
  right: 2%;
  bottom: 3%;
  display: grid;
  place-items: center;
  width: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  color: #ffffff;
  background-color: #527ceb;
}
</style>
