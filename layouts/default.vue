<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
:root {
  --width: 42rem;
  --light: #fff;
  --dark: #000;
  --theme: var(--light);
  --theme-inverse: var(--dark);
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.25rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: linear-gradient(248.84deg, #f3f7fb -0.3%, #f3f3f9 102.04%);
  color: var(--theme-inverse);
}

a {
  color: var(--theme-inverse);
}

h1,
h2,
h3 {
  /* font-family: 'Fira Mono', monospace; */
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.container {
  margin: 0 auto;
  max-width: var(--width);
}

@media screen and (max-width: 900px) {
  .container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
