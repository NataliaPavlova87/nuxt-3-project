<template>
  <div class="table-cell">
    <template v-if="usersInfo.link">
      <NuxtLink :to="usersInfo.link">
        {{ usersInfo.title }}
      </NuxtLink>
    </template>
    <span v-else class="table-cell__text">
      {{ usersInfo.title }}
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  usersInfo: {
    type: Object,
    default: () => {},
  },
});
</script>
