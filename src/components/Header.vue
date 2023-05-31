<script>
export default {
  props: {
    arrNav: Array,
    arrJumboImg: Array,
  },
  data() {
    return {
      active: "Home",
      activeJumboImg: 0,
      src: "https://www.google.com",
    };
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
    </div>
    <nav>
      <div class="logo">
        <img src="/logo.png" alt="Phlox logo" />
      </div>
      <ul class="menu">
        <li
          v-for="(link, i) in arrNav"
          :key="i"
          :class="link === active ? 'active' : ''"
          @click="active = link"
        >
          <a :href="`#${link}`">{{ link }}</a>
        </li>
      </ul>
      <div class="actions">
        <button class="purchase btn green-gradient">Purchase</button>
        <div class="search">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>
      </div>
    </nav>
    <div class="jumbo">
      <img
        :src="`../src/assets/images/${arrJumboImg[activeJumboImg]}`"
        :alt="arrJumboImg[activeJumboImg]"
      />
      <p class="experience">17 years of experience</p>
      <h2>
        We Are a <br />
        Web Design <span>Agency</span>
      </h2>
      <p class="text">
        Far far away, behind the word mountains, far from the countries of
        Vokalia and Consonantia, there live the blind texts. Separated they live
        in the Bookmarksgrove right at the coast of the Semantics, a large
        language ocean.Separated they live in Bookmarksgrove.
      </p>
      <button class="read-more btn black-gradient">Read more</button>
      <p class="socials">
        <span>Facebook</span> - <span>Instagram</span> - <span>Youtube</span> -
        <span>Twitter</span>
      </p>
      <div class="selection black-gradient">
        <button
          v-for="(btn, i) in arrJumboImg"
          :key="i"
          @click="activeJumboImg = i"
          :class="activeJumboImg === i ? 'active-btn' : ''"
          class="btn"
        >
          0{{ i + 1 }}
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.info {
  height: 35px;
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #ffffff;
  background-color: #000000b3;
}

.info {
  p {
    flex: 1 0 0;
    margin-inline-start: 1rem;
  }
  p > span:first-child {
    margin-inline-end: 0.5rem;
  }
}

nav {
  padding: 1.2rem 2rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  text-transform: uppercase;
}

nav {
  .logo {
    flex: 1 0 0;
  }

  .logo > img {
    height: 100%;
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
    gap: 2rem;
  }

  .actions {
    .search {
      font-size: 1rem;
      color: #00d9a6;
    }
    .purchase:hover {
      background-image: linear-gradient(to right, #444444, #050505);
      box-shadow: 6px 8px 60px -5px #333333;
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

.jumbo {
  height: 800px;
  padding: 9rem 6.5rem;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.jumbo {
  img {
    max-width: 78%;
    min-width: 905px;
    position: absolute;
    top: -4%;
    right: -16%;
  }

  .experience {
    max-width: 40%;
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 1rem;
    letter-spacing: 0.4rem;
    word-spacing: 0.3rem;
    text-transform: uppercase;
    color: #00d9a6;
  }

  h2 {
    max-width: 45%;
    margin-bottom: 2.3rem;
    font-size: 3.3rem;
    font-weight: 600;
    line-height: 1.3;
  }

  h2 {
    span {
      color: #00d9a6;
    }
  }

  .text {
    max-width: 48%;
    margin-bottom: 3.3rem;
    font-size: 0.9rem;
    line-height: 1.5;
    word-spacing: 0.1rem;
    color: #888888;
  }

  .read-more {
    font-size: 0.8rem;
    margin-bottom: 4.4rem;
  }

  .read-more:hover {
    background-image: linear-gradient(to right, #90e062, #00d9a6);
    box-shadow: 6px 8px 60px -5px #9bffd0;
  }

  .socials {
    font-size: 0.8rem;
    text-transform: uppercase;
    word-spacing: 0.3rem;
  }

  .socials > span:hover {
    cursor: pointer;
    color: #00d9a6;
  }

  .selection {
    padding: 4px;
    display: flex;
    gap: 0.3rem;
    position: absolute;
    top: 77%;
    left: 38%;
    z-index: 5;
    color: #f9f9f9;
    border-radius: 10rem;
  }

  .selection {
    .btn {
      padding: 0.8rem 1.2rem;
      border-radius: 5rem;
    }
    .active-btn {
      background-image: linear-gradient(to right, #00d9a6, #90e062);
    }
  }
}
</style>
