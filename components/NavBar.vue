<template>
  <nav class="nav-bar">
    <ul class="nav-bar__list nav-bar-list">
      <li class="nav-bar-list__item nav-bar-list-item">
        <NuxtLink class="nav-bar-list-item__link" to="/"> Home </NuxtLink>
      </li>
      <li class="nav-bar-list__item nav-bar-list-item">
        <NuxtLink class="nav-bar-list-item__link" to="/table"> Table </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-bar-list {
  display: flex;
}

.nav-bar-list-item {
  &__link {
    display: block;
    padding: 10px 10px;
  }
}
</style>
