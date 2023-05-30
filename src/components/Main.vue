<script>
import Design from "./main-components/Design.vue";
import About from "./main-components/About.vue";
import Projects from "./main-components/Projects.vue";
import Feedback from "./main-components/Feedback.vue";
import News from "./main-components/News.vue";
import Start from "./main-components/Start.vue";

export default {
  components: {
    Design,
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
    <Design />
    <About />
    <Projects />
    <Feedback />
    <News />
    <Start />
  </main>
</template>

<style lang="scss" scoped></style>
