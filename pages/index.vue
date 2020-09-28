<template>
  <div>
    <Navbar />
    <header>
      <div class="container intro">
        <Myself />
        <h1>{{ general.data.heading }}</h1>
        <h3>{{ general.data.subheading }}</h3>
      </div>
    </header>
    <section class="about">
      <p>
        <nuxt-content :document="about" />
      </p>
    </section>
    <section class="services">
      <h2>What I do</h2>
      <section class="cards">
        <Card
          v-for="s in services.data"
          :key="s.title[0]"
          :title="s.title"
          :manday="s.manday"
          :description="s.description"
          :button-text="s.buttonText"
        />
      </section>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const services = await $content('services').fetch()
    const about = await $content('about').fetch()
    const general = await $content('general').fetch()

    return { services, about, general }
  },
}
</script>

<style scoped>
header {
  /* background: linear-gradient(248.84deg, #f3f7fb -0.3%, #f3f3f9 102.04%); */

  background: rgb(255, 195, 84);
  background: linear-gradient(
    90deg,
    rgba(255, 216, 144, 1) 0%,
    rgba(255, 195, 84, 1) 50%,
    rgba(255, 216, 144, 1) 100%
  );
}

header > .intro {
  text-align: center;
  padding: 1rem 0;
}

p {
  margin: 1rem 0;
}

section.services {
  padding-bottom: 2rem;
  background: linear-gradient(248.84deg, #f3f7fb -0.3%, #f3f3f9 102.04%);

  /* background: rgb(255, 195, 84);
  background: linear-gradient(
    90deg,
    rgba(255, 195, 84, 1) 0%,
    rgba(252, 205, 117, 1) 61%,
    rgba(255, 216, 144, 1) 100%
  ); */
}

section.about {
  margin: 0 auto;
  max-width: var(--width);
}

section.services > h2 {
  text-align: center;
  margin-top: 0;
}

section.cards {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: var(--width);
  margin: 0 auto;
}

@media screen and (max-width: 900px) {
  section {
    flex-direction: column;
  }
}
</style>
