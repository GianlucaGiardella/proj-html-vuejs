<script>
export default {
  props: {
    nav: Array,
  },
};
</script>

<template>
  <header>
    <div class="info">
      <p><span>(001) 88451234</span> <span>88455438</span></p>
      <font-awesome-icon :icon="['fab', 'facebook-f']" />
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fab', 'pinterest-p']" />
      <font-awesome-icon :icon="['far', 'magnifying-glass']" />
    </div>
    <nav>
      <div class="logo">
        <img src="/logo.png" alt="Phlox logo" />
      </div>
      <ul class="menu">
        <li v-for="link in nav">{{ link }}</li>
      </ul>
      <div class="purchase btn">Purchase</div>
      <div class="search">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </div>
    </nav>
    <div class="jumbo"></div>
  </header>
</template>

<style lang="scss" scoped></style>
