<template>
  <div>
    <header>
      <div class="container intro">
        <Myself />
        <h1>{{ general.data.heading }}</h1>
        <h3>{{ general.data.subheading }}</h3>
      </div>
    </header>
    <section class="about">
      <div class="container">
        <nuxt-content :document="about" />
      </div>
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

section.services {
  padding-bottom: 2rem;
}

section.services > h2 {
  text-align: center;
  margin-top: 0;
}

section.about {
  margin: 0 auto;
  max-width: var(--width);
}

section.cards {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: var(--width);
  margin: 0 auto;
}

@media screen and (max-width: 900px) {
  section.cards {
    flex-direction: column;
  }
}
</style>
