<template>
  <main>
    <div v-for="article in articles" :key="article.slug">
      <h3>{{ article.title }}</h3>
      <p>{{ article.description }}</p>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $context, params, error }) {
    let articles = []
    try {
      articles = await $context('articles')
        .only(['title', 'date', 'image', 'slug', 'description'])
        .where('draft', false)
        .sortBy('published', 'DESC')
        .fetch()
    } catch (e) {
      articles = []
    }
    return { articles }
  },
}
</script>
