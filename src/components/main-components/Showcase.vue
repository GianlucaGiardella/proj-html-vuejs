<script>
export default {};
</script>

<template>
  <section class="container">
    <div class="presentation">
      <h2>
        Our recent <span>web designs</span> & <br />
        some examples of <br />
        past <span>projects</span>
      </h2>
      <p>
        Far far away, behind the word mountains, far from the countries of
        Vokalia and Consonantia, there live the blind texts. Separated they live
        in the Bookmarksgrove right at the coast of the Semantics, a large
        language ocean.Separated they live in Bookmarksgrove. Far far away,
        behind the word mountains, far from the countries of Vokalia and
        Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove.
      </p>
    </div>
    <div class="showcase">
      <img src="../../assets/images/showcase-01.jpg" alt="" />
      <img src="../../assets/images/showcase-02.jpg" alt="" />
      <img src="../../assets/images/showcase-03.jpg" alt="" />
      <img src="../../assets/images/showcase-04.jpg" alt="" />
      <img src="../../assets/images/showcase-05.jpg" alt="" />
      <img src="../../assets/images/showcase-06.jpg" alt="" />
      <img src="../../assets/images/showcase-07.jpg" alt="" />
      <img src="../../assets/images/showcase-08.jpg" alt="" />
    </div>
    <button class="more btn green-gradient">Read more</button>
    <div class="side-buttons">
      <div class="side-btn">
        <font-awesome-icon :icon="['fas', 'border-all']" /> Browse Demos
      </div>
      <div class="side-btn">
        <font-awesome-icon :icon="['fas', 'bag-shopping']" /> Buy Now!
      </div>
      <div class="side-btn">
        <font-awesome-icon :icon="['fas', 'file-export']" /> Export Section
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 8rem 1rem;
  display: grid;
  position: relative;
  background-color: #ffffff99;
}
.presentation {
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
}

.presentation {
  h2 {
    flex: 0 0 calc(45% - 0.5rem);
    font-size: 3.2rem;
  }

  h2::before {
    content: "";
    display: block;
    height: 5px;
    width: 60px;
    margin-bottom: 1.5rem;
    border-radius: 5rem;
    background-image: linear-gradient(to right, #90e062, #00d9a6);
  }

  h2 > span {
    color: #00d9a6;
  }

  p {
    flex: 0 0 calc(55% - 0.5rem);
    align-self: flex-end;
    line-height: 1.5;
    color: #888888;
  }
}

.showcase {
  margin-bottom: 6rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  column-gap: 0.3rem;
  row-gap: 0.1rem;
}

.showcase {
  img {
    border-radius: 0.5rem;
  }
}

.more {
  place-self: center;
}

.more:hover {
  background-image: linear-gradient(to right, #444444, #050505);
  box-shadow: 6px 8px 60px -5px #333333;
}

.side-buttons {
  position: absolute;
  right: 0;
  top: 45%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.side-buttons {
  .side-btn {
    color: #f5f5f5;
    font-size: 0.7rem;
    padding: 0.7rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    background-color: #00000073;
  }

  .side-btn:hover {
    cursor: pointer;
    color: #00d9a6;
  }
}
</style>
