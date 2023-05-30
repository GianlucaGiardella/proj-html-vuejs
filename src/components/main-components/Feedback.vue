<script>
export default {};
</script>

<template>
  <section class="container">
    <div class="feed">
      <font-awesome-icon class="quote" :icon="['fas', 'quote-left']" />
      <p>
        When it comes to barbequing, there are two main shools of thought for
        the thechniques that you can use. Freshly scrambled eggs whit applewood
        smocked bacon - are amazing!
      </p>
      <div class="profile">
        <img src="../../assets/images/about-01.jpg" alt="" />
        <h3>Lissa Durbin</h3>
        <p>Client</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  height: 750px;
  padding: 6rem 0;
  background: linear-gradient(rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.8)),
    url("../../assets/images/feedback-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
}

.feed {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.feed {
  .quote {
    margin: 2rem;
    font-size: 5rem;
    color: #00d9a6;
  }

  p {
    max-width: 750px;
    margin-bottom: 5rem;
    font-size: 1.5rem;
    line-height: 1.7;
    text-align: center;
    color: #aaa;
  }
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .profile {
    img {
      width: 90px;
      aspect-ratio: 1 / 1;
      margin-bottom: 1.5rem;
      object-fit: cover;
      border: 4px solid #ffffff;
      border-radius: 50%;
    }
    h3 {
      font-size: 1.5rem;
      text-transform: uppercase;
      color: #00d9a6;
    }
    p {
      color: #aaa;
    }
  }
}
</style>
