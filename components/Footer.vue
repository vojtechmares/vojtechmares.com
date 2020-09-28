<template>
  <footer>
    <div class="container">
      <section>
        <div class="column">
          <label class="title">Vojtech Mares</label>
          <ul>
            <li>
              <label>VAT ID</label><br />CZ06999280<br />
              <p>I am not VAT registered subject.</p>
            </li>
          </ul>
        </div>
        <div class="column">
          <label class="title">Website</label>
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Training</a></li>
            <li><a href="#">Resume</a></li>
          </ul>
        </div>
        <div class="column">
          <label class="title">Links</label>
          <ul>
            <li>
              <a href="https://www.youtube.com/channel/UChFur_NwVSbUozOcF_F2kMg"
                >GitHub</a
              >
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCR9Gcq0CMm6YgTzsDxAxjOQ"
                >Twitter</a
              >
            </li>
          </ul>
        </div>
        <div class="column custom">
          <p>
            <br />
            <a class="btn" href="mailto:iam@vojtechmares.com">Contact me</a
            ><br /><br />
            <span class="copy">
              &copy;&nbsp; {{ year }}
              <nuxt-link to="/">Vojtech Mares</nuxt-link>
            </span>
          </p>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
footer {
  background: rgb(255, 195, 84);
  padding: 2rem 0;
  color: black;
}

footer a {
  color: black;
}

footer li {
  list-style: none;
  margin-bottom: 0.125rem;
}

footer ul {
  padding: 0;
  font-size: 1rem;
}

footer .title {
  font-weight: 700;
  font-size: 1.25rem;
}

.copy {
  text-align: center;
}

.custom {
  display: block;
}

a.btn {
  text-decoration: none;
  padding: 0.5rem 1rem;

  /* background-color: rgb(65, 153, 247); */
  background-color: #000;
  color: #fff;
  border-radius: 30px;
  box-shadow: none;
  transition: box-shadow ease 0.2s;
}
a.btn:hover {
  box-shadow: 0 4px 6px 0 rgba(1, 45, 65, 0.2);
}

section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media screen and (max-width: 768px) {
  section {
    display: block;
  }

  .column:not(:first-child) {
    margin-top: 1rem;
  }
}

.column {
  display: block;
}

li p {
  max-width: 80%;
  color: #666;
  font-size: 0.75rem;
}
</style>
