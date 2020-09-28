<template>
  <nav>
    <div class="name">
      <nuxt-link to="/">Vojtech Mares</nuxt-link>
    </div>
    <div class="toggle">
      <a href="#" title="Menu" @click="toggle"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </a>
    </div>
    <ul>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Training</a></li>
      <li><a href="#">Resume</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toggled: false,
    }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled
    },
  },
}
</script>

<style scoped>
nav {
  text-transform: uppercase;
  display: flex;
  flex-direction: row;

  /* align-items: center; */
  font-size: 1rem;
  transition: height ease 0.5s;
  color: #fff;
  background: #000;
}

.name {
  padding: 1rem;
}

nav .toggle {
  display: none;
  margin-left: auto;
  margin-right: 1rem;
  margin-top: auto;
  margin-bottom: auto;
}

ul {
  list-style: none;
  margin-left: auto;
}

@media screen and (max-width: 768px) {
  nav .toggle {
    --toggle-size: 1.5rem;

    display: block;
    width: var(--toggle-size);
    overflow: visible;
  }
}

li {
  display: inline-block;
  padding: 1rem;
  background: inherit;
  transition: background ease 0.4s;
}

li:hover {
  background: rgb(255, 195, 84);
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}
</style>
