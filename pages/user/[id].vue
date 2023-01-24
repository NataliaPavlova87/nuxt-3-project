<template>
  <div class="user">
    <p>{{ data.name }}</p>
    <p>{{ data.email }}</p>
    <code>{{ data.address }}</code>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const { data } = await useUserIdData(router.currentRoute.value.params.id);
</script>
