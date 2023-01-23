<template>
  <div class="table-page">
    <Table
      :users="data"
      :header-items="headerItems"
      class="table-page__content"
    />
  </div>
</template>

<script lang="ts" setup>
const { data } = await useUserData();
const headerItems = ["name", "email", "company", "city"];
</script>
