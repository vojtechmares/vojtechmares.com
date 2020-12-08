<template>
  <article>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let article
    try {
      article = await $content('blog', params.slug).fetch()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log({ message: 'Article was not found.' })
    }

    return {
      article,
    }
  },
}
</script>
