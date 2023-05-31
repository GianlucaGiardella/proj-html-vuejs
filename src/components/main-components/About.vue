<script>
export default {};
</script>

<template>
  <section class="container" id="About">
    <div class="images">
      <div class="bg">
        <img src="../../assets/images/about-02.jpg" alt="" />
        <img class="fg" src="../../assets/images/about-01.jpg" alt="" />
      </div>
    </div>
    <div class="presentation">
      <h2>
        learn more about<br />
        our <span>missions</span>
      </h2>
      <p>
        Far far away, behind the word mountains, far from the countries of
        Vokalia and Consonantia, there live the blind texts. Separated they live
        in the Bookmarksgrove right at the coast of the Semantics, a large
        language ocean.Separated they live in Bookmarksgrove.
      </p>
      <button class="more btn green-gradient">Read more</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 9rem 0 11rem;
  display: flex;
  background-color: #f5f5f5;
}

.images,
.presentation {
  flex: 0 0 50%;
}

.presentation {
  padding: 4.5rem;
}

.presentation {
  h2 {
    font-size: 3.2rem;
    margin-bottom: 2.2rem;
  }

  h2 > span {
    color: #00d9a6;
  }

  p {
    line-height: 1.3;
    margin-bottom: 2.5rem;
  }

  .more:hover {
    background-image: linear-gradient(to right, #444444, #050505);
    box-shadow: 6px 8px 60px -5px #333333;
  }
}

.images {
  position: relative;
}

.images {
  img,
  .bg {
    width: 600px;
    border-radius: 2rem;
  }
  .bg {
    position: relative;
    left: -40px;
  }

  .bg::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    border-radius: 2rem;
    background: linear-gradient(to top right, #90e062, #00d9a6);
    opacity: 0.7;
  }

  .fg {
    position: absolute;
    right: -12%;
    bottom: -5%;
    z-index: 9;
    border-radius: 1rem;
    background: unset;
  }
}
</style>
