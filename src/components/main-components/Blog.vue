<script>
export default {};
</script>

<template>
  <section class="container" id="Blog">
    <h2>Latest News & Our <span>Blog</span></h2>
    <div class="card-list">
      <div class="card">
        <img src="../../assets/images/blog-01.jpg" alt="" />
        <div class="description">
          <p>May 24, 2018 - by Alex</p>
          <h3>Marketing Ideas</h3>
        </div>
      </div>
      <div class="card">
        <img src="../../assets/images/blog-02.jpg" alt="" />
        <div class="description">
          <p>May 24, 2018 - by Alex</p>
          <h3>Rest During Working Hours</h3>
        </div>
      </div>
      <div class="card">
        <img src="../../assets/images/blog-03.jpg" alt="" />
        <div class="description">
          <p>May 24, 2018 - by Alex</p>
          <h3>Develop Your Starup Ideas</h3>
        </div>
      </div>
    </div>
    <button class="all btn black-gradient">View all post</button>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 9rem 1rem;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.container {
  h2 {
    font-size: 3.2rem;
    position: relative;
    margin-bottom: 3rem;
  }

  h2::after {
    position: absolute;
    bottom: -2rem;
    left: 54%;
  }

  .card-list {
    margin-bottom: 6rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1.5rem;
  }

  .card-list {
    .card {
      position: relative;
      border-radius: 1rem;
      box-shadow: 6px 8px 60px -5px #aaaaaa;
    }

    .card {
      img {
        height: 100%;
        width: 100%;
        border-radius: 1rem;
      }

      .description {
        width: 80%;
        height: 130px;
        padding: 2rem 1.8rem;
        display: flex;
        flex-direction: column;
        justify-content: end;
        gap: 0.8rem;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 0.5rem;
        background-color: #ffffff;
        box-shadow: 0px 0px 60px 0px #c6c6c6;
      }

      .description {
        &:hover {
          cursor: pointer;
        }

        p {
          font-size: 0.8rem;
          color: #aaaaaa;
        }

        h3 {
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        h3::before {
          content: "";
          display: inline-block;
          width: 10px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background-color: #00d9a6;
        }
      }
    }
  }
  .all:hover {
    background-image: linear-gradient(to right, #90e062, #00d9a6);
    box-shadow: 6px 8px 60px -5px #9bffd0;
  }
}
</style>
