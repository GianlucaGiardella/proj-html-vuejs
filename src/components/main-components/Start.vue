<script>
export default {};
</script>

<template>
  <section class="container">
    <div class="ready">
      <div class="card new-project black-gradient">
        <p>Are You Ready?</p>
        <h3>Start a New Project</h3>
        <form>
          <input type="email" placeholder="Enter Your Email Address" />
          <button type="button">Submit</button>
        </form>
      </div>
      <div class="card start-now green-gradient">
        <p>What Are You Waiting For?</p>
        <h3>Let's Talk About Work</h3>
        <button class="start btn black-gradient">Start Now</button>
      </div>
    </div>
    <div class="sponsor">
      <img src="../../assets/images/sponsor-01.png" alt="sponsor-01" />
      <img src="../../assets/images/sponsor-02.png" alt="sponsor-02" />
      <img src="../../assets/images/sponsor-03.png" alt="sponsor-03" />
      <img src="../../assets/images/sponsor-04.png" alt="sponsor-04" />
      <img src="../../assets/images/sponsor-05.png" alt="sponsor-05" />
      <img src="../../assets/images/sponsor-06.png" alt="sponsor-06" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  background-color: #f5f5f5;
}

.container {
  .ready {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  .ready {
    .card {
      height: 330px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      border-radius: 1rem;
      overflow: hidden;
    }

    .card {
      p {
        font-size: 0.8rem;
        color: #ffffff80;
      }

      h3 {
        margin-bottom: 2.5rem;
        font-size: 2.3rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #ffffff;
      }
    }

    .new-project {
      form {
        width: 70%;
        display: flex;
        border-radius: 5rem;
        background-color: #70707059;
        overflow: hidden;
      }
      input {
        flex: 1 0 0;
        padding: 1rem;
        font-size: 0.8rem;
        outline: none;
        border-style: unset;
        color: #aaaaaa;
        background-color: #70707059;
      }
      button {
        padding: 1rem;
        font-size: 0.7rem;
        text-transform: uppercase;
        border-style: unset;
        color: #aaaaaa;
        background-color: #70707059;
      }

      button:hover {
        cursor: pointer;
        color: #ffffff;
      }
    }
  }

  .sponsor {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    place-items: center;
    gap: 4rem;
  }

  .sponsor > img:hover {
    cursor: pointer;
  }
}
</style>
