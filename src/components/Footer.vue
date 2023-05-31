<script>
export default {
  props: {
    arrLinks: Array,
    arrContact: Array,
  },
};
</script>

<template>
  <footer id="Contact">
    <div class="top-footer">
      <div class="logo">
        <img src="/logo.png" alt="" />
        <p>
          While the lovely valley teems with vapour around me, and the meridian
          sun strikess the upper surface of the impenetrable foliage of my tree.
          While the lovely valley teems with vapour around me.
        </p>
      </div>
      <ul class="links">
        <h2>Quick Links</h2>
        <ul class="list">
          <li v-for="link in arrLinks" :key="link">{{ link }}</li>
        </ul>
      </ul>
      <ul class="contact">
        <h2>Contact</h2>
        <ul class="list">
          <li v-for="contact in arrContact" :key="contact">{{ contact }}</li>
        </ul>
      </ul>
      <div class="location">
        <h2>Location on map</h2>
        <img src="../assets/images/map.png" alt="map" />
      </div>
    </div>
    <div class="bottom-footer black-gradient">
      <p>&copy; 2023 Phlox business theme.</p>
      <font-awesome-icon :icon="['fab', 'facebook-f']" />
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fab', 'pinterest-p']" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
h2::after {
  margin-top: 1.1rem;
}

.top-footer {
  padding: 7rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 3rem;
  background-color: #ffffff99;
}

.top-footer {
  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .logo > img {
    width: 176px;
  }

  .logo > img:hover {
    cursor: pointer;
  }

  .logo > p,
  .list > li {
    font-size: 0.9rem;
    line-height: 1.4;
    color: #aaaaaa;
  }

  .list > li:hover {
    cursor: pointer;
    color: #00d9a6;
  }

  h2 {
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #0e0e0e;
  }

  .list {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .location > img:hover {
    cursor: crosshair;
  }
}

.bottom-footer {
  height: 100px;
  padding-inline: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #aaaaaa;
}

.bottom-footer > p {
  font-size: 0.8rem;
  flex: 1 0 0;
  text-transform: uppercase;
}
</style>
