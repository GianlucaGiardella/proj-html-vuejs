<script>
export default {
  props: {
    nav: Array,
  },
  data() {
    return {
      active: "Home",
    };
  },
  methods: {},
};
</script>

<template>
  <header>
    <div class="info">
      <p><span>(001) 88451234</span> <span>88455438</span></p>
      <font-awesome-icon :icon="['fab', 'facebook-f']" />
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fab', 'pinterest-p']" />
    </div>
    <nav>
      <div class="logo">
        <img src="/logo.png" alt="Phlox logo" />
      </div>
      <ul class="menu">
        <li
          v-for="link in nav"
          :class="link === active ? 'active' : ''"
          @click="active = link"
        >
          {{ link }}
        </li>
      </ul>
      <div class="actions">
        <div class="purchase btn">Purchase</div>
        <div class="search">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>
      </div>
    </nav>
    <div class="jumbo"></div>
  </header>
</template>

<style lang="scss" scoped>
.info {
  height: 3rem;
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffff;
  background-color: #000000b3;
}

.info {
  p {
    flex: 1 0 0;
    margin-inline-start: 1rem;
  }
  p {
    span:first-child {
      margin-inline-end: 0.5rem;
    }
  }
}

nav {
  padding: 2rem 2.6rem;
  height: 106px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  text-transform: uppercase;
}

nav {
  .logo {
    flex: 1 0 0;
  }

  .logo {
    img {
      height: 100%;
    }
  }
  .menu {
    flex: 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .menu {
    li {
      height: 100%;
      font-size: 0.8rem;
      font-weight: 400;
      display: flex;
      align-items: center;
      color: #3d3d3d;
    }
  }

  .active {
    color: #000000 !important;
    font-weight: 600 !important;
  }
  .actions {
    flex: 1 0 0;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
  }

  .actions {
    .purchase {
      padding: 0.8rem 2rem;
      border-radius: 5rem;
      color: #ffffffcf;
      background-image: linear-gradient(to right, #90e062, #00d9a6);
      box-shadow: 6px 8px 60px 0px #9bffd0;
    }

    .search {
      font-size: 1rem;
      color: #00d9a6;
    }
    .purchase:hover {
      background-image: linear-gradient(to right, #444444, #050505);
      box-shadow: 6px 8px 60px 0px #70707059;
    }

    .search:hover {
      color: #444444;
    }
  }
  .logo > img,
  li,
  .purchase:hover,
  .search:hover {
    cursor: pointer;
  }
}
</style>
