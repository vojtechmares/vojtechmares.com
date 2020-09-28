<template>
  <article>
    <h3>
      <template v-for="t in title">{{ t }}<br :key="t" /></template>
    </h3>
    <p class="pricing">{{ manday.rate }} {{ manday.currency }} / MD</p>
    <p class="description">
      {{ description }}
    </p>
    <a href="mailto:iam@vojtechmares.com" role="button">{{ buttonText }}</a>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: Array,
      required: false,
      default: () => {
        return ['Test', 'Test']
      },
    },
    manday: {
      type: Object,
      required: false,
      default: () => {
        return {
          rate: 8000,
          currency: 'CZK',
        }
      },
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: 'Hire me',
    },
  },
}
</script>

<style scoped>
article {
  display: flex;
  flex: 0 0 13rem;
  flex-direction: column;
  background: rgb(255, 195, 84);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 1.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 6px 19px rgba(79, 118, 178, 0.14);
  position: relative;
  top: 0;
  transition: top ease 0.5s;
}
article:hover {
  top: -0.75rem;
}
@media screen and (max-width: 900px) {
  article {
    margin: 1rem 1.5rem;
  }
}
.pricing {
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
}
.description {
  padding: 0.5rem 0;
  margin-bottom: 2rem;
}
a {
  position: absolute;
  bottom: 1.25rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: #000;
  color: white;
  border-radius: 30px;
  font-size: 0.8rem;
  text-align: center;
  box-shadow: none;
  transition: box-shadow ease 0.2s;
  font-weight: 700;
  width: calc(100% - 2rem);
}
a:hover {
  box-shadow: 0 4px 6px 0 rgba(1, 45, 65, 0.2);
}
p {
  font-size: 0.8rem;
}
</style>
