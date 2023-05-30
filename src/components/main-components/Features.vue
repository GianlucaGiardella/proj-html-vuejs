<script>
export default {};
</script>

<template>
  <section class="container">
    <div class="presentation">
      <h2>
        We Are Here To <br />
        Make Your <span>Website</span> <br />
        Look More <span>Elegant</span> <br />
        And Stylish!
      </h2>
      <button class="all btn green-gradient">View All</button>
    </div>
    <div class="features">
      <section class="card speed">
        <font-awesome-icon :icon="['fas', 'gauge-high']" />
        <h3>Speed Optimization</h3>
        <p>
          Far far away, behind the word mountains, far from the countries of
          Vokalia Separated...
        </p>
      </section>
      <section class="card cloud">
        <font-awesome-icon :icon="['fas', 'cloud']" />
        <h3>Cloud Solution</h3>
        <p>
          Far far away, behind the word mountains, far from the countries of
          Vokalia Separated...
        </p>
      </section>
      <section class="card design">
        <font-awesome-icon :icon="['fas', 'tablet-screen-button']" />
        <h3>Website Design</h3>
        <p>
          Far far away, behind the word mountains, far from the countries of
          Vokalia Separated...
        </p>
      </section>
      <section class="card marketing">
        <font-awesome-icon :icon="['fas', 'stopwatch']" />
        <h3>Online Marketing</h3>
        <p>
          Far far away, behind the word mountains, far from the countries of
          Vokalia Separated...
        </p>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 8rem 1rem 10rem;
  display: flex;
  gap: 5rem;
  background-color: #ffffff99;
}

.presentation {
  margin-top: 3rem;
  flex: 0 0 calc(40% - 2.5rem);
}

.features {
  flex: 0 0 calc(60% - 2.5rem);
}

h2 {
  margin-bottom: 2.8rem;
  font-size: 3rem;
  line-height: 1.5;
}

h2 > span {
  color: #00d9a6;
}

.all:hover {
  background-image: linear-gradient(to right, #444444, #050505);
  box-shadow: 6px 8px 60px -5px #333333;
}

.features {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, 300px);
  column-gap: 2rem;
  row-gap: 3rem;
}

.speed {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.cloud {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.design {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.marketing {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.card {
  padding: 3rem 2rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 6px 8px 60px -5px #aaaaaa;
}

.card {
  .svg-inline--fa {
    height: 3rem;
    padding-bottom: 3rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.3rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.3;
    color: #00000073;
  }

  &:hover {
    cursor: pointer;
    color: #f9f9f9;
    background-image: linear-gradient(to top right, #00d9a6, #90e062);
  }

  &:hover p {
    color: #f9f9f9;
  }
}
</style>
