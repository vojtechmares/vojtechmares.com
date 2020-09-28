<template>
  <div class="myself">
    <img src="~/assets/myself.jpg" alt="A photo of myself - Vojtech Mares" />
  </div>
</template>

<style scoped>
.myself {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  --size: 6rem;

  animation: 1s appear;
  margin: auto;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
