<script>
import Features from "./main-components/Features.vue";
import About from "./main-components/About.vue";
import Showcase from "./main-components/Showcase.vue";
import Feedback from "./main-components/Feedback.vue";
import Blog from "./main-components/Blog.vue";
import Start from "./main-components/Start.vue";

export default {
  components: {
    Features,
    About,
    Showcase,
    Feedback,
    Blog,
    Start,
  },
};
</script>

<template>
  <main>
    <Features />
    <About />
    <Showcase />
    <Feedback />
    <Blog />
    <Start />
  </main>
</template>

<style lang="scss" scoped></style>
