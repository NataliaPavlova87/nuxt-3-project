<template>
  <div class="container">
    <NavBar />
    <slot />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

ul {
  padding: 0;
}
</style>
