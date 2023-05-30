<script>
import Features from "./main-components/Features.vue";
import About from "./main-components/About.vue";
import Projects from "./main-components/Projects.vue";
import Feedback from "./main-components/Feedback.vue";
import News from "./main-components/News.vue";
import Start from "./main-components/Start.vue";

export default {
  components: {
    Features,
    About,
    Projects,
    Feedback,
    News,
    Start,
  },
};
</script>

<template>
  <main>
    <Features />
    <About />
    <Projects />
    <Feedback />
    <News />
    <Start />
  </main>
</template>

<style lang="scss" scoped></style>
